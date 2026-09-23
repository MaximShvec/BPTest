import { z } from "zod";

export const authLangSchema = z.enum(["en", "ru"]);

export const authLinkKeySchema = z.enum(["privacy", "terms", "cookie", "support", "help", "more"]);

export const authSchema = z.object({
  brand: z.string(),
  title: z.string(),
  titleSignup: z.string(),
  email: z.string(),
  password: z.string(),
  forgot: z.string(),
  forgotNote: z.string(),
  noAccount: z.string(),
  haveAccount: z.string(),
  signup: z.string(),
  signin: z.string(),
  submit: z.string(),
  submitSignup: z.string(),
  privacy: z.string(),
  terms: z.string(),
  cookie: z.string(),
  support: z.string(),
  help: z.string(),
  more: z.string(),
  headline: z.string(),
  subhead: z.string(),
  partners: z.string(),
  links: z.array(
    z.object({
      key: authLinkKeySchema,
      href: z.string(),
      external: z.boolean().optional(),
    }),
  ),
  copyright: z.string(),
  flags: z.object({
    en: z.string(),
    ru: z.string(),
  }),
  languages: z.array(
    z.object({
      code: authLangSchema,
      label: z.string(),
    }),
  ),
  video: z.string(),
});

export type Auth = z.infer<typeof authSchema>;
export type AuthLang = z.infer<typeof authLangSchema>;
export type AuthLinkKey = z.infer<typeof authLinkKeySchema>;
