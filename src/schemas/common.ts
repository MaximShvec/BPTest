import { z } from "zod";

export const commonSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
  }),
  copyright: z.string(),
  legalText: z.string(),
  cta: z.object({
    login: z.string(),
    signup: z.string(),
  }),
});

export type Common = z.infer<typeof commonSchema>;
