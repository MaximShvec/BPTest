import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "dark" | "outline" | "outline-dark" | "outline-ink" | "ghost" | "white";
export type ButtonSize = "xl" | "xl-text" | "lg" | "md";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  spread?: boolean;
  ring?: "#646464" | "#939393";
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ActionProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export type ButtonProps = LinkProps | ActionProps;

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  dark: styles.dark,
  outline: styles.outline,
  "outline-dark": styles.outlineDark,
  "outline-ink": styles.outlineInk,
  ghost: styles.ghost,
  white: styles.white,
};

const sizeClass: Record<ButtonSize, string> = {
  xl: styles.xl,
  "xl-text": styles.xlText,
  lg: styles.lg,
  md: styles.md,
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "lg", fullWidth = false, spread = false, ring, className, children } = props;
  const classNames = cx(
    styles.button,
    variantClass[variant],
    sizeClass[size],
    fullWidth && styles.fullWidth,
    spread && styles.spread,
    className,
  );
  const style: CSSProperties | undefined = ring ? { ["--ring" as string]: ring } : undefined;

  if (props.href) {
    const external = props.href.startsWith("http");
    if (external) {
      return (
        <a className={classNames} style={style} href={props.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={classNames} style={style} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} style={style} type={props.type ?? "button"} onClick={props.onClick}>
      {children}
    </button>
  );
}
