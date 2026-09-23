import { z } from "zod";
import { audienceCardsSchema } from "./AudienceCards/schema";
import { blogPreviewSchema } from "./BlogPreview/schema";
import { cardsRowSchema } from "./CardsRow/schema";
import { ctaSchema } from "./Cta/schema";
import { ctaFinalSchema } from "./CtaFinal/schema";
import { faqSchema } from "./Faq/schema";
import { featureTileSchema } from "./FeatureTile/schema";
import { bindNestedSection, gridSectionSchema } from "./Grid/schema";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { heroSplitSchema } from "./HeroSplit/schema";
import { iconCardsSchema } from "./IconCards/schema";
import { managerCardSchema } from "./ManagerCard/schema";
import { placeholderSectionSchema } from "./Placeholder/schema";
import { productRowSchema } from "./ProductRow/schema";
import { referralBannerSchema } from "./ReferralBanner/schema";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { testimonialSchema } from "./Testimonial/schema";
import { trustBlockSchema } from "./TrustBlock/schema";
import { trustStripSchema } from "./TrustStrip/schema";

/** Schema-only registry. Component map lives in registry.ts so content checks do not load CSS modules. */
export const sectionSchemas = [
  placeholderSectionSchema,
  heroCenteredSchema,
  heroSplitSchema,
  splitMediaCardSchema,
  featureTileSchema,
  gridSectionSchema,
  productRowSchema,
  trustBlockSchema,
  trustStripSchema,
  cardsRowSchema,
  iconCardsSchema,
  managerCardSchema,
  audienceCardsSchema,
  testimonialSchema,
  referralBannerSchema,
  blogPreviewSchema,
  faqSchema,
  ctaSchema,
  ctaFinalSchema,
] as const;

export const sectionSchema = z.discriminatedUnion("type", sectionSchemas);

bindNestedSection(sectionSchema);

export type Section = z.infer<typeof sectionSchema>;
