import type { ComponentType } from "react";
import { BlogPreview } from "./BlogPreview/Component";
import { blogPreviewSchema } from "./BlogPreview/schema";
import { CardsRow } from "./CardsRow/Component";
import { cardsRowSchema } from "./CardsRow/schema";
import { CtaFinal } from "./CtaFinal/Component";
import { ctaFinalSchema } from "./CtaFinal/schema";
import { Faq } from "./Faq/Component";
import { faqSchema } from "./Faq/schema";
import { FeatureTile } from "./FeatureTile/Component";
import { featureTileSchema } from "./FeatureTile/schema";
import { GridSection } from "./Grid/Component";
import { gridSectionSchema } from "./Grid/schema";
import { HeroCentered } from "./HeroCentered/Component";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { PlaceholderSection } from "./Placeholder/Component";
import { placeholderSectionSchema } from "./Placeholder/schema";
import { ProductRow } from "./ProductRow/Component";
import { productRowSchema } from "./ProductRow/schema";
import { ReferralBanner } from "./ReferralBanner/Component";
import { referralBannerSchema } from "./ReferralBanner/schema";
import { SplitMediaCard } from "./SplitMediaCard/Component";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { TrustBlock } from "./TrustBlock/Component";
import { trustBlockSchema } from "./TrustBlock/schema";

export const sectionRegistry = {
  placeholder: { schema: placeholderSectionSchema, Component: PlaceholderSection },
  "hero-centered": { schema: heroCenteredSchema, Component: HeroCentered },
  "split-media-card": { schema: splitMediaCardSchema, Component: SplitMediaCard },
  "feature-tile": { schema: featureTileSchema, Component: FeatureTile },
  grid: { schema: gridSectionSchema, Component: GridSection },
  "product-row": { schema: productRowSchema, Component: ProductRow },
  "trust-block": { schema: trustBlockSchema, Component: TrustBlock },
  "cards-row": { schema: cardsRowSchema, Component: CardsRow },
  "referral-banner": { schema: referralBannerSchema, Component: ReferralBanner },
  "blog-preview": { schema: blogPreviewSchema, Component: BlogPreview },
  faq: { schema: faqSchema, Component: Faq },
  "cta-final": { schema: ctaFinalSchema, Component: CtaFinal },
} satisfies Record<string, { schema: unknown; Component: ComponentType<never> }>;
