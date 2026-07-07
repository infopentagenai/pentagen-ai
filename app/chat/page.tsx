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

  const handleSendMessage = async (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.reply ||
          "Sorry, I couldn't generate a response.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "❌ Unable to connect to the AI server.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main */}
      <main className="flex flex-1 flex-col">
        <ChatHeader />

        {/* Chat Area */}
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

        {/* Input */}
        <div className="border-t border-slate-800 p-6">
          <ChatInput
            onSendMessage={handleSendMessage}
          />
        </div>
      </main>
    </div>
  );
}