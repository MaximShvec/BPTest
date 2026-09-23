import { spawn, type ChildProcess } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { chromium, type Page } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

type Rect = { x: number; y: number; w: number; h: number };

function parseArgs(argv: string[]) {
  const positional: string[] = [];
  let old = false;
  let mask = "";
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--old") old = true;
    else if (arg === "--mask") {
      mask = argv[i + 1] ?? "";
      i += 1;
    } else if (arg) positional.push(arg);
  }
  const [route, sourceFile] = positional;
  if (!route || !sourceFile) {
    console.error('Usage: tsx scripts/visual-diff.ts <route> <sourceFile> [--old] [--mask "header,footer"]');
    process.exit(1);
  }
  return {
    route: route.startsWith("/") ? route : `/${route}`,
    sourceFile,
    old,
    mask: mask
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  };
}

function slugOf(route: string): string {
  const clean = route.replace(/^\/+|\/+$/g, "");
  return clean === "" ? "home" : clean.replaceAll("/", "-");
}

async function isUp(port: number): Promise<boolean> {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
    return response.status < 500;
  } catch {
    return false;
  }
}

async function waitFor(port: number, timeoutMs = 30000): Promise<void> {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await isUp(port)) return;
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error(`Timed out waiting for http://127.0.0.1:${port}/`);
}

function startStatic(port: number, dir: string): ChildProcess {
  return spawn("npx", ["--yes", "serve", dir, "-l", String(port), "--no-clipboard"], {
    cwd: process.cwd(),
    shell: true,
    stdio: "ignore",
  });
}

function blank(width: number, height: number): PNG {
  const png = new PNG({ width, height });
  for (let i = 0; i < png.data.length; i += 4) {
    png.data[i] = 243;
    png.data[i + 1] = 245;
    png.data[i + 2] = 245;
    png.data[i + 3] = 255;
  }
  return png;
}

function fit(src: PNG, width: number, height: number): PNG {
  const out = blank(width, height);
  PNG.bitblt(src, out, 0, 0, src.width, src.height, 0, 0);
  return out;
}

function paint(png: PNG, rect: Rect) {
  const x0 = Math.max(0, Math.floor(rect.x));
  const y0 = Math.max(0, Math.floor(rect.y));
  const x1 = Math.min(png.width, Math.ceil(rect.x + rect.w));
  const y1 = Math.min(png.height, Math.ceil(rect.y + rect.h));
  for (let y = y0; y < y1; y += 1) {
    for (let x = x0; x < x1; x += 1) {
      const i = (png.width * y + x) << 2;
      png.data[i] = 176;
      png.data[i + 1] = 176;
      png.data[i + 2] = 176;
      png.data[i + 3] = 255;
    }
  }
}

async function prepare(page: Page, mask: string[]): Promise<Rect[]> {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: "*{animation:none!important;transition:none!important}" });
  await page.evaluate(() => {
    document.querySelectorAll("video").forEach((node) => {
      const video = node as HTMLVideoElement;
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        /* not seekable */
      }
    });
  });
  if (mask.length === 0) return [];
  return page.evaluate((selectors) => {
    return selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector)).map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.x + window.scrollX,
          y: rect.y + window.scrollY,
          w: rect.width,
          h: rect.height,
        };
      }),
    );
  }, mask);
}

async function shoot(page: Page, url: string, mask: string[]): Promise<PNG> {
  await page.goto(url, { waitUntil: "networkidle" });
  const rects = await prepare(page, mask);
  const buffer = await page.screenshot({ fullPage: true, type: "png" });
  const png = PNG.sync.read(buffer);
  rects.forEach((rect) => paint(png, rect));
  return png;
}

async function main() {
  const { route, sourceFile, old, mask } = parseArgs(process.argv.slice(2));
  const sourcePort = old ? 5051 : 5050;
  const sourceDir = path.resolve(process.cwd(), old ? "../BalancePayLandingsOld" : "../BalancePayLandingsNew");
  const started: ChildProcess[] = [];

  if (!(await isUp(3000))) {
    console.error("Next.js is not running. Start it with: npm run dev");
    process.exit(1);
  }

  if (!(await isUp(sourcePort))) {
    started.push(startStatic(sourcePort, sourceDir));
    await waitFor(sourcePort);
  }

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: { width: 1512, height: 900 },
      deviceScaleFactor: 1,
    });
    if (old) {
      await context.addInitScript(() => {
        sessionStorage.setItem("bp_demo_session", "1");
      });
    }
    const implPage = await context.newPage();
    const srcPage = await context.newPage();
    const impl = await shoot(implPage, `http://127.0.0.1:3000${route}`, mask);
    const src = await shoot(srcPage, `http://127.0.0.1:${sourcePort}/${sourceFile}`, mask);
    const width = Math.max(impl.width, src.width);
    const height = Math.max(impl.height, src.height);
    const implFit = fit(impl, width, height);
    const srcFit = fit(src, width, height);
    const diff = blank(width, height);
    const mismatched = pixelmatch(implFit.data, srcFit.data, diff.data, width, height, { threshold: 0.1 });
    const slug = slugOf(route);
    const root = path.join(process.cwd(), ".screens");
    for (const dir of ["impl", "src", "diff"]) fs.mkdirSync(path.join(root, dir), { recursive: true });
    fs.writeFileSync(path.join(root, "impl", `${slug}.png`), PNG.sync.write(implFit));
    fs.writeFileSync(path.join(root, "src", `${slug}.png`), PNG.sync.write(srcFit));
    fs.writeFileSync(path.join(root, "diff", `${slug}.png`), PNG.sync.write(diff));
    const percent = (mismatched / (width * height)) * 100;
    console.log(`diff: ${percent.toFixed(2)}% (${mismatched} px)`);
    console.log(`height impl=${impl.height} src=${src.height}`);
    console.log(`wrote .screens/{impl,src,diff}/${slug}.png`);
  } finally {
    await browser.close();
    for (const child of started) child.kill();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
