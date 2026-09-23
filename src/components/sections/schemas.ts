import { z } from "zod";
import { placeholderSectionSchema } from "./Placeholder/schema";

/** Schema-only registry. Component map lives in registry.ts so content checks do not load CSS modules. */
export const sectionSchemas = [placeholderSectionSchema] as const;

export const sectionSchema = z.discriminatedUnion("type", sectionSchemas);

export type Section = z.infer<typeof sectionSchema>;
