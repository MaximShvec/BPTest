import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { authSchema } from "../src/schemas/auth";
import { commonSchema } from "../src/schemas/common";
import { navSchema } from "../src/schemas/nav";
import { pageSchema } from "../src/schemas/page";

const contentRoot = path.join(process.cwd(), "content");

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith(".json")) files.push(full);
  }
  return files;
}

function schemaFor(filePath: string): z.ZodType {
  const rel = path.relative(contentRoot, filePath).replaceAll("\\", "/");
  if (rel.endsWith("/common.json") || rel === "common.json") return commonSchema;
  if (rel.endsWith("/nav.json") || rel === "nav.json") return navSchema;
  if (rel.endsWith("/pages/auth.json")) return authSchema;
  if (rel.includes("/pages/")) return pageSchema;
  if (rel.includes("/collections/")) return z.unknown();
  throw new Error(`No schema for content file: ${rel}`);
}

const files = walk(contentRoot);
let failed = 0;

if (files.length === 0) {
  console.error(`No JSON files under ${contentRoot}`);
  process.exit(1);
}

for (const file of files) {
  const rel = path.relative(contentRoot, file);
  let json: unknown;
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    failed += 1;
    const message = error instanceof Error ? error.message : String(error);
    console.error(`${rel}: invalid JSON — ${message}`);
    continue;
  }
  let schema: z.ZodType;
  try {
    schema = schemaFor(file);
  } catch (error) {
    failed += 1;
    console.error(error instanceof Error ? error.message : String(error));
    continue;
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    failed += 1;
    console.error(`${rel}:\n${parsed.error.message}`);
  } else {
    console.log(`ok ${rel}`);
  }
}

if (failed > 0) {
  console.error(`content:check failed (${failed})`);
  process.exit(1);
}

console.log(`content:check passed (${files.length})`);
