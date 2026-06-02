import { SessionStatus } from "@/types";
import { CheckCircle2, Circle, Zap } from "lucide-react";

interface StatusBadgeProps {
  status: SessionStatus;
  size?: "sm" | "md";
}

const statusConfig: Record<
  SessionStatus,
  { label: string; className: string; Icon: React.ElementType }
> = {
  completed: {
    label: "הושלם",
    className: "bg-secondary-50 text-secondary-700 border border-secondary-200",
    Icon: CheckCircle2,
  },
  current: {
    label: "מפגש נוכחי",
    className: "bg-primary-50 text-primary-700 border border-primary-200",
    Icon: Zap,
  },
  open: {
    label: "פתוח",
    className: "bg-gray-50 text-gray-600 border border-gray-200",
    Icon: Circle,
  },
};

export default function StatusBadge({
  status,
  size = "sm",
}: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.Icon;
  const iconSize = size === "sm" ? 13 : 15;
  const textClass = size === "sm" ? "text-xs" : "text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium ${textClass} ${config.className}`}
    >
      {status === "current" ? (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
        </span>
      ) : (
        <Icon size={iconSize} strokeWidth={2} />
      )}
      {config.label}
    </span>
  );
}
