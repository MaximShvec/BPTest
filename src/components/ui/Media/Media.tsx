import Image from "next/image";
import type { CSSProperties } from "react";
import type { Media as MediaValue } from "@/schemas/primitives";
import { cx } from "@/lib/cx";
import { Placeholder } from "@/components/ui/Placeholder";
import styles from "./Media.module.css";

export function Media({ media, className, radius }: { media: MediaValue; className?: string; radius?: number | string }) {
  const style = { borderRadius: radius } as CSSProperties;

  if ("placeholder" in media) {
    return <Placeholder label={media.placeholder} ratio={media.ratio} className={className} radius={radius} />;
  }

  if ("video" in media) {
    return (
      <video
        className={cx(styles.video, className)}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={media.poster}
      >
        <source src={media.video} />
      </video>
    );
  }

  const isSvg = media.src.endsWith(".svg");
  if (media.width && media.height) {
    return (
      <Image
        className={cx(styles.image, className)}
        style={style}
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        unoptimized={isSvg}
      />
    );
  }

  return (
    <span className={cx(styles.fill, className)} style={style}>
      <Image src={media.src} alt={media.alt} fill sizes="100vw" unoptimized={isSvg} className={styles.image} />
    </span>
  );
}
