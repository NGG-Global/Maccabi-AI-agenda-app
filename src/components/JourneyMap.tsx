import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";
import { Brain, Lightbulb, Wrench, Rocket, TrendingUp } from "lucide-react";

const programTracks = [
  { icon: Brain,      label: "ניהול בעידן האג'נטי",              desc: "מפגש 1" },
  { icon: Lightbulb, label: "כישורי מנהיגות בעידן ה-AI",         desc: "מפגש 2" },
  { icon: Wrench,    label: "כלי AI לעבודה ניהולית",             desc: "מפגש 3" },
  { icon: Rocket,    label: "מיישמים AI בשטח",                   desc: "מפגש 4" },
  { icon: TrendingUp,label: "מובילים הטמעה",                     desc: "מפגש 5" },
];

function ProgramOverview() {
  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-maccabi-text">מסלולי התוכנית</span>
        <span className="text-xs text-maccabi-muted">9 מפגשים | שנה מלאה</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {programTracks.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-primary-50 border border-primary-100 text-center">
            <Icon size={20} className="text-primary" />
            <span className="text-xs font-medium text-maccabi-text leading-tight">{label}</span>
            <span className="text-xs text-maccabi-muted">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function JourneyMap() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-maccabi-text">מנהיגות בעידן הבינה המלאכותית</h1>
        <p className="text-maccabi-muted text-base leading-relaxed max-w-2xl">
          תוכנית פיתוח מנהלים של מכבי שירותי בריאות — תשעה מפגשים של למידה, התנסות ויישום בעידן ה-AI.
        </p>
      </div>

      {/* Program tracks overview */}
      <ProgramOverview />

      {/* Session Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>

      <p className="text-xs text-maccabi-muted text-center pb-4">
        לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
