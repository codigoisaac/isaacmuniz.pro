"use client";

import { useRef, useState } from "react";
import socials from "@/data/socials";
import { Tooltip } from "@/components/Tooltip";
import { LinkIcon as ButtonIcon } from "@phosphor-icons/react";

export default function SocialDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  };

  return (
    <div
      className={`dropdown dropdown-center hidden h-8 w-8 md:block ${open ? "dropdown-open" : ""}`}
      onMouseLeave={scheduleClose}
    >
      <button
        tabIndex={0}
        aria-label="Redes sociais"
        className="flex h-8 w-8 items-center justify-center"
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
      >
        <ButtonIcon size={24} weight="bold" className="text-base-content" />
      </button>

      {open && (
        <>
          {/* transparent bridge covering the mt-2 gap */}
          <div
            className="absolute top-8 left-0 h-2 w-full"
            onMouseEnter={cancelClose}
          />

          <div
            className="dropdown-content bg-base-200 mt-2 flex flex-col gap-3 rounded-xl p-3 shadow-lg"
            onMouseEnter={cancelClose}
          >
            {socials.map(({ href, label, tooltip, Icon }) => (
              <Tooltip key={label} content={tooltip} side="right">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon
                    size={22}
                    weight="duotone"
                    className="text-base-content hover:text-primary transition-colors"
                  />
                </a>
              </Tooltip>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
