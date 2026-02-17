import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";

interface Props {
  text: string;
  shouldShowExternalLinkIcon?: boolean;
  link: string;
}

export default function Button({
  text,
  shouldShowExternalLinkIcon = true,
  link,
}: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="unstiled-link"
    >
      <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md flex items-center gap-2">
        <div>{text}</div>

        {shouldShowExternalLinkIcon && <ArrowSquareOutIcon size={15} />}
      </button>
    </a>
  );
}
