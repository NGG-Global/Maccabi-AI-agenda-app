import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";

function ProgressCard() {
  const total = sessions.length;
  const completed = sessions.filter((s) => s.status === "completed").length;
  const curIdx = sessions.findIndex((s) => s.status === "current");
  const pct = curIdx >= 0 ? Math.round(((curIdx + 0.5) / total) * 100) : 0;

  const legend = [
    { color: "#A7C86F", label: "הושלם" },
    { color: "#D25089", label: "מפגש נוכחי" },
    { color: "#E2E3E5", label: "טרם נפתח" },
  ];

  return (
    <div className="card p-4 sm:p-5 space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-maccabi-text">התקדמות המסע</span>
        <span className="text-xs text-maccabi-subtle">{completed} מתוך {total} מפגשים הושלמו</span>
      </div>
      <div className="w-full bg-maccabi-bg rounded-full h-2 overflow-hidden">
        <div className="bg-primary-700 h-2 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
      <div className="flex flex-wrap gap-3">
        {legend.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-[11px] text-maccabi-subtle">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function JourneyMap() {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Hero — navy gradient panel */}
      <div className="bg-grad-navy rounded-lg p-6 sm:p-8 text-white -mx-4 sm:mx-0">
        <div className="text-xs font-medium tracking-wide text-accent-300 mb-2">
          מכבי AI Master · מחזור 2026
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
          מסע הלמידה<span className="text-accent-500">.</span>
        </h1>
        <p className="text-sm text-primary-300 mt-2 max-w-xl leading-relaxed">
          תשעה מפגשים של למידה, חשיבה ויישום — מצפן ניהולי לפיתוח מנהלים.
        </p>
      </div>

      <ProgressCard />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      <p className="text-[11px] text-maccabi-subtle text-center pb-2 leading-relaxed">
        מפגשים נעולים יפתחו לפי לוח הזמנים הרשמי של מכבי AI Master. לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
