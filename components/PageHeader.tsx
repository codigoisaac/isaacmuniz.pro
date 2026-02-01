import DecryptedText from "@/components/DecryptedText";

type Props = {
  text: string;
};

export default function PageHeader({ text }: Props) {
  return (
    <div className="font-geist-mono font-bold mb-14 text-center">
      <DecryptedText text={text} speed={80} revealDirection="center" />
    </div>
  );
}
