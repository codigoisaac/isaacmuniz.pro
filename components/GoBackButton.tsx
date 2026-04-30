import { ArrowBendUpLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Tooltip } from "./Tooltip";

interface Props {
  destination: string;
  label?: string;
}

export default function GoBackButton({ destination, label }: Props) {
  const link = (
    <Link
      href={`${destination}`}
      className="hover:text-neutral hover:bg-base-300 p-1 rounded-field flex items-center gap-1.5"
    >
      <ArrowBendUpLeftIcon />
      {label && <span className="text-sm">{label}</span>}
    </Link>
  );

  if (label) return link;

  return <Tooltip content="Voltar">{link}</Tooltip>;
}
