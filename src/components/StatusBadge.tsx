import { CheckCircle2, Lock } from "lucide-react";
import { SessionStatus } from "@/types";

const config: Record<SessionStatus, { label: string; className: string }> = {
  completed: { label: "הושלם",       className: "pill-done" },
  current:   { label: "מפגש נוכחי", className: "pill-current" },
  locked:    { label: "טרם נפתח",   className: "pill-locked" },
};

export default function StatusBadge({ status }: { status: SessionStatus }) {
  const c = config[status];
  return (
    <span className={`pill ${c.className}`}>
      {status === "current" ? (
        <span className="relative flex h-2 w-2">
          <span className="animate-ofek-ping absolute inline-flex h-full w-full rounded-full bg-accent-700 opacity-70" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-700" />
        </span>
      ) : status === "completed" ? (
        <CheckCircle2 size={12} strokeWidth={2} />
      ) : (
        <Lock size={12} strokeWidth={2} />
      )}
      {c.label}
    </span>
  );
}
