import type { SVGProps } from "react";

export function ChevronDownIcon({ width = 10, height = 10, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00006 5.93192L8.46973 2.54688L9.53039 3.58167L5.00006 8.0015L0.469727 3.58167L1.53039 2.54688L5.00006 5.93192Z"
      />
    </svg>
  );
}
