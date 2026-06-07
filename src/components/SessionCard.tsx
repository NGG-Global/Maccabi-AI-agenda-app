import Link from "next/link";
import { Session } from "@/types";
import StatusBadge from "./StatusBadge";
import { Calendar, Clock, Monitor, Building2, BookOpen, ArrowLeft, Lock } from "lucide-react";

interface SessionCardProps {
  session: Session;
}

const formatConfig = {
  frontal:         { label: "פרונטלי",      Icon: Building2, className: "chip-frontal" },
  virtual:         { label: "וירטואלי",     Icon: Monitor,   className: "chip-virtual" },
  "self-learning": { label: "למידה עצמאית", Icon: BookOpen,  className: "chip-frontal" },
};

const moduleColors = [
  "#6B76EC", "#73D9F0", "#A7C86F", "#F9BE94",
  "#F1717E", "#D25089", "#1E3C95", "#2B92B7", "#040450",
];

export default function SessionCard({ session }: SessionCardProps) {
  const { id, title, subtitle, format, duration, date, status, description } = session;
  const isCurrent = status === "current";
  const isLocked  = status === "locked";
  const fmt = formatConfig[format];
  const FmtIcon = fmt.Icon;
  const accentColor = moduleColors[(id - 1) % moduleColors.length];

  return (
    <div className={[
      "relative flex flex-col overflow-hidden transition-all duration-200",
      isCurrent
        ? "bg-white rounded-md pink-frame"
        : isLocked
        ? "bg-[#fbfbfc] border border-maccabi-border rounded-md opacity-70"
        : "bg-white border border-maccabi-border rounded-md shadow-ofek-1 hover:shadow-ofek-2",
    ].join(" ")}>

      <div className="h-1 w-full shrink-0" style={{ background: isLocked ? "#E2E3E5" : accentColor }} />

      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs font-semibold tracking-wider ${isCurrent ? "text-accent-700" : "text-maccabi-subtle"}`}>
            מפגש {String(id).padStart(2, "0")}
          </span>
          <span className={`chip ${fmt.className}`}>
            <FmtIcon size={12} />
            {fmt.label}
          </span>
        </div>

        <div>
          <h3 className={`font-semibold leading-snug ${
            isCurrent ? "text-lg text-primary-700"
            : isLocked ? "text-base text-maccabi-subtle"
            : "text-base text-maccabi-text"
          }`}>
            {title}
          </h3>
          <p className={`text-xs mt-0.5 ${isLocked ? "text-maccabi-subtle" : "text-maccabi-muted"}`}>{subtitle}</p>
        </div>

        {!isLocked && (
          <p className="text-xs text-maccabi-muted line-clamp-2 leading-relaxed">{description}</p>
        )}

        <div className={`flex flex-col gap-1.5 text-xs ${isLocked ? "text-maccabi-subtle" : "text-maccabi-muted"}`}>
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-primary-500" /><span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-primary-500" /><span>{duration}</span>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-maccabi-border">
          <StatusBadge status={status} />
          {!isLocked ? (
            <Link href={`/session/${id}`}
              className={isCurrent ? "btn-primary !min-h-[36px] !py-1.5 !text-xs" : "btn-soft !min-h-[36px] !py-1.5 !text-xs"}>
              כניסה למפגש
              <ArrowLeft size={12} />
            </Link>
          ) : (
            <span className="text-xs text-maccabi-subtle flex items-center gap-1">
              <Lock size={12} /> יפתח בקרוב
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
