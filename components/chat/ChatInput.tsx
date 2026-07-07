"use client";

import { useState, KeyboardEvent } from "react";
import {
  Paperclip,
  Mic,
  SendHorizontal,
  Image as ImageIcon,
} from "lucide-react";

type ChatInputProps = {
  onSendMessage?: (message: string) => void;
};

export default function ChatInput({
  onSendMessage,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    onSendMessage?.(text);

    setMessage("");
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl items-end gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4">

      {/* Attach */}

      <button className="rounded-xl p-3 transition hover:bg-slate-800">

        <Paperclip
          size={22}
          className="text-slate-400"
        />

      </button>

      {/* Image */}

      <button className="rounded-xl p-3 transition hover:bg-slate-800">

        <ImageIcon
          size={22}
          className="text-slate-400"
        />

      </button>

      {/* Input */}

      <textarea
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Pentagen AI..."
        className="max-h-40 flex-1 resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
      />

      {/* Voice */}

      <button className="rounded-xl p-3 transition hover:bg-slate-800">

        <Mic
          size={22}
          className="text-slate-400"
        />

      </button>

      {/* Send */}

      <button
        onClick={sendMessage}
        disabled={!message.trim()}
        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >

        <SendHorizontal
          size={22}
          className="text-white"
        />

      </button>

    </div>
  );
}