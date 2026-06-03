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
  external: { label: "ספד חיצוני", Icon: Briefcase, className: "badge-external" },
};

const accentColor = {
  current: "bg-gradient-to-l from-primary to-primary-400",
  completed: "bg-gradient-to-l from-secondary to-secondary-400",
  open: "bg-gradient-to-l from-gray-300 to-gray-200",
};

export default function SessionCard({ session }: SessionCardProps) {
  const { id, title, subtitle, format, duration, participants, date, status, description } = session;
  const isCurrent = status === "current";
  const fmt = formatConfig[format];
  const FmtIcon = fmt.Icon;

  return (
    <div
      className={`
        relative flex flex-col rounded-xl border overflow-hidden transition-all duration-300 group
        hover:shadow-xl hover:-translate-y-1.5
        ${isCurrent
          ? "bg-white border-2 border-primary shadow-lg shadow-primary/15 current-session-pulse"
          : "bg-white border-maccabi-border hover:border-primary-200 shadow-sm"
        }
      `}
    >
      {/* Top accent bar */}
      <div className={`h-1 ${accentColor[status] ?? accentColor.open}`} />

      {/* Current badge glow overlay */}
      {isCurrent && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 to-transparent pointer-events-none rounded-xl" />
      )}

      <div className="relative p-5 flex flex-col gap-3 flex-1">
        {/* Session number + format badge */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold tracking-widest uppercase ${isCurrent ? "text-primary" : "text-maccabi-muted"}`}>
            מפגש {id}
          </span>
          <span className={fmt.className}>
            <FmtIcon size={12} />
            {fmt.label}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className={`font-bold leading-snug transition-colors duration-200 ${
            isCurrent ? "text-lg text-primary" : "text-base text-maccabi-text group-hover:text-primary"
          }`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs mt-0.5 text-maccabi-muted">{subtitle}</p>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs text-maccabi-muted line-clamp-2 leading-relaxed">{description}</p>
        )}

        {/* Meta info */}
        <div className="flex flex-col gap-1.5 text-xs text-maccabi-muted">
          {date && (
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-primary-300" />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-primary-300" />
              <span>{duration}</span>
            </div>
          )}
          {participants && (
            <div className="flex items-center gap-1.5">
              <Users size={12} className="text-primary-300" />
              <span>{participants}</span>
            </div>
          )}
        </div>

        <div className="flex-1" />

        {/* Status + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-maccabi-border">
          <StatusBadge status={status} />
          <Link
            href={`/session/${id}`}
            className={`
              inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 min-h-[36px] rounded-lg transition-all duration-200
              hover:gap-2.5 active:scale-95
              ${isCurrent
                ? "bg-primary text-white hover:bg-primary-600 shadow-sm shadow-primary/30"
                : "bg-primary-50 text-primary hover:bg-primary-100"
              }
            `}
          >
            כניסה למפגש
            <ArrowLeft size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
