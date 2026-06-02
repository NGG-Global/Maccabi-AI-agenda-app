"use client";

import { useState } from "react";
import { BotMessageSquare, Send, Sparkles } from "lucide-react";

type MessageRole = "assistant" | "user";

interface Message {
  role: MessageRole;
  text: string;
}

interface AdvisorPanelProps {
  sessionId: number;
  isAvailable?: boolean;
}

const sampleMessages: Message[] = [
  {
    role: "assistant",
    text: "שלום! אני יועץ מכבי AI. אני כאן לעזור לך לעמיק את הלמידה ממפגש זה. מה תרצה לשאול?",
  },
];

export default function AdvisorPanel({
  sessionId,
  isAvailable = false,
}: AdvisorPanelProps) {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    const replyMsg: Message = {
      role: "assistant",
      text: "תכונת היועץ הדיגיטלי תהיה זמינה בקרוב. אנחנו עובדים על שילוב מלא של מכבי AI בפלטפורמה.",
    };
    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInput("");
  };

  if (!isAvailable) {
    return (
      <div className="card overflow-hidden space-y-0">
        {/* Gradient header */}
        <div
          className="p-4 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #004B87 0%, #003D6F 100%)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">יועץ מכבי AI</h3>
            <p className="text-xs text-primary-200">עוזר אישי חכם לכל מפגש</p>
          </div>
          <span className="mr-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-accent text-white">
            בקרוב
          </span>
        </div>

        <div className="p-6 space-y-4">
        {/* Divider */}
        <div className="border-t border-maccabi-border -mt-2" />

        {/* Coming soon description */}
        <div className="space-y-3 text-sm text-maccabi-muted leading-relaxed">
          <p>
            יועץ מכבי AI ילווה אתכם לאורך כל תוכנית אופק — עונה על שאלות,
            מסייע בהכנה למפגשים ומספק משוב אישי מותאם לכם.
          </p>
          <ul className="space-y-1.5 text-xs">
            {[
              "מענה לשאלות על תוכן המפגש",
              "עזרה בהכנת המטלות לבית",
              "הצעות לקריאה נוספת",
              "רפלקציה מונחית אחרי כל מפגש",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Disabled input preview */}
        <div className="flex items-center gap-2 bg-gray-50 border border-maccabi-border rounded-xl px-4 py-3 opacity-50 cursor-not-allowed">
          <input
            disabled
            placeholder="שאל את יועץ מכבי AI..."
            className="flex-1 bg-transparent text-sm outline-none text-right"
            dir="rtl"
          />
          <Send size={16} className="text-gray-400" />
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card flex flex-col h-[360px] sm:h-[420px] overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center gap-3 p-4"
        style={{ background: "linear-gradient(135deg, #004B87 0%, #003D6F 100%)" }}
      >
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
          <BotMessageSquare size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">יועץ מכבי AI</h3>
          <p className="text-xs text-primary-100 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block animate-pulse" />
            פעיל
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-gray-100 text-maccabi-text rounded-br-sm"
                  : "bg-primary text-white rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-maccabi-border">
        <div className="flex items-center gap-2 bg-gray-50 border border-maccabi-border rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="שאל את יועץ מכבי AI..."
            className="flex-1 bg-transparent text-sm outline-none text-right"
            dir="rtl"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="text-primary hover:text-primary-600 disabled:text-gray-300 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
