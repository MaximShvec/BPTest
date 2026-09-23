import type { SVGProps } from "react";

export function LogoIcon({ width = 34, height = 34, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0005 3.8147e-06C15.523 3.8147e-06 20 4.47702 20 10.0005C20 13.7012 17.9891 16.9326 14.9997 18.6624V10.0085V10.0005C14.9997 7.23826 12.7617 5.00025 10.0005 5.00025C9.08909 5.00025 8.23571 5.24336 7.50038 5.66855V0.315146C8.29873 0.109053 9.13711 3.8147e-06 10.0005 3.8147e-06ZM5.00025 9.9915V10.0005V10.0085V10.0325C5.01726 12.7788 7.24926 14.9998 10.0005 14.9998C10.9109 14.9998 11.7643 14.7566 12.4996 14.3315V19.6849C11.7013 19.891 10.8629 20 10.0005 20C4.47701 20 0 15.523 0 10.0005C0 6.29884 2.0109 3.06738 5.00025 1.33861V9.9915Z"
      />
    </svg>
  );
}
