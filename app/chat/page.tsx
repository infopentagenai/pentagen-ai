"use client";

import { useEffect, useRef, useState } from "react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import EmptyState from "@/components/chat/EmptyState";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessages, {
  ChatMessage,
} from "@/components/chat/ChatMessages";

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSendMessage = async (
    text: string,
    image?: File | null
  ) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: text || "📷 Image",
    };

    const assistantId = Date.now() + 1;

    const assistantMessage: ChatMessage = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      assistantMessage,
    ]);

    setLoading(true);

    try {
      let imageBase64 = "";

      if (image) {
        imageBase64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            const result = reader.result as string;

            resolve(result.split(",")[1]);
          };

          reader.readAsDataURL(image);
        });
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          image: imageBase64,
          mimeType: image?.type ?? "",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      if (!response.body) {
        throw new Error("No response body.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        fullResponse += decoder.decode(value);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: fullResponse,
                }
              : msg
          )
        );
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "❌ Unable to connect to the AI server.",
              }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950">
      <ChatSidebar />

      <main className="flex flex-1 flex-col">
        <ChatHeader />

        <div className="flex-1 overflow-y-auto p-8">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <EmptyState />
            </div>
          ) : (
            <>
              <ChatMessages
                messages={messages}
                loading={loading}
              />

              <div ref={bottomRef} />
            </>
          )}
        </div>

        <div className="border-t border-slate-800 p-6">
          <ChatInput
            onSendMessage={handleSendMessage}
          />
        </div>
      </main>
    </div>
  );
}