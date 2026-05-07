"use client";

import Image from "next/image";
import devtoIcon from "@/assets/images/publicationPlatforms/devto.svg";
import hashnodeIcon from "@/assets/images/publicationPlatforms/hashnode.svg";
import { PublicationPlatform } from "@/interfaces/blog-post";
import { Tooltip } from "@/components/Tooltip";

const platformMeta: Record<
  PublicationPlatform,
  { label: string; icon: string }
> = {
  devto: { label: "DEV", icon: devtoIcon },
  hashnode: { label: "Hashnode", icon: hashnodeIcon },
};

interface Props {
  publishedOn: Partial<Record<PublicationPlatform, string>>;
  size?: number;
}

export default function PublicationPlatforms({
  publishedOn,
  size = 16,
}: Props) {
  const entries = Object.entries(publishedOn) as [PublicationPlatform, string][];
  if (!entries.length) return null;

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="font-geist-mono text-[11px] text-neutral-content/50">
        também em
      </span>
      {entries.map(([platform, url]) => {
        const { label, icon } = platformMeta[platform];
        return (
          <Tooltip key={platform} content={label}>
            <button
              aria-label={`Ler no ${label}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="opacity-30 hover:opacity-70 transition-opacity cursor-pointer"
            >
              <Image
                src={icon}
                alt={label}
                width={size}
                height={size}
                className="dark:invert"
              />
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}
