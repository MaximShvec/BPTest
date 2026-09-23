import type { ReactNode, SVGProps } from "react";

export function LineIcon({ children, width = 24, height = 24, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SwapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M4 8h12" />
      <path d="M12 4l4 4-4 4" />
      <path d="M20 16H8" />
      <path d="M12 12l-4 4 4 4" />
    </LineIcon>
  );
}

export function AssetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8" />
      <path d="M9.5 10.5h5" />
      <path d="M9.5 13.5h5" />
    </LineIcon>
  );
}

export function PayCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </LineIcon>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M16 12h2" />
    </LineIcon>
  );
}

export function TrendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M4 18L10 11l4 4 6-8" />
      <path d="M20 12V7h-5" />
    </LineIcon>
  );
}

export function BracketsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M8 7L4 12l4 5" />
      <path d="M16 7l4 5-4 5" />
    </LineIcon>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </LineIcon>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <LineIcon {...props}>
      <path d="M21 12a9 9 0 10-3.2 6.9L21 21z" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </LineIcon>
  );
}
