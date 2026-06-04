"use client";

import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";

type MessageRole = "assistant" | "user";
interface Message { role: MessageRole; text: string; }

interface AdvisorPanelProps {
  sessionId: number;
  isAvailable?: boolean;
}

const seed: Message[] = [
  { role: "assistant", text: "שלום! אני יועץ מכבי AI. אני כאן כדי להעמיק את הלמידה ממפגש זה — מה תרצו לשאול?" },
];

export default function AdvisorPanel({ isAvailable = false }: AdvisorPanelProps) {
  const [messages, setMessages] = useState<Message[]>(seed);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: input.trim() },
      { role: "assistant", text: "תכונת היועץ הדיגיטלי תהיה זמינה בקרוב במכבי AI Master." },
    ]);
    setInput("");
  };

  if (!isAvailable) {
    return (
      <div className="card p-4 space-y-3">
        <div className="flex items-center gap-3">
          <span className="magenta-badge w-10 h-10 shrink-0">
            <Sparkles size={20} className="text-white" />
          </span>
          <div className="flex-1">
            <h3 className="font-semibold text-maccabi-text text-sm">יועץ מכבי AI</h3>
            <p className="text-xs text-maccabi-subtle">עוזר אישי חכם לכל מפגש</p>
          </div>
          <span className="pill bg-white text-accent-700 border border-accent-700">בקרוב</span>
        </div>

        <p className="text-sm text-maccabi-muted leading-relaxed">
          יועץ מכבי AI ילווה אתכם לאורך כל הקורס — עונה על שאלות, מסייע בהכנה למפגשים ומספק רפלקציה אישית מותאמת.
        </p>

        <ul className="space-y-2">
          {[
            "מענה לשאלות על תוכן המפגש",
            "עזרה בהכנת המטלות לבית",
            "הצעות לקריאה והעמקה",
            "רפלקציה מונחית אחרי כל מפגש",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-xs text-maccabi-muted leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-700 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 bg-maccabi-bg border border-maccabi-border rounded-full px-4 py-2.5 opacity-55">
          <input disabled placeholder="שאלו את יועץ מכבי AI…" dir="rtl"
            className="flex-1 bg-transparent text-sm outline-none text-right" />
          <Send size={16} className="text-maccabi-subtle" />
        </div>
      </div>
    );
  }

  return (
    <div className="card flex flex-col overflow-hidden h-[360px] sm:h-[440px]">
      <div className="flex items-center gap-3 p-3.5 border-b border-maccabi-border">
        <span className="magenta-badge w-10 h-10 shrink-0">
          <Bot size={20} className="text-white" />
        </span>
        <div>
          <h3 className="font-semibold text-maccabi-text text-sm">יועץ מכבי AI</h3>
          <p className="text-xs text-[#4F6B26] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cat-green inline-block" /> פעיל
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[84%] px-3 py-2 text-[13px] leading-relaxed rounded-md ${
              msg.role === "user"
                ? "bg-maccabi-bg text-maccabi-text rounded-bl-sm"
                : "bg-primary-700 text-white rounded-br-sm"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-maccabi-border">
        <div className="flex items-center gap-2 bg-maccabi-bg border border-maccabi-border rounded-full px-4 py-2.5 focus-within:border-primary-700 transition-colors">
          <input value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="שאלו את יועץ מכבי AI…" dir="rtl"
            className="flex-1 bg-transparent text-sm outline-none text-right" />
          <button onClick={handleSend} disabled={!input.trim()}
            className="text-accent-700 hover:text-accent-900 disabled:text-maccabi-subtle transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
