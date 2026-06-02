import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";

function JourneyLegend() {
  const items = [
    { color: "bg-secondary", label: "הושלם" },
    { color: "bg-primary", label: "מפגש נוכחי" },
    { color: "bg-gray-300", label: "פתוח לרישום" },
    { color: "bg-gray-200", label: "טרם נפתח" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-maccabi-muted">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ProgressBar() {
  const total = sessions.length;
  const completed = sessions.filter((s) => s.status === "completed").length;
  const current = sessions.find((s) => s.status === "current");
  const currentIndex = current ? sessions.findIndex((s) => s.id === current.id) : -1;
  const progressPercent = currentIndex >= 0 ? Math.round(((currentIndex + 0.5) / total) * 100) : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-maccabi-text">התקדמות המסע</span>
        <span className="text-maccabi-muted text-xs">
          {completed} מתוך {total} מפגשים הושלמו
        </span>
      </div>
      <div className="w-full bg-primary-100 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-700"
          style={{
            width: `${progressPercent}%`,
            background: "linear-gradient(to left, #004B87, #00A651)",
          }}
        />
      </div>
    </div>
  );
}

export default function JourneyMap() {
  return (
    <section className="space-y-8">
      {/* Hero banner */}
      <div
        className="rounded-2xl px-6 py-8 sm:px-10 sm:py-10 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #004B87 0%, #003D6F 60%, #00A651 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative space-y-2 max-w-xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-200 mb-1">
            מכבי שירותי בריאות
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
            מסע הלמידה — תוכנית אופק
          </h1>
          <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
            תוכנית פיתוח מנהלים. תשעה מפגשים של למידה, חשיבה ויישום — מדריכים אותכם להיות מנהלים טובים יותר.
          </p>
        </div>
      </div>

      {/* Progress card */}
      <div className="card p-5 space-y-4 border-l-0 border-r-4 border-r-primary">
        <ProgressBar />
        <JourneyLegend />
      </div>

      {/* Session Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-xs text-maccabi-muted text-center pb-4">
        מפגשים נעולים יפתחו לפי לוח הזמנים הרשמי של תוכנית אופק.
        לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
