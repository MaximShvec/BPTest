import { z } from "zod";

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "dark", "outline", "outline-dark", "outline-ink", "ghost", "white"]).optional(),
  note: z.string().optional(),
  noteTone: z.enum(["dirty", "muted", "gray"]).optional(),
  size: z.enum(["xl", "xl-text", "lg", "md"]).optional(),
  ring: z.enum(["#646464", "#939393", "#8C6E00"]).optional(),
  external: z.boolean().optional(),
});

export const imageMediaSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const videoMediaSchema = z.object({
  video: z.string(),
  poster: z.string().optional(),
});

export const placeholderMediaSchema = z.object({
  placeholder: z.string(),
  ratio: z.string().optional(),
});

export const mediaSchema = z.union([imageMediaSchema, videoMediaSchema, placeholderMediaSchema]);

export const themeSchema = z.enum(["light", "white", "dark", "black", "lime", "blue"]);

export type Link = z.infer<typeof linkSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type Theme = z.infer<typeof themeSchema>;
