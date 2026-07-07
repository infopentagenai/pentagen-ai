"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  language: string;
  code: string;
};

export default function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-700">

      {/* Header */}

      <div className="flex items-center justify-between bg-slate-900 px-4 py-3 border-b border-slate-700">

        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>

      </div>

      {/* Code */}

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        PreTag="div"
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: "#020617",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
}