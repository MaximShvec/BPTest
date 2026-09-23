import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { commonSchema, type Common } from "@/schemas/common";
import { pageSchema, type Page } from "@/schemas/page";

// TODO: здесь позже будет fetch к API админки с revalidate.

function contentFile(...parts: string[]): string {
  return path.join(process.cwd(), "content", ...parts);
}

function load<S extends z.ZodType>(filePath: string, schema: S): z.infer<S> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`);
  }
  let json: unknown;
  try {
    json = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid JSON in ${filePath}: ${message}`);
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    throw new Error(`Invalid content ${filePath}:\n${parsed.error.message}`);
  }
  return parsed.data;
}

export function getCommon(locale = "ru"): Common {
  return load(contentFile(locale, "common.json"), commonSchema);
}

export function getNav(locale = "ru"): unknown {
  return load(contentFile(locale, "nav.json"), z.unknown());
}

export function getPage(slug: string, locale = "ru"): Page {
  return load(contentFile(locale, "pages", `${slug}.json`), pageSchema);
}

export function getCollection(name: string, locale = "ru"): unknown[] {
  const dir = contentFile(locale, "collections", name);
  if (!fs.existsSync(dir)) {
    throw new Error(`Content collection not found: ${dir}`);
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => load(path.join(dir, file), z.unknown()));
}

export function getEntry(name: string, slug: string, locale = "ru"): unknown {
  return load(contentFile(locale, "collections", name, `${slug}.json`), z.unknown());
}
