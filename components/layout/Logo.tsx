"use client";

import Image from "next/image";
import LogoLight from "@/public/images/logo-light.png";
import LogoDark from "@/public/images/logo-dark.png";
import { useTheme, themes } from "@/context/theme-context";

export default function Logo() {
  const { theme } = useTheme();
  const isLightTheme = theme === themes.light;

  return (
    <Image
      alt="logo"
      src={isLightTheme ? LogoDark : LogoLight}
      width={50}
      height={50}
      priority
    />
  );
}
