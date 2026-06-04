"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Send, Loader2, BotMessageSquare, Sparkles } from "lucide-react";

const AGENT_ID = "agent_9101kt6thg56fn4vnkfq3ga8qshw";
const WS_URL = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${AGENT_ID}`;

interface Message {
  role: "user" | "agent";
  text: string;
}

type Phase = "idle" | "connecting" | "connected";
const THINKING_TIMEOUT_MS = 15000;

export default function ElevenLabsAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [phase, setPhase]       = useState<Phase>("idle");
  const [error, setError]       = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  const wsRef        = useRef<WebSocket | null>(null);
  const bottomRef    = useRef<HTMLDivElement>(null);
  const thinkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const connect = useCallback(() => {
    setError(null);
    setPhase("connecting");

    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "conversation_initiation_client_data",
        conversation_config_override: {
          agent: {
            prompt: {
              prompt: "You are a concise AI assistant for the Maccabi AI Master leadership program. Answer questions about the program content, sessions, and AI topics. Keep every response to 2–5 sentences maximum. Be direct, practical, and professional.",
            },
          },
        },
      }));
      setPhase("connected");
    };

    ws.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (data.type === "ping") {
          ws.send(JSON.stringify({ type: "pong", event_id: data.ping_event.event_id }));
        } else if (data.type === "agent_response") {
          const text = data.agent_response_event?.agent_response ?? data.agent_response;
          if (text) {
            if (thinkTimerRef.current) clearTimeout(thinkTimerRef.current);
            setThinking(false);
            setMessages((prev) => [...prev, { role: "agent", text }]);
          }
        }
      } catch { /* ignore parse errors */ }
    };

    ws.onerror = () => {
      setError("שגיאה בחיבור לסוכן. נסה שוב.");
      setPhase("idle");
    };

    ws.onclose = () => {
      setPhase("idle");
      setThinking(false);
    };
  }, []);

  const disconnect = useCallback(() => {
    if (thinkTimerRef.current) clearTimeout(thinkTimerRef.current);
    wsRef.current?.close();
    wsRef.current = null;
    setPhase("idle");
    setThinking(false);
  }, []);

  useEffect(() => () => { wsRef.current?.close(); }, []);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text || phase !== "connected" || !wsRef.current) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setThinking(true);
    setInput("");
    wsRef.current.send(JSON.stringify({ type: "user_message", text }));
    thinkTimerRef.current = setTimeout(() => setThinking(false), THINKING_TIMEOUT_MS);
  }, [input, phase]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  /* ── Idle / pre-connect ── */
  if (phase === "idle") {
    return (
      <div className="card p-6 space-y-5 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shadow-inner">
            <BotMessageSquare size={26} className="text-primary" />
          </div>
          <div>
            <p className="font-bold text-maccabi-text">סוכן מכבי AI Master</p>
            <p className="text-xs text-maccabi-muted mt-0.5">עוזר אישי חכם לאורך התוכנית</p>
          </div>
        </div>
        <ul className="text-xs text-maccabi-muted space-y-1.5 text-right">
          {["מענה על שאלות על תוכן המפגש", "עזרה בהכנה ורפלקציה", "הצעות לקריאה נוספת"].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Sparkles size={12} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {error && (
          <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
        )}
        <button onClick={connect} className="btn-primary w-full justify-center flex items-center gap-2">
          <BotMessageSquare size={16} />
          התחל שיחה
        </button>
      </div>
    );
  }

  /* ── Connecting ── */
  if (phase === "connecting") {
    return (
      <div className="card p-8 flex flex-col items-center justify-center gap-3 text-maccabi-muted text-sm">
        <Loader2 size={24} className="animate-spin text-primary" />
        <p>מתחבר לסוכן...</p>
      </div>
    );
  }

  /* ── Chat ── */
  return (
    <div className="card flex flex-col h-[400px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-maccabi-border bg-gradient-to-l from-primary-50 to-white shrink-0">
        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
          <BotMessageSquare size={16} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-maccabi-text leading-none">סוכן מכבי AI Master</p>
          <p className="text-xs text-secondary-600 flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 inline-block animate-pulse" />
            מחובר
          </p>
        </div>
        <button
          onClick={disconnect}
          className="text-xs text-maccabi-muted hover:text-red-500 transition-colors px-2 py-1 rounded hover:bg-red-50"
        >
          סיים
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scroll">
        {messages.length === 0 && !thinking && (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-maccabi-muted animate-fade-in">
            <Sparkles size={20} className="text-primary-200" />
            <p className="text-xs text-center">שלח הודעה כדי להתחיל את השיחה</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex animate-fade-in-up ${msg.role === "user" ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
              msg.role === "user"
                ? "bg-gray-100 text-maccabi-text rounded-tr-sm"
                : "bg-primary text-white rounded-tl-sm"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-primary/10 border border-primary-100 px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
              {[1, 2, 3].map((i) => (
                <span key={i} className="w-1 h-3 bg-primary rounded-full animate-wave-bar"
                  style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-maccabi-border shrink-0">
        <div className="flex items-center gap-2 bg-gray-50 border border-maccabi-border rounded-xl px-3 py-2 focus-within:border-primary focus-within:bg-white transition-all duration-200 focus-within:shadow-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="כתוב הודעה..."
            className="flex-1 bg-transparent text-sm outline-none text-right placeholder:text-maccabi-muted/60"
            dir="rtl"
          />
          <button
            onClick={send}
            disabled={!input.trim()}
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-white disabled:opacity-30 disabled:bg-gray-300 hover:bg-primary-600 transition-all duration-150 hover:scale-105 active:scale-95"
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
