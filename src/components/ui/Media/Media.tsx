"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import type { Media as MediaValue } from "@/schemas/primitives";
import { cx } from "@/lib/cx";
import { Placeholder } from "@/components/ui/Placeholder";
import styles from "./Media.module.css";

function LoopVideo({
  src,
  poster,
  className,
  style,
}: {
  src: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const play = video.play();
    if (play) play.catch(() => undefined);
  }, []);

  return (
    <video
      ref={ref}
      className={cx(styles.video, className)}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} />
    </video>
  );
}

export function Media({
  media,
  className,
  radius,
  borderColor,
  width,
  height,
}: {
  media: MediaValue;
  className?: string;
  radius?: number | string;
  borderColor?: string;
  width?: number | string;
  height?: number | string;
}) {
  const style = { borderRadius: radius } as CSSProperties;

  if ("placeholder" in media) {
    return (
      <Placeholder
        label={media.placeholder}
        ratio={media.ratio}
        className={className}
        radius={radius}
        borderColor={borderColor}
        width={width}
        height={height}
      />
    );
  }

  if ("video" in media) {
    return <LoopVideo src={media.video} poster={media.poster} className={className} style={style} />;
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
