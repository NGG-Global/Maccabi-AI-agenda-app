import Link from "next/link";
import { Session } from "@/types";
import StatusBadge from "./StatusBadge";
import { Calendar, Clock, Users, Monitor, Building2, Briefcase, ArrowLeft } from "lucide-react";

interface SessionCardProps {
  session: Session;
}

const formatConfig = {
  frontal: { label: "פרונטלי", Icon: Building2, className: "badge-frontal" },
  virtual: { label: "וירטואלי", Icon: Monitor, className: "badge-virtual" },
  external: { label: "ספק חיצוני", Icon: Briefcase, className: "badge-external" },
};

export default function SessionCard({ session }: SessionCardProps) {
  const { id, title, subtitle, format, duration, participants, date, status, description } = session;
  const isCurrent = status === "current";
  const isLocked = status === "locked";
  const fmt = formatConfig[format];
  const FmtIcon = fmt.Icon;

  return (
    <div
      className={`
        relative flex flex-col rounded-xl border transition-all duration-300
        ${isCurrent
          ? "bg-white border-2 border-primary shadow-2xl shadow-primary/20 current-session-pulse"
          : isLocked
          ? "bg-gray-50/80 border-maccabi-border opacity-70"
          : "bg-white border-maccabi-border hover:shadow-lg hover:border-primary-300 hover:-translate-y-0.5"
        }
      `}
    >
      {/* Top accent bar */}
      <div
        className={`h-1.5 rounded-t-xl ${
          isCurrent
            ? "bg-gradient-to-l from-primary to-secondary"
            : status === "completed"
            ? "bg-secondary"
            : status === "open"
            ? "bg-primary-200"
            : "bg-gray-200"
        }`}
      />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Session number + format badge */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              isCurrent ? "text-primary" : "text-maccabi-muted"
            }`}
          >
            מפגש {id.toString().padStart(2, "0")}
          </span>
          <span className={fmt.className}>
            <FmtIcon size={12} />
            {fmt.label}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3
            className={`font-bold leading-snug ${
              isCurrent ? "text-lg text-primary" : isLocked ? "text-base text-gray-400" : "text-base text-maccabi-text"
            }`}
          >
            {title}
          </h3>
          <p className={`text-xs mt-0.5 ${isLocked ? "text-gray-400" : "text-maccabi-muted"}`}>
            {subtitle}
          </p>
        </div>

        {/* Description — only for current/open */}
        {!isLocked && (
          <p className="text-xs text-maccabi-muted line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Meta info */}
        <div className={`flex flex-col gap-1.5 text-xs ${isLocked ? "text-gray-400" : "text-maccabi-muted"}`}>
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className={isCurrent ? "text-primary-400" : ""} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className={isCurrent ? "text-primary-400" : ""} />
            <span>{duration}</span>
          </div>
          {participants && (
            <div className="flex items-center gap-1.5">
              <Users size={12} className={isCurrent ? "text-primary-400" : ""} />
              <span>{participants}</span>
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Status + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-maccabi-border">
          <StatusBadge status={status} />

          {!isLocked ? (
            <Link
              href={`/session/${id}`}
              className={`
                inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 min-h-[40px] rounded-lg transition-all duration-200
                ${isCurrent
                  ? "bg-primary text-white hover:bg-primary-600 shadow-sm shadow-primary/30"
                  : "bg-primary-50 text-primary border border-primary-200 hover:bg-primary-100"
                }
              `}
            >
              כניסה למפגש
              <ArrowLeft size={13} />
            </Link>
          ) : (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              יפתח בקרוב
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
