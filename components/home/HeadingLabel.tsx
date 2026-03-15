import { motion } from "motion/react";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export default function HeadingLabel({ text, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex items-center gap-2 mb-7", className)}
    >
      <span className="text-primary select-none text-sm pb-[.18rem]">▸</span>

      <Text variant="caps" intent="muted">
        {text}
      </Text>
    </motion.div>
  );
}
