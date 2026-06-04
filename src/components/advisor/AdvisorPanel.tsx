"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send } from "lucide-react";

type MessageRole = "assistant" | "user";
interface Message { role: MessageRole; text: string; }

interface AdvisorPanelProps {
  sessionId?: number;
  isAvailable?: boolean;
}

const SEED: Message[] = [
  {
    role: "assistant",
    text: "שלום! אני יועץ מכבי AI. אני כאן להעמיק את הלמידה — שאלו אותי על תוכן המפגשים, כלי AI, ניהול או כל נושא אחר מהתוכנית.",
  },
];

export default function AdvisorPanel({ sessionId: _sessionId }: AdvisorPanelProps) {
  const [messages, setMessages] = useState<Message[]>(SEED);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    // Placeholder for streaming response
    const placeholder: Message = { role: "assistant", text: "" };
    setMessages([...updatedMessages, placeholder]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages([...updatedMessages, { role: "assistant", text: accumulated }]);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "שגיאה לא ידועה";
      setMessages([...updatedMessages, { role: "assistant", text: `מצטער, אירעה שגיאה: ${msg}` }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="card flex flex-col overflow-hidden" style={{ height: "420px" }}>
      {/* Header */}
      <div className="flex items-center gap-3 p-3.5 border-b border-maccabi-border shrink-0">
        <span className="magenta-badge w-10 h-10 shrink-0">
          <Bot size={20} className="text-white" />
        </span>
        <div>
          <h3 className="font-semibold text-maccabi-text text-sm">יועץ מכבי AI</h3>
          <p className="text-xs text-[#4F6B26] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cat-green inline-block" />
            פעיל
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[84%] px-3 py-2 text-[13px] leading-relaxed rounded-md whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-maccabi-bg text-maccabi-text rounded-bl-sm"
                : "bg-primary-700 text-white rounded-br-sm"
            }`}>
              {msg.text || (
                <span className="inline-flex gap-1 items-center opacity-60">
                  <span className="animate-bounce" style={{ animationDelay: "0ms" }}>•</span>
                  <span className="animate-bounce" style={{ animationDelay: "150ms" }}>•</span>
                  <span className="animate-bounce" style={{ animationDelay: "300ms" }}>•</span>
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-maccabi-border shrink-0">
        <div className="flex items-center gap-2 bg-maccabi-bg border border-maccabi-border rounded-full px-4 py-2.5 focus-within:border-primary-700 transition-colors">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            placeholder="שאלו את יועץ מכבי AI…"
            dir="rtl"
            disabled={loading}
            className="flex-1 bg-transparent text-sm outline-none text-right disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="text-accent-700 hover:text-accent-900 disabled:text-maccabi-subtle transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
