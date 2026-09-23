import { z } from "zod";
import { audienceCardsSchema } from "./AudienceCards/schema";
import { blogPreviewSchema } from "./BlogPreview/schema";
import { appBlockSchema } from "./AppBlock/schema";
import { cardsRowSchema } from "./CardsRow/schema";
import { cardShowcaseSchema } from "./CardShowcase/schema";
import { compareTableSchema } from "./CompareTable/schema";
import { ctaSchema } from "./Cta/schema";
import { ctaAsideSchema } from "./CtaAside/schema";
import { ctaFinalSchema } from "./CtaFinal/schema";
import { faqSchema } from "./Faq/schema";
import { featureTileSchema } from "./FeatureTile/schema";
import { flowStepsSchema } from "./FlowSteps/schema";
import { bindNestedSection, gridSectionSchema } from "./Grid/schema";
import { heroConverterSchema } from "./HeroConverter/schema";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { heroAsideSchema } from "./HeroAside/schema";
import { heroPanelSchema } from "./HeroPanel/schema";
import { heroSplitSchema } from "./HeroSplit/schema";
import { iconCardsSchema } from "./IconCards/schema";
import { managerCardSchema } from "./ManagerCard/schema";
import { mediaAsideSchema } from "./MediaAside/schema";
import { mediaRowSchema } from "./MediaRow/schema";
import { onboardingSchema } from "./Onboarding/schema";
import { placeholderSectionSchema } from "./Placeholder/schema";
import { productCardsSchema } from "./ProductCards/schema";
import { productFeatureSchema } from "./ProductFeature/schema";
import { productRowSchema } from "./ProductRow/schema";
import { referralBannerSchema } from "./ReferralBanner/schema";
import { ratesTableSchema } from "./RatesTable/schema";
import { serviceCardsSchema } from "./ServiceCards/schema";
import { specMediaSchema } from "./SpecMedia/schema";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { stepCardsSchema } from "./StepCards/schema";
import { statPanelSchema } from "./StatPanel/schema";
import { testimonialSchema } from "./Testimonial/schema";
import { textCardsSchema } from "./TextCards/schema";
import { trustBlockSchema } from "./TrustBlock/schema";
import { trustStripSchema } from "./TrustStrip/schema";

/** Schema-only registry. Component map lives in registry.ts so content checks do not load CSS modules. */
export const sectionSchemas = [
  placeholderSectionSchema,
  heroConverterSchema,
  heroCenteredSchema,
  heroAsideSchema,
  heroPanelSchema,
  heroSplitSchema,
  specMediaSchema,
  splitMediaCardSchema,
  featureTileSchema,
  gridSectionSchema,
  cardShowcaseSchema,
  productCardsSchema,
  productFeatureSchema,
  mediaAsideSchema,
  appBlockSchema,
  compareTableSchema,
  productRowSchema,
  flowStepsSchema,
  textCardsSchema,
  stepCardsSchema,
  statPanelSchema,
  ratesTableSchema,
  serviceCardsSchema,
  onboardingSchema,
  mediaRowSchema,
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
  ctaAsideSchema,
  ctaFinalSchema,
] as const;

export const sectionSchema = z.discriminatedUnion("type", sectionSchemas);

bindNestedSection(sectionSchema);

export type Section = z.infer<typeof sectionSchema>;
