import type { ReactElement, SVGProps } from "react";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { ChevronDownIcon } from "@/components/icons/chevron-down";
import { ChevronSmallIcon } from "@/components/icons/chevron-small";
import { GlobeIcon } from "@/components/icons/globe";
import { AssetIcon, BracketsIcon, ChatIcon, PayCardIcon, ShieldIcon, SwapIcon, TrendIcon, WalletIcon } from "@/components/icons/line";
import { LockIcon } from "@/components/icons/lock";
import { MailIcon } from "@/components/icons/mail";
import { MinusIcon } from "@/components/icons/minus";
import { PlusIcon } from "@/components/icons/plus";

const icons = {
  "arrow-right": ArrowRightIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  "chevron-down": ChevronDownIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  lock: LockIcon,
  "chevron-small": ChevronSmallIcon,
  swap: SwapIcon,
  asset: AssetIcon,
  "pay-card": PayCardIcon,
  wallet: WalletIcon,
  trend: TrendIcon,
  brackets: BracketsIcon,
  shield: ShieldIcon,
  chat: ChatIcon,
} satisfies Record<string, (props: SVGProps<SVGSVGElement>) => ReactElement>;

export type IconName = keyof typeof icons;

export function Icon({ name, size, className }: { name: IconName; size?: number; className?: string }) {
  const Glyph = icons[name];
  return <Glyph width={size} height={size} className={className} />;
}
