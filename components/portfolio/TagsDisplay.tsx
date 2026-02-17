import clsx from "clsx";

type Props = {
  tags: string[];
  className?: string;
};

export default function TagsDisplay({ tags, className }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-wrap gap-2 text-xs text-neutral-content font-geist-mono h-fit",
        className,
      )}
    >
      {tags.map((tag) => {
        return (
          <div key={tag} className="p-1 bg-base-300 rounded-selector">
            {tag}
          </div>
        );
      })}
    </div>
  );
}
