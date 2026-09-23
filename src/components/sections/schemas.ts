import { z } from "zod";
import { blogPreviewSchema } from "./BlogPreview/schema";
import { cardsRowSchema } from "./CardsRow/schema";
import { ctaFinalSchema } from "./CtaFinal/schema";
import { faqSchema } from "./Faq/schema";
import { featureTileSchema } from "./FeatureTile/schema";
import { bindNestedSection, gridSectionSchema } from "./Grid/schema";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { placeholderSectionSchema } from "./Placeholder/schema";
import { productRowSchema } from "./ProductRow/schema";
import { referralBannerSchema } from "./ReferralBanner/schema";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { trustBlockSchema } from "./TrustBlock/schema";

/** Schema-only registry. Component map lives in registry.ts so content checks do not load CSS modules. */
export const sectionSchemas = [
  placeholderSectionSchema,
  heroCenteredSchema,
  splitMediaCardSchema,
  featureTileSchema,
  gridSectionSchema,
  productRowSchema,
  trustBlockSchema,
  cardsRowSchema,
  referralBannerSchema,
  blogPreviewSchema,
  faqSchema,
  ctaFinalSchema,
] as const;

export const sectionSchema = z.discriminatedUnion("type", sectionSchemas);

bindNestedSection(sectionSchema);

export type Section = z.infer<typeof sectionSchema>;
