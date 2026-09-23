import { z } from "zod";
import { linkSchema } from "@/schemas/primitives";

export const promoSchema = z.object({
  icon: z.string().optional(),
  iconWidth: z.number().optional(),
  iconHeight: z.number().optional(),
  title: z.string(),
  subtitle: z.string(),
  href: z.string(),
});

export const dropdownSchema = z.object({
  caption: z.string().optional(),
  columns: z.array(z.array(linkSchema)),
  promo: promoSchema.optional(),
  /** wide = 400px, simple = min 220px. По умолчанию wide, если есть промо или больше одной колонки. */
  panel: z.enum(["wide", "simple"]).optional(),
});

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  /** button — как «Компания» и «Разработчикам» в Old: со стрелкой, клик переключает панель. */
  trigger: z.enum(["link", "button"]).optional(),
  dropdown: dropdownSchema.optional(),
});

export const languageSchema = z.object({
  code: z.string(),
  label: z.string(),
  active: z.boolean().optional(),
});

export const navSchema = z.object({
  header: z.object({
    items: z.array(navItemSchema),
    languages: z.array(languageSchema),
    actions: z.object({
      login: linkSchema,
      signup: linkSchema,
    }),
  }),
  footer: z.object({
    columns: z.array(
      z.object({
        title: z.string(),
        links: z.array(linkSchema),
      }),
    ),
    exchange: z.object({
      tabs: z.array(z.string()),
      buyLabel: z.string(),
      sellLabel: z.string(),
      assets: z.array(z.string()),
      hrefPattern: z.string(),
    }),
    legalLinks: z.array(linkSchema),
    paymentBadges: z.array(z.object({ placeholder: z.string() })),
    socials: z.array(
      z.object({
        name: z.string(),
        href: z.string(),
        count: z.string(),
      }),
    ),
  }),
});

export type Nav = z.infer<typeof navSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type NavDropdown = z.infer<typeof dropdownSchema>;
export type NavLanguage = z.infer<typeof languageSchema>;
