import { motion } from "motion/react";
import Text from "@/components/Text";

interface Props {
  text: string;
}

export default function HeadingLabel({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2 mb-7"
    >
      <span className="text-primary select-none text-sm pb-[.18rem]">▸</span>

      <Text variant="caps" intent="muted">
        {text}
      </Text>
    </motion.div>
  );
}
