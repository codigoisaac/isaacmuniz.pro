"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import React from "react";

export function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            sideOffset={5}
            className="z-100 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-content animate-in fade-in-0 zoom-in-95 font-saira font-medium tracking-wide"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-secondary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
