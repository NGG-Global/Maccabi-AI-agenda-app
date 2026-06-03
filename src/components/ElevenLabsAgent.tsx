"use client";

import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";
import { Mic, MicOff, Loader2 } from "lucide-react";

const AGENT_ID = "agent_9101kt6thg56fn4vnkfq3ga8qshw";

type Phase = "idle" | "requesting" | "connecting" | "connected";

function AgentWidget() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => setPhase("connected"),
    onDisconnect: () => { setPhase("idle"); setError(null); },
    onError: (err) => {
      setError(typeof err === "string" ? err : "שגיאה בחיבור לסוכן");
      setPhase("idle");
    },
  });

  const start = useCallback(async () => {
    setError(null);
    setPhase("requesting");
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setPhase("connecting");
      await conversation.startSession({ agentId: AGENT_ID, connectionType: "webrtc" });
    } catch {
      setError("לא ניתן לגשת למיקרופון. אנא אשר הרשאה ונסה שוב.");
      setPhase("idle");
    }
  }, [conversation]);

  const stop = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = phase === "connected";
  const isLoading = phase === "requesting" || phase === "connecting";

  return (
    <div className="card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isConnected ? "bg-primary" : "bg-primary-50"}`}>
          <Mic size={18} className={isConnected ? "text-white" : "text-primary"} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-maccabi-text text-sm">סוכן קורס מכבי AI</p>
          <p className="text-xs text-maccabi-muted">עוזר אישי קולי לאורך התוכנית</p>
        </div>
        {isConnected && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-secondary-700 bg-secondary-50 border border-secondary-200 px-2.5 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500" />
            </span>
            פעיל
          </span>
        )}
      </div>

      <div className="border-t border-maccabi-border" />

      {/* Speaking / listening indicator */}
      {isConnected && (
        <div className="flex items-center justify-center gap-2 py-1">
          {conversation.isSpeaking ? (
            <>
              <span className="flex gap-0.5 items-end h-5">
                {[1, 2, 3, 4, 3].map((h, i) => (
                  <span key={i} className="w-1 rounded-full bg-primary animate-pulse" style={{ height: `${h * 4}px`, animationDelay: `${i * 100}ms` }} />
                ))}
              </span>
              <span className="text-xs font-medium text-primary">הסוכן מדבר</span>
            </>
          ) : (
            <>
              <span className="flex gap-0.5 items-end h-5">
                {[2, 3, 2, 3, 2].map((h, i) => (
                  <span key={i} className="w-1 rounded-full bg-secondary-400" style={{ height: `${h * 4}px` }} />
                ))}
              </span>
              <span className="text-xs font-medium text-secondary-600">מאזין...</span>
            </>
          )}
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center gap-2 py-1 text-xs text-maccabi-muted">
          <Loader2 size={14} className="animate-spin text-primary" />
          {phase === "requesting" ? "מבקש גישה למיקרופון..." : "מתחבר לסוכן..."}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-center">
          {error}
        </p>
      )}

      {/* CTA button */}
      <button
        onClick={isConnected ? stop : start}
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
          isConnected
            ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
            : isLoading
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
            : "bg-primary text-white hover:bg-primary-600 shadow-sm shadow-primary/20"
        }`}
      >
        {isConnected ? (
          <><MicOff size={16} /> סיום שיחה</>
        ) : isLoading ? (
          <><Loader2 size={16} className="animate-spin" /> מתחבר...</>
        ) : (
          <><Mic size={16} /> התחל שיחה עם הסוכן</>
        )}
      </button>

      {!isConnected && !isLoading && (
        <p className="text-xs text-maccabi-muted text-center leading-relaxed">
          הסוכן עונה על שאלות, מסייע בהכנה למפגשים ומספק משוב אישי.
          <br />נדרשת גישה למיקרופון.
        </p>
      )}
    </div>
  );
}

export default function ElevenLabsAgent() {
  return (
    <ConversationProvider>
      <AgentWidget />
    </ConversationProvider>
  );
}
