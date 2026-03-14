import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  text: string;
  showExternalLinkIcon?: boolean;
  link: string;
  /** @default "_blank" */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** @default "noopener noreferrer" */
  rel?: string;
}

export default function Button({
  text,
  showExternalLinkIcon = true,
  link,
  target = "_blank",
  rel = "noopener noreferrer",
}: Props) {
  return (
    <a target={target} rel={rel} href={link} className="unstiled-link">
      <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md flex items-center gap-2 text-nowrap">
        <div>{text}</div>
        {showExternalLinkIcon && <ArrowSquareOutIcon size={15} />}
      </button>
    </a>
  );
}
