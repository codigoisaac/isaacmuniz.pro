import { cn } from "@/lib/utils";

interface Props {
  showOnCenterOnMobile?: boolean;
  showOnCenterAllways?: boolean;
  showOnLeft?: boolean;
}

export default function InDevelopmentTag({
  showOnCenterOnMobile,
  showOnCenterAllways,
  showOnLeft,
}: Props) {
  return (
    <div
      className={cn(
        "absolute top-0 flex items-center justify-center text-xs font-geist-mono font-bold py-1 px-2 bg-base-300 text-neutral shadow-xl tracking-wider text-nowrap",
        {
          "right-1/2 translate-x-1/2 rounded-b-xl sm:right-0 sm:translate-x-0 sm:rounded-b-none sm:rounded-bl-xl sm:rounded-tr-[0.66rem]":
            showOnCenterOnMobile && !showOnCenterAllways && !showOnLeft,
        },
        {
          "right-0 rounded-bl-xl rounded-tr-[0.66rem]":
            !showOnCenterOnMobile && !showOnCenterAllways && !showOnLeft,
        },
        {
          "right-1/2 translate-x-1/2 rounded-b-xl": showOnCenterAllways,
        },
        {
          "left-0 w-fit rounded-tl-[0.66rem] rounded-br-xl": showOnLeft,
        },
      )}
    >
      Em Desenvolvimento
    </div>
  );
}
