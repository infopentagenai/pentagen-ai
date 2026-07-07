"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || "");

          if (match) {
            return (
              <CodeBlock
                language={match[1]}
                code={String(children).replace(/\n$/, "")}
              />
            );
          }

          return (
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-pink-400">
              {children}
            </code>
          );
        },

        h1: ({ children }) => (
          <h1 className="mb-4 text-3xl font-bold">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="mb-2 mt-5 text-xl font-semibold">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="mb-4 leading-7 text-slate-200">
            {children}
          </p>
        ),

        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-2 pl-6">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-2 pl-6">
            {children}
          </ol>
        ),

        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-cyan-500 pl-4 italic text-slate-300">
            {children}
          </blockquote>
        ),

        table: ({ children }) => (
          <div className="my-4 overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full border-collapse">
              {children}
            </table>
          </div>
        ),

        th: ({ children }) => (
          <th className="border border-slate-700 bg-slate-800 px-4 py-2 text-left font-semibold">
            {children}
          </th>
        ),

        td: ({ children }) => (
          <td className="border border-slate-700 px-4 py-2">
            {children}
          </td>
        ),

        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}