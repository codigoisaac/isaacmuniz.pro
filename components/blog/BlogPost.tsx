import { BlogPost as BlogPostInterface } from "@/interfaces/blog-post";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SeparatorDots from "../SeparatorDots";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai as codeTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import remarkGfm from "remark-gfm";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";

// Register only used languages, to reduce bundle size
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("html", markup);
SyntaxHighlighter.registerLanguage("php", php);

type Props = {
  post: BlogPostInterface;
};

export default function BlogPost({ post }: Props) {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ className, children, ...props }) => {
            const codeLanguage = /language-(\w+)/.exec(className || "");

            return codeLanguage ? (
              <SyntaxHighlighter
                style={codeTheme}
                language={codeLanguage[1]}
                PreTag="div"
                className="my-5"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
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
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-6 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold">{children}</h3>
          ),
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
            <a href={href} target="_blank">
              {children}
            </a>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>

      <SeparatorDots />
    </>
  );
}
