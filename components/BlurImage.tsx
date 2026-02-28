"use client";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface BlurImageProps {
  src: string | StaticImageData;
  alt: string;
  placeholderSrc?: string;
  containerClassname?: string;
  className?: string;
  placeholderClassName?: string;
  priority?: boolean;
  shouldShowLoadingUI?: boolean;
  load?: "lazy" | "eager";
  size?: number;
}

export default function BlurImage({
  src,
  alt,
  placeholderSrc = "/favicon.ico",
  containerClassname,
  className,
  placeholderClassName,
  priority = false,
  shouldShowLoadingUI = false,
  load,
  size = 1000,
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "relative overflow-hidden h-31 flex justify-center",
        containerClassname,
      )}
    >
      {/* 1. Placeholder Image */}
      {isLoading && (
        <Image
          alt="" // Hidden from screen readers to avoid duplicate alt text
          src={placeholderSrc}
          width={size}
          height={size}
          className={cn(
            "absolute inset-0 z-0 blur-md scale-110 h-full w-fit m-auto",
            placeholderClassName,
          )}
          aria-hidden="true"
        />
      )}

      {/* 2. Main Image */}
      <Image
        alt={alt}
        src={src}
        width={size}
        height={size}
        priority={priority}
        loading={load}
        className={cn(
          "duration-700 ease-in-out z-10 object-scale-down max-h-full",
          isLoading
            ? "blur-2xl grayscale opacity-0"
            : "blur-0 grayscale-0 opacity-100",
          className,
        )}
        onLoad={() => setIsLoading(false)}
      />

      {/* 3. Loading UI */}
      {isLoading && shouldShowLoadingUI && (
        <div className="absolute bottom-2 left-0 right-0 z-20 p-1 font-bold text-center text-sm">
          Carregando mídia...
        </div>
      )}
    </div>
  );
}
