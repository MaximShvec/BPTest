import { z } from "zod";
import { accountHeroSchema } from "./AccountHero/schema";
import { anchorNavSchema } from "./AnchorNav/schema";
import { beforeAfterSchema } from "./BeforeAfter/schema";
import { casePathSchema } from "./CasePath/schema";
import { channelBoardSchema } from "./ChannelBoard/schema";
import { accountPairSchema } from "./AccountPair/schema";
import { assetGridSchema } from "./AssetGrid/schema";
import { copyShotSchema } from "./CopyShot/schema";
import { cryptoHeroSchema } from "./CryptoHero/schema";
import { ctaPanelSchema } from "./CtaPanel/schema";
import { headCardsSchema } from "./HeadCards/schema";
import { ioColumnsSchema } from "./IoColumns/schema";
import { payoutBlockSchema } from "./PayoutBlock/schema";
import { productLinksSchema } from "./ProductLinks/schema";
import { riskSplitSchema } from "./RiskSplit/schema";
import { swapPanelSchema } from "./SwapPanel/schema";
import { featureRowsSchema } from "./FeatureRows/schema";
import { feeTableSchema } from "./FeeTable/schema";
import { kybPanelSchema } from "./KybPanel/schema";
import { mediaQuoteSchema } from "./MediaQuote/schema";
import { moneyRouteSchema } from "./MoneyRoute/schema";
import { payHeroSchema } from "./PayHero/schema";
import { scenarioCardsSchema } from "./ScenarioCards/schema";
import { heroIntroSchema } from "./HeroIntro/schema";
import { heroStatsSchema } from "./HeroStats/schema";
import { levelChainSchema } from "./LevelChain/schema";
import { mediaKitSchema } from "./MediaKit/schema";
import { partnerDeskSchema } from "./PartnerDesk/schema";
import { referralCalculatorSchema } from "./ReferralCalculator/schema";
import { tileRowSchema } from "./TileRow/schema";
import { audienceCardsSchema } from "./AudienceCards/schema";
import { caseStudySchema } from "./CaseStudy/schema";
import { mediaBlockSchema } from "./MediaBlock/schema";
import { metricBarSchema } from "./MetricBar/schema";
import { systemCardsSchema } from "./SystemCards/schema";
import { textTilesSchema } from "./TextTiles/schema";
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
import { heroMediaSchema } from "./HeroMedia/schema";
import { heroConverterSchema } from "./HeroConverter/schema";
import { heroCenteredSchema } from "./HeroCentered/schema";
import { heroAsideSchema } from "./HeroAside/schema";
import { heroPanelSchema } from "./HeroPanel/schema";
import { heroSplitSchema } from "./HeroSplit/schema";
import { infoCardsSchema } from "./InfoCards/schema";
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
import { splitPromoSchema } from "./SplitPromo/schema";
import { splitMediaCardSchema } from "./SplitMediaCard/schema";
import { stepCardsSchema } from "./StepCards/schema";
import { statPanelSchema } from "./StatPanel/schema";
import { vacancyListSchema } from "./VacancyList/schema";
import { testimonialSchema } from "./Testimonial/schema";
import { textCardsSchema } from "./TextCards/schema";
import { trustBlockSchema } from "./TrustBlock/schema";
import { wideMediaSchema } from "./WideMedia/schema";
import { trustStripSchema } from "./TrustStrip/schema";

/** Schema-only registry. Component map lives in registry.ts so content checks do not load CSS modules. */
export const sectionSchemas = [
  placeholderSectionSchema,
  heroMediaSchema,
  heroConverterSchema,
  heroCenteredSchema,
  heroAsideSchema,
  heroPanelSchema,
  heroSplitSchema,
  splitPromoSchema,
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
  wideMediaSchema,
  trustStripSchema,
  cardsRowSchema,
  infoCardsSchema,
  iconCardsSchema,
  managerCardSchema,
  audienceCardsSchema,
  vacancyListSchema,
  testimonialSchema,
  referralBannerSchema,
  blogPreviewSchema,
  faqSchema,
  ctaSchema,
  ctaAsideSchema,
  ctaFinalSchema,
  accountHeroSchema,
  metricBarSchema,
  mediaBlockSchema,
  systemCardsSchema,
  textTilesSchema,
  caseStudySchema,
  heroIntroSchema,
  anchorNavSchema,
  feeTableSchema,
  heroStatsSchema,
  levelChainSchema,
  tileRowSchema,
  referralCalculatorSchema,
  partnerDeskSchema,
  mediaKitSchema,
  payHeroSchema,
  moneyRouteSchema,
  casePathSchema,
  beforeAfterSchema,
  featureRowsSchema,
  channelBoardSchema,
  scenarioCardsSchema,
  kybPanelSchema,
  mediaQuoteSchema,
  ctaPanelSchema,
  cryptoHeroSchema,
  headCardsSchema,
  accountPairSchema,
  assetGridSchema,
  ioColumnsSchema,
  payoutBlockSchema,
  swapPanelSchema,
  riskSplitSchema,
  copyShotSchema,
  productLinksSchema,
] as const;

export const sectionSchema = z.discriminatedUnion("type", sectionSchemas);

bindNestedSection(sectionSchema);

export type Section = z.infer<typeof sectionSchema>;
