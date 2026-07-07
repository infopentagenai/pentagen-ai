"use client";

import { Bot, User, Copy, Check } from "lucide-react";
import { useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

type MessageBubbleProps = {
  role: "user" | "assistant";
  message: string;
};

export default function MessageBubble({
  role,
  message,
}: MessageBubbleProps) {
  const isUser = role === "user";

  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-4xl gap-4 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isUser
              ? "bg-gradient-to-r from-cyan-500 to-blue-600"
              : "bg-slate-800"
          }`}
        >
          {isUser ? (
            <User size={18} className="text-white" />
          ) : (
            <Bot size={18} className="text-cyan-400" />
          )}
        </div>

        {/* Message */}

        <div
          className={`rounded-2xl px-5 py-4 ${
            isUser
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              : "border border-slate-800 bg-slate-900 text-slate-200"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-7">
              {message}
            </p>
          ) : (
            <MarkdownRenderer content={message} />
          )}

          {!isUser && (
            <button
              onClick={copyMessage}
              className="mt-5 flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
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
          )}
        </div>
      </div>
    </div>
  );
}