import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";
import { Brain, Lightbulb, Wrench, Rocket, TrendingUp } from "lucide-react";

const programTracks = [
  { icon: Brain,       label: "ניהול בעידן האג'נטי",             session: "מפגש 1", color: "from-primary-600 to-primary-400" },
  { icon: Lightbulb,  label: "כישורי מנהיגות בעידן ה-AI",        session: "מפגש 2", color: "from-primary-500 to-secondary-400" },
  { icon: Wrench,     label: "כלי AI לעבודה ניהולית",            session: "מפגש 3", color: "from-secondary-600 to-secondary-400" },
  { icon: Rocket,     label: "מיישמים AI בשטח",                  session: "מפגש 4", color: "from-accent-500 to-accent-300" },
  { icon: TrendingUp, label: "מובילים הטמעה",                    session: "מפגש 5", color: "from-primary-700 to-primary-500" },
];

export default function JourneyMap() {
  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden gradient-hero px-6 py-10 sm:px-10 sm:py-12 shadow-xl shadow-primary/20 animate-fade-in">
        {/* decorative circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-4 left-1/3 w-16 h-16 rounded-full bg-secondary/10 pointer-events-none" />

        <div className="relative space-y-3 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-200 bg-white/10 px-3 py-1 rounded-full tracking-wider uppercase">
            מכבי שירותי בריאות · 2025
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            מנהיגות בעידן
            <br />
            <span className="text-secondary-300">הבינה המלאכותית</span>
          </h1>
          <p className="text-primary-200 text-sm sm:text-base leading-relaxed max-w-lg">
            תוכנית פיתוח מנהלים — תשעה מפגשים של למידה, התנסות ויישום בעידן ה-AI.
          </p>
          <div className="flex items-center gap-4 pt-2 text-xs text-primary-200">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
              9 מפגשים
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
              כ-100 מנהלים
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
              שנה מלאה
            </span>
          </div>
        </div>
      </div>

      {/* Program tracks */}
      <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <h2 className="text-sm font-semibold text-maccabi-muted uppercase tracking-widest px-1">מסלולי התוכנית</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {programTracks.map(({ icon: Icon, label, session, color }, i) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-maccabi-border bg-white p-4 flex flex-col gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={17} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-maccabi-text leading-tight">{label}</p>
                <p className="text-xs text-maccabi-muted mt-0.5">{session}</p>
              </div>
              {/* hover accent line */}
              <div className={`absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l ${color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
            </div>
          ))}
        </div>
      </div>

      {/* Session Grid */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-maccabi-muted uppercase tracking-widest px-1">כל המפגשים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sessions.map((session, i) => (
            <div key={session.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <SessionCard session={session} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-maccabi-muted text-center pb-4">
        לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
