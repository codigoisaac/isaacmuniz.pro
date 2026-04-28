import socials from "@/data/socials";
import { IconWeight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  weight?: IconWeight;
  className?: string;
}

export default function SocialButtons({
  size = 28,
  weight = "duotone",
  className,
}: Props) {
  return (
    <div className="flex gap-4">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="unstiled-link"
        >
          <Icon
            size={size}
            weight={weight}
            className={cn(
              "text-base-content hover:text-primary transition-colors",
              className,
            )}
          />
        </a>
      ))}
    </div>
  );
}

