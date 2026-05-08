import { BlogPost as BlogPostInterface } from "@/interfaces/blog-post";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SeparatorDots from "../SeparatorDots";
import GoBackButton from "../GoBackButton";
import CopyButton from "./CopyButton";
import { HashIcon } from "@phosphor-icons/react/dist/ssr";
import { slugifyHeading } from "@/lib/utils";
import type { ReactNode } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai as codeTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import remarkGfm from "remark-gfm";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";

// Register only used languages, to reduce bundle size
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);

function childrenToText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(childrenToText).join("");
  if (children !== null && typeof children === "object" && "props" in children)
    return childrenToText(
      (children.props as { children?: ReactNode }).children,
    );
  return "";
}

const headingStyles = {
  h1: { tag: "h1" as const, className: "text-4xl font-bold mt-12 mb-4 border-b pb-1", iconSize: 20 },
  h2: { tag: "h2" as const, className: "text-3xl font-bold mt-12 mb-4 border-b pb-1", iconSize: 18 },
  h3: { tag: "h3" as const, className: "text-2xl font-bold mt-6 mb-4", iconSize: 16 },
  h4: { tag: "h4" as const, className: "text-xl font-bold mt-6 mb-4", iconSize: 14 },
};

function AnchoredHeading({ level, children }: { level: keyof typeof headingStyles; children: ReactNode }) {
  const { tag: Tag, className, iconSize } = headingStyles[level];
  const id = slugifyHeading(childrenToText(children));

  return (
    <Tag id={id} className={`group/heading flex items-center gap-4 ${className}`}>
      {children}
      <a href={`#${id}`} className="opacity-0 group-hover/heading:opacity-100 transition-opacity text-neutral-content">
        <HashIcon size={iconSize} />
      </a>
    </Tag>
  );
}

type Props = {
  post: BlogPostInterface;
};

export default function BlogPost({ post }: Props) {
  return (
    <div className="max-w-prose mx-auto mt-20">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ className, children, ...props }) => {
            const codeLanguage = /language-(\w+)/.exec(className || "");
            const code = String(children).replace(/\n$/, "");

            return codeLanguage ? (
              <div className="relative my-5 group/code">
                <CopyButton code={code} />

                <SyntaxHighlighter
                  style={codeTheme}
                  language={codeLanguage[1]}
                  PreTag="div"
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                {...props}
                className="font-geist-mono bg-base-300 px-1 rounded-selector"
              >
                {children}
              </code>
            );
          },
          img: ({ src, alt }) => {
            if (typeof src !== "string") return null;

            return (
              <span className="flex justify-center my-8 w-full min-h-60 items-center">
                <Image
                  src={src}
                  alt={alt || "Imagem do blog"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg shadow-md w-auto h-auto max-w-full max-h-195 block"
                />
              </span>
            );
          },
          h1: ({ children }) => <AnchoredHeading level="h1">{children}</AnchoredHeading>,
          h2: ({ children }) => <AnchoredHeading level="h2">{children}</AnchoredHeading>,
          h3: ({ children }) => <AnchoredHeading level="h3">{children}</AnchoredHeading>,
          h4: ({ children }) => <AnchoredHeading level="h4">{children}</AnchoredHeading>,
          p: ({ children }) => <p className="mb-3">{children}</p>,
          hr: ({ children }) => <hr className="my-3">{children}</hr>,
          ul: ({ children }) => (
            <ul className="list-disc mb-3 ml-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal mb-3 ml-4">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 px-4 pt-3 pb-1 border-l-4 border-primary rounded-sm bg-base-200">
              {children}
            </blockquote>
          ),
          details: ({ children }) => (
            <details className="border p-1 px-3 my-5">{children}</details>
          ),
          summary: ({ children }) => (
            <summary className="font-bold">{children}</summary>
          ),
          a: ({ children, href }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 border border-base-300">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-base-200">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-base-300">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="divide-x divide-base-300">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left font-semibold whitespace-nowrap">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 align-top">{children}</td>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>

      <SeparatorDots />

      <div className="flex justify-center mt-6">
        <GoBackButton destination="/blog" label="Voltar ao Blog" />
      </div>
    </div>
  );
}
