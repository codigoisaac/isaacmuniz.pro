import { ArrowBendUpLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Tooltip } from "./Tooltip";

interface Props {
  destination: string;
}

export default function GoBackButton({ destination }: Props) {
  return (
    <Tooltip content="Voltar">
      <Link
        href={`${destination}`}
        className="hover:text-neutral hover:bg-base-300 p-1 rounded-field"
      >
        <ArrowBendUpLeftIcon />
      </Link>
    </Tooltip>
  );
}
