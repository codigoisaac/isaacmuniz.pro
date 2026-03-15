import { tv, type VariantProps } from "tailwind-variants";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles = tv({
  base: "btn flex items-center gap-2 text-nowrap",
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-primary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      outline: "btn-outline btn-primary bg-primary/10",
      soft: "btn-soft btn-primary",
    },
    size: {
      sm: "btn-xs sm:btn-sm",
      md: "btn-xs sm:btn-sm md:btn-md",
      lg: "btn-sm md:btn-md lg:btn-lg",
    },
  },
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  link: string;
  showExternalLinkIcon?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  internal?: boolean;
  className?: string;
}

export default function Button({
  text,
  link,
  variant,
  size,
  showExternalLinkIcon = true,
  target = "_blank",
  rel = "noopener noreferrer",
  internal,
  className,
}: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);

  return internal ? (
    <Link href={link}>
      <button className={classes}>{text}</button>
    </Link>
  ) : (
    <a target={target} rel={rel} href={link} className="unstiled-link">
      <button className={classes}>
        <div>{text}</div>
        {showExternalLinkIcon && <ArrowSquareOutIcon size={15} />}
      </button>
    </a>
  );
}
