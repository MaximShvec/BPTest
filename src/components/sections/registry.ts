import type { ComponentType } from "react";
import { AccountHero } from "./AccountHero/Component";
import { AnchorNav } from "./AnchorNav/Component";
import { anchorNavSchema } from "./AnchorNav/schema";
import { FeeTable } from "./FeeTable/Component";
import { feeTableSchema } from "./FeeTable/schema";
import { HeroIntro } from "./HeroIntro/Component";
import { heroIntroSchema } from "./HeroIntro/schema";
import { HeroStats } from "./HeroStats/Component";
import { heroStatsSchema } from "./HeroStats/schema";
import { LevelChain } from "./LevelChain/Component";
import { levelChainSchema } from "./LevelChain/schema";
import { MediaKit } from "./MediaKit/Component";
import { mediaKitSchema } from "./MediaKit/schema";
import { PartnerDesk } from "./PartnerDesk/Component";
import { partnerDeskSchema } from "./PartnerDesk/schema";
import { ReferralCalculator } from "./ReferralCalculator/Component";
import { referralCalculatorSchema } from "./ReferralCalculator/schema";
import { TileRow } from "./TileRow/Component";
import { tileRowSchema } from "./TileRow/schema";
import { accountHeroSchema } from "./AccountHero/schema";
import { AppBlock } from "./AppBlock/Component";
import { CaseStudy } from "./CaseStudy/Component";
import { caseStudySchema } from "./CaseStudy/schema";
import { MediaBlock } from "./MediaBlock/Component";
import { mediaBlockSchema } from "./MediaBlock/schema";
import { MetricBar } from "./MetricBar/Component";
import { metricBarSchema } from "./MetricBar/schema";
import { SystemCards } from "./SystemCards/Component";
import { systemCardsSchema } from "./SystemCards/schema";
import { TextTiles } from "./TextTiles/Component";
import { textTilesSchema } from "./TextTiles/schema";
import { appBlockSchema } from "./AppBlock/schema";
import { AudienceCards } from "./AudienceCards/Component";
import { audienceCardsSchema } from "./AudienceCards/schema";
import { BlogPreview } from "./BlogPreview/Component";
import { blogPreviewSchema } from "./BlogPreview/schema";
import { CardShowcase } from "./CardShowcase/Component";
import { cardShowcaseSchema } from "./CardShowcase/schema";
import { CardsRow } from "./CardsRow/Component";
import { cardsRowSchema } from "./CardsRow/schema";
import { CompareTable } from "./CompareTable/Component";
import { compareTableSchema } from "./CompareTable/schema";
import { Cta } from "./Cta/Component";
import { ctaSchema } from "./Cta/schema";
import { CtaAside } from "./CtaAside/Component";
import { ctaAsideSchema } from "./CtaAside/schema";
import { CtaFinal } from "./CtaFinal/Component";
import { ctaFinalSchema } from "./CtaFinal/schema";
import { Faq } from "./Faq/Component";
import { faqSchema } from "./Faq/schema";
import { FeatureTile } from "./FeatureTile/Component";
import { featureTileSchema } from "./FeatureTile/schema";
import { FlowSteps } from "./FlowSteps/Component";
import { flowStepsSchema } from "./FlowSteps/schema";
import { GridSection } from "./Grid/Component";
import { gridSectionSchema } from "./Grid/schema";
import { HeroMedia } from "./HeroMedia/Component";
import { heroMediaSchema } from "./HeroMedia/schema";
import { HeroConverter } from "./HeroConverter/Component";
import { heroConverterSchema } from "./HeroConverter/schema";
import { HeroAside } from "./HeroAside/Component";
import { heroAsideSchema } from "./HeroAside/schema";
import { HeroPanel } from "./HeroPanel/Component";
import { heroPanelSchema } from "./HeroPanel/schema";
import { HeroCentered } from "./HeroCentered/Component";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { HeroSplit } from "./HeroSplit/Component";
import { heroSplitSchema } from "./HeroSplit/schema";
import { InfoCards } from "./InfoCards/Component";
import { infoCardsSchema } from "./InfoCards/schema";
import { IconCards } from "./IconCards/Component";
import { iconCardsSchema } from "./IconCards/schema";
import { ManagerCard } from "./ManagerCard/Component";
import { managerCardSchema } from "./ManagerCard/schema";
import { MediaAside } from "./MediaAside/Component";
import { mediaAsideSchema } from "./MediaAside/schema";
import { MediaRow } from "./MediaRow/Component";
import { mediaRowSchema } from "./MediaRow/schema";
import { Onboarding } from "./Onboarding/Component";
import { onboardingSchema } from "./Onboarding/schema";
import { PlaceholderSection } from "./Placeholder/Component";
import { placeholderSectionSchema } from "./Placeholder/schema";
import { ProductCards } from "./ProductCards/Component";
import { productCardsSchema } from "./ProductCards/schema";
import { ProductFeature } from "./ProductFeature/Component";
import { productFeatureSchema } from "./ProductFeature/schema";
import { ProductRow } from "./ProductRow/Component";
import { productRowSchema } from "./ProductRow/schema";
import { RatesTable } from "./RatesTable/Component";
import { ratesTableSchema } from "./RatesTable/schema";
import { ReferralBanner } from "./ReferralBanner/Component";
import { referralBannerSchema } from "./ReferralBanner/schema";
import { ServiceCards } from "./ServiceCards/Component";
import { serviceCardsSchema } from "./ServiceCards/schema";
import { SplitPromo } from "./SplitPromo/Component";
import { splitPromoSchema } from "./SplitPromo/schema";
import { SpecMedia } from "./SpecMedia/Component";
import { specMediaSchema } from "./SpecMedia/schema";
import { SplitMediaCard } from "./SplitMediaCard/Component";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { StepCards } from "./StepCards/Component";
import { stepCardsSchema } from "./StepCards/schema";
import { StatPanel } from "./StatPanel/Component";
import { statPanelSchema } from "./StatPanel/schema";
import { VacancyList } from "./VacancyList/Component";
import { vacancyListSchema } from "./VacancyList/schema";
import { Testimonial } from "./Testimonial/Component";
import { testimonialSchema } from "./Testimonial/schema";
import { TextCards } from "./TextCards/Component";
import { textCardsSchema } from "./TextCards/schema";
import { TrustBlock } from "./TrustBlock/Component";
import { trustBlockSchema } from "./TrustBlock/schema";
import { WideMedia } from "./WideMedia/Component";
import { wideMediaSchema } from "./WideMedia/schema";
import { TrustStrip } from "./TrustStrip/Component";
import { trustStripSchema } from "./TrustStrip/schema";

export const sectionRegistry = {
  placeholder: { schema: placeholderSectionSchema, Component: PlaceholderSection },
  "hero-media": { schema: heroMediaSchema, Component: HeroMedia },
  "hero-converter": { schema: heroConverterSchema, Component: HeroConverter },
  "hero-panel": { schema: heroPanelSchema, Component: HeroPanel },
  "hero-aside": { schema: heroAsideSchema, Component: HeroAside },
  "hero-centered": { schema: heroCenteredSchema, Component: HeroCentered },
  "hero-split": { schema: heroSplitSchema, Component: HeroSplit },
  "split-promo": { schema: splitPromoSchema, Component: SplitPromo },
  "spec-media": { schema: specMediaSchema, Component: SpecMedia },
  "split-media-card": { schema: splitMediaCardSchema, Component: SplitMediaCard },
  "feature-tile": { schema: featureTileSchema, Component: FeatureTile },
  grid: { schema: gridSectionSchema, Component: GridSection },
  "card-showcase": { schema: cardShowcaseSchema, Component: CardShowcase },
  "product-cards": { schema: productCardsSchema, Component: ProductCards },
  "product-feature": { schema: productFeatureSchema, Component: ProductFeature },
  "media-aside": { schema: mediaAsideSchema, Component: MediaAside },
  "app-block": { schema: appBlockSchema, Component: AppBlock },
  "compare-table": { schema: compareTableSchema, Component: CompareTable },
  "product-row": { schema: productRowSchema, Component: ProductRow },
  "flow-steps": { schema: flowStepsSchema, Component: FlowSteps },
  "text-cards": { schema: textCardsSchema, Component: TextCards },
  "step-cards": { schema: stepCardsSchema, Component: StepCards },
  "stat-panel": { schema: statPanelSchema, Component: StatPanel },
  "service-cards": { schema: serviceCardsSchema, Component: ServiceCards },
  onboarding: { schema: onboardingSchema, Component: Onboarding },
  "media-row": { schema: mediaRowSchema, Component: MediaRow },
  "trust-block": { schema: trustBlockSchema, Component: TrustBlock },
  "wide-media": { schema: wideMediaSchema, Component: WideMedia },
  "trust-strip": { schema: trustStripSchema, Component: TrustStrip },
  "cards-row": { schema: cardsRowSchema, Component: CardsRow },
  "info-cards": { schema: infoCardsSchema, Component: InfoCards },
  "icon-cards": { schema: iconCardsSchema, Component: IconCards },
  "manager-card": { schema: managerCardSchema, Component: ManagerCard },
  "audience-cards": { schema: audienceCardsSchema, Component: AudienceCards },
  "vacancy-list": { schema: vacancyListSchema, Component: VacancyList },
  testimonial: { schema: testimonialSchema, Component: Testimonial },
  "rates-table": { schema: ratesTableSchema, Component: RatesTable },
  "referral-banner": { schema: referralBannerSchema, Component: ReferralBanner },
  "blog-preview": { schema: blogPreviewSchema, Component: BlogPreview },
  faq: { schema: faqSchema, Component: Faq },
  cta: { schema: ctaSchema, Component: Cta },
  "cta-aside": { schema: ctaAsideSchema, Component: CtaAside },
  "cta-final": { schema: ctaFinalSchema, Component: CtaFinal },
  "account-hero": { schema: accountHeroSchema, Component: AccountHero },
  "metric-bar": { schema: metricBarSchema, Component: MetricBar },
  "media-block": { schema: mediaBlockSchema, Component: MediaBlock },
  "system-cards": { schema: systemCardsSchema, Component: SystemCards },
  "text-tiles": { schema: textTilesSchema, Component: TextTiles },
  "case-study": { schema: caseStudySchema, Component: CaseStudy },
  "hero-intro": { schema: heroIntroSchema, Component: HeroIntro },
  "anchor-nav": { schema: anchorNavSchema, Component: AnchorNav },
  "fee-table": { schema: feeTableSchema, Component: FeeTable },
  "hero-stats": { schema: heroStatsSchema, Component: HeroStats },
  "level-chain": { schema: levelChainSchema, Component: LevelChain },
  "tile-row": { schema: tileRowSchema, Component: TileRow },
  "referral-calculator": { schema: referralCalculatorSchema, Component: ReferralCalculator },
  "partner-desk": { schema: partnerDeskSchema, Component: PartnerDesk },
  "media-kit": { schema: mediaKitSchema, Component: MediaKit },
} satisfies Record<string, { schema: unknown; Component: ComponentType<never> }>;
