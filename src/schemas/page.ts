import { z } from "zod";
import { sectionSchema } from "@/components/sections/schemas";

export const pageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  sections: z.array(sectionSchema),
});

export type Page = z.infer<typeof pageSchema>;
