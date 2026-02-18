import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const textStyles = tv({
  base: "antialiased transition-colors duration-200",
  variants: {
    variant: {
      h1: "font-transducer-extended text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl uppercase",
      h2: "font-transducer-extended text-3xl font-bold tracking-tight sm:text-4xl",
      h3: "text-xl font-medium font-geist-mono",
      p: "text-base leading-relaxed",
      caps: "font-transducer text-xs font-bold uppercase tracking-widest",
      mono: "font-geist-mono text-sm bg-base-300/50 px-1 rounded",
    },
    intent: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      base: "text-base-content",
      muted: "text-neutral-content",
    },
  },
  defaultVariants: {
    variant: "p",
    intent: "base",
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  className?: string;
  animated?: boolean;
}

export default function Text({
  variant,
  intent,
  as: Component = "p",
  className,
  animated,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        textStyles({ variant, intent }),
        animated && "animated-underline",
        className,
      )}
      {...props}
    />
  );
}
