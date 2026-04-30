"use client";

import { useState } from "react";
import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";

interface Props {
  code: string;
}

export default function CopyButton({ code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copiar código"
      className="absolute top-2 right-2 z-10 p-1.5 rounded opacity-0 group-hover/code:opacity-100 transition-opacity bg-[#3f2d24]/60 hover:bg-[#3f2d24] text-[#f9e4f0]/60 hover:text-[#f9e4f0] cursor-pointer"
    >
      {copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
    </button>
  );
}
