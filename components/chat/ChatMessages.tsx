"use client";

import MessageBubble from "./MessageBubble";
import TypingLoader from "./TypingLoader";

export type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type ChatMessagesProps = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function ChatMessages({
  messages,
  loading,
}: ChatMessagesProps) {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">

      {messages.map((message) => (

        <MessageBubble
          key={message.id}
          role={message.role}
          message={message.content}
        />

      ))}

      {loading && <TypingLoader />}

    </div>
  );
}