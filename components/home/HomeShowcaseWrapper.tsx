"use client";

import { useEffect, useRef, useState } from "react";

export default function HomeShowcaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    // One-time lock: capture the initial height (driven by min-h-screen / min-h-[80vh])
    // and never let it change again. The showcase inside resizes freely without
    // shifting anything else on the page.
    if (!ref.current || lockedHeight !== undefined) return;
    setLockedHeight(ref.current.offsetHeight);
  }, [lockedHeight]);

  return (
    <div
      ref={ref}
      className="min-h-screen lg:min-h-[80vh] flex items-center"
      style={
        lockedHeight ? { height: lockedHeight, minHeight: "unset" } : undefined
      }
    >
      {children}
    </div>
  );
}
