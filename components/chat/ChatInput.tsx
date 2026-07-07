"use client";

import { useState, KeyboardEvent } from "react";
import {
  Paperclip,
  Mic,
  SendHorizontal,
} from "lucide-react";

import UploadButton from "./UploadButton";
import ImagePreview from "./ImagePreview";

type ChatInputProps = {
  onSendMessage?: (
    message: string,
    image?: File | null
  ) => void;
};

export default function ChatInput({
  onSendMessage,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const sendMessage = () => {
    const text = message.trim();

    // Allow text or image
    if (!text && !image) return;

    onSendMessage?.(text, image);

    setMessage("");
    setImage(null);
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
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 p-4">

      {/* Image Preview */}

      {image && (
        <div className="mb-4">
          <ImagePreview
            file={image}
            onRemove={() => setImage(null)}
          />
        </div>
      )}

      {/* Input Row */}

      <div className="flex items-end gap-3">

        {/* Attachment (Future PDF/DOC Upload) */}

        <button className="rounded-xl p-3 transition hover:bg-slate-800">

          <Paperclip
            size={22}
            className="text-slate-400"
          />

        </button>

        {/* Image Upload */}

        <UploadButton
          onImageSelect={(file) => setImage(file)}
        />

        {/* Text Input */}

        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Pentagen AI..."
          className="max-h-40 flex-1 resize-none bg-transparent text-white outline-none placeholder:text-slate-500"
        />

        {/* Voice (Future Feature) */}

        <button className="rounded-xl p-3 transition hover:bg-slate-800">

          <Mic
            size={22}
            className="text-slate-400"
          />

        </button>

        {/* Send */}

        <button
          onClick={sendMessage}
          disabled={!message.trim() && !image}
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >

          <SendHorizontal
            size={22}
            className="text-white"
          />

        </button>

      </div>

    </div>
  );
}