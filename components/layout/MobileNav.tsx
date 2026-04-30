"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  const [navShow, setNavShow] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current as HTMLElement);
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current as HTMLElement);
      }
      return !status;
    });
  };

  useEffect(() => {
    return clearAllBodyScrollLocks;
  });

  return (
    <>
      {/* "Open" button */}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-80"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-80"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="font-transducer fixed top-0 left-0 z-70 h-full w-full duration-300 bg-base-100">
              <nav
                ref={navRef}
                className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pt-2 pl-12 text-left"
              >
                {headerNavLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={cn(
                        "mb-4 py-2 pr-4 text-2xl font-bold tracking-widest outline-0 hover:underline",
                        isActive ? "text-primary" : "text-base-content hover:text-primary",
                      )}
                      onClick={onToggleNav}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </nav>

              {/* Close Button */}
              <button
                className="hover:text-primary fixed top-7 right-4 z-80 h-16 w-16 p-4 cursor-pointer text-base-content"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
