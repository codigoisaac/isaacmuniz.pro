"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import React from "react";
import { cn } from "@/lib/utils";

export function Tooltip({
  children,
  content,
  className,
  arrowClassName,
  side = "top",
}: {
  children: React.ReactNode;
  content: string;
  className?: string;
  arrowClassName?: string;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={5}
            className={cn(
              "z-100 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-content animate-in fade-in-0 zoom-in-95 font-saira font-medium tracking-wide",
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow
              className={cn("fill-secondary", arrowClassName)}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
