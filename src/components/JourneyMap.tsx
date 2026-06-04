import { sessions } from "@/data/sessions";
import SessionCard from "./SessionCard";
import { Brain, Lightbulb, Wrench, Rocket, TrendingUp } from "lucide-react";
import ElevenLabsAgent from "./ElevenLabsAgent";

const programTracks = [
  { icon: Brain,       label: "ניהול בעידן האג'נטי",             session: "מפגש 1", color: "from-primary-600 to-primary-400" },
  { icon: Lightbulb,  label: "כישורי מנהיגות בעידן ה-AI",        session: "מפגש 2", color: "from-primary-500 to-secondary-400" },
  { icon: Wrench,     label: "כלי AI לעבודה ניהולית",            session: "מפגש 3", color: "from-secondary-600 to-secondary-400" },
  { icon: Rocket,     label: "מיישמים AI בשטח",                  session: "מפגשים 4–6", color: "from-accent-500 to-accent-300" },
  { icon: TrendingUp, label: "מובילים הטמעה",                    session: "מפגשים 7–9", color: "from-primary-700 to-primary-500" },
];

// Sessions split: individual (1-3, 7-9) and grouped self-learning (4-6)
const individualSessions = sessions.filter((s) => s.id <= 3 || s.id >= 7);
const selfLearningSessions = sessions.filter((s) => s.id >= 4 && s.id <= 6);

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
            מכבי שירותי בריאות
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            AI MASTER
            <br />
            <span className="text-secondary-300">2026</span>
          </h1>
          <p className="text-primary-200 text-sm sm:text-base leading-relaxed max-w-lg">
            תוכנית פיתוח מנהלים – התנסות ויישום בעידן ה-AI
          </p>
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
              <div className={`absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l ${color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`} />
            </div>
          ))}
        </div>
      </div>

      {/* Session Grid */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-maccabi-muted uppercase tracking-widest px-1">כל המפגשים</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Sessions 1-3 */}
          {sessions.filter((s) => s.id <= 3).map((session, i) => (
            <div key={session.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
              <SessionCard session={session} />
            </div>
          ))}

          {/* Grouped card: Sessions 4-6 self-learning */}
          <div className="animate-fade-in-up lg:col-span-3" style={{ animationDelay: "150ms" }}>
            <div className="relative rounded-xl border border-purple-200 bg-purple-50/60 overflow-hidden shadow-sm">
              <div className="h-1 bg-gradient-to-l from-purple-500 to-purple-300" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-purple-700">מפגשים 4–6 | למידה עצמית</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    3 מפגשים
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selfLearningSessions.map((session) => (
                    <div key={session.id} className="bg-white rounded-lg border border-purple-100 p-4 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <span className="text-xs font-bold text-purple-600">מפגש {session.id}</span>
                      <p className="text-sm font-semibold text-maccabi-text leading-snug">{session.title}</p>
                      {session.subtitle && <p className="text-xs text-maccabi-muted">{session.subtitle}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sessions 7-9 */}
          {sessions.filter((s) => s.id >= 7).map((session, i) => (
            <div key={session.id} className="animate-fade-in-up" style={{ animationDelay: `${(i + 6) * 50}ms` }}>
              <SessionCard session={session} />
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant */}
      <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <h2 className="text-sm font-semibold text-maccabi-muted uppercase tracking-widest px-1">עוזר AI אישי</h2>
        <div className="max-w-lg">
          <ElevenLabsAgent />
        </div>
      </div>

      <p className="text-xs text-maccabi-muted text-center pb-4">
        לשאלות, פנו לצוות ההדרכה.
      </p>
    </section>
  );
}
