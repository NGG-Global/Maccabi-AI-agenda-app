import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";
import { CheckCircle2, Circle, Lock } from "lucide-react";

function ProgressConnector({ status }: { status: "completed" | "active" | "inactive" }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 shrink-0 mt-12">
      <div
        className={`h-0.5 w-full ${
          status === "completed"
            ? "bg-secondary"
            : status === "active"
            ? "bg-primary"
            : "bg-maccabi-border"
        }`}
      />
    </div>
  );
}

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
          <div className={`w-3 h-3 rounded-full ${color}`} />
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
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-maccabi-text">התקדמות המסע</span>
        <span className="text-maccabi-muted">
          {completed} מתוך {total} מפגשים הושלמו
        </span>
      </div>
      <div className="w-full bg-maccabi-border rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-700"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default function JourneyMap() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-maccabi-text">מסע הלמידה — תוכנית אופק</h1>
        <p className="text-maccabi-muted text-base leading-relaxed max-w-2xl">
          תוכנית פיתוח מנהלים של מכבי שירותי בריאות. תשעה מפגשים של למידה, חשיבה ויישום — מדריכים אותכם להיות מנהלים טובים יותר.
        </p>
      </div>

      {/* Progress */}
      <div className="card p-5 space-y-4">
        <ProgressBar />
        <JourneyLegend />
      </div>

      {/* Session Grid */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <p className="text-xs text-maccabi-muted text-center pb-4">
        מפגשים נעולים יפתחו לפי לוח הזמנים הרשמי של תוכנית אופק.
        לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
