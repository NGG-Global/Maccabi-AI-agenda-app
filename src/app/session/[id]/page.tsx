import { notFound } from "next/navigation";
import Link from "next/link";
import { getSessionById, getAdjacentSessions } from "@/data/sessions";
import StatusBadge from "@/components/StatusBadge";
import AdvisorPanel from "@/components/advisor/AdvisorPanel";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  MapPin,
  Monitor,
  Building2,
  Briefcase,
  BookOpen,
  Wrench,
  ClipboardList,
  ChevronRight,
  Lock,
} from "lucide-react";

const formatConfig = {
  frontal: { label: "מפגש פרונטלי", Icon: Building2, className: "badge-frontal" },
  virtual: { label: "מפגש וירטואלי", Icon: Monitor, className: "badge-virtual" },
  external: { label: "ספק חיצוני", Icon: Briefcase, className: "badge-external" },
};

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return Array.from({ length: 9 }, (_, i) => ({ id: String(i + 1) }));
}

export default function SessionPage({ params }: PageProps) {
  const sessionId = parseInt(params.id, 10);
  if (isNaN(sessionId) || sessionId < 1 || sessionId > 9) notFound();

  const session = getSessionById(sessionId);
  if (!session) notFound();

  const { prev, next } = getAdjacentSessions(sessionId);
  const fmt = formatConfig[session.format];
  const FmtIcon = fmt.Icon;
  const isLocked = session.status === "locked";
  const isCurrent = session.status === "current";

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-maccabi-muted">
        <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
          <ArrowRight size={14} />
          מפת המסע
        </Link>
        <ChevronRight size={14} className="text-gray-300" />
        <span className="text-maccabi-text font-medium">{session.title}</span>
      </nav>

      {/* Session Header Card */}
      <div
        className={`rounded-xl overflow-hidden border ${
          isCurrent ? "border-primary border-2 shadow-lg shadow-primary/10" : "border-maccabi-border"
        }`}
      >
        {/* Colored top strip */}
        <div
          className="h-2"
          style={
            isCurrent
              ? { background: "linear-gradient(to left, #004B87, #00A651)" }
              : { background: "#E5E8EC" }
          }
        />
        <div className="bg-white p-4 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={session.status} size="md" />
            <span className={fmt.className}>
              <FmtIcon size={13} />
              {fmt.label}
            </span>
            <span className="text-sm text-maccabi-muted">מפגש {session.id} מתוך 9</span>
          </div>

          <div>
            <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${isCurrent ? "text-primary" : "text-maccabi-text"}`}>
              {session.title}
            </h1>
            <p className="text-maccabi-muted mt-1 text-base">{session.subtitle}</p>
          </div>

          <p className="text-maccabi-text leading-relaxed text-sm max-w-3xl">
            {session.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 pt-1">
            {[
              { Icon: Calendar, text: session.date },
              { Icon: Clock, text: session.duration },
              ...(session.participants ? [{ Icon: Users, text: session.participants }] : []),
              ...(session.location ? [{ Icon: MapPin, text: session.location }] : []),
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
                <Icon size={13} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      {isLocked ? (
        <div className="card p-10 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 flex items-center justify-center">
            <Lock size={36} className="text-primary-400" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-maccabi-text">מפגש זה טרם נפתח</h2>
            <p className="text-maccabi-muted text-sm max-w-md leading-relaxed">
              תוכן המפגש יהיה זמין לפי לוח הזמנים הרשמי של תוכנית אופק.
              אנא חזרו בתאריך {session.date}.
            </p>
          </div>
          <Link href="/" className="btn-primary mt-2">
            חזרה למפת המסע
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Agenda + Homework */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agenda */}
            <section className="space-y-3">
              <h2 className="section-title flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <ClipboardList size={15} className="text-white" />
                </div>
                אג&#8217;נדת המפגש
              </h2>
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute top-0 bottom-0 right-[1.85rem] w-0.5 bg-primary-100 pointer-events-none" />
                <div className="space-y-3">
                  {session.agenda.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 relative">
                      {/* Timeline dot */}
                      <div className="shrink-0 w-14 flex flex-col items-center gap-1 pt-2.5">
                        <div className={`w-3 h-3 rounded-full border-2 z-10 ${
                          index === 0 ? "bg-primary border-primary" : "bg-white border-primary-300"
                        }`} />
                      </div>
                      {/* Card */}
                      <div
                        className={`flex-1 card p-4 ${
                          !item.description && !item.facilitator ? "bg-gray-50/60 opacity-70" : "hover:border-primary-200 transition-colors"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <span className="shrink-0 font-mono text-xs font-bold text-primary bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md w-fit">
                            {item.time}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-maccabi-text text-sm">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="text-maccabi-muted text-xs mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                            {item.facilitator && (
                              <p className="text-xs text-secondary-600 mt-1.5 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
                                מנחה: {item.facilitator}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Homework */}
            {session.homework && (
              <section className="rounded-xl border border-accent-200 border-r-4 border-r-accent bg-accent-50/40 p-5 space-y-2">
                <h2 className="font-bold text-maccabi-text flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                    <BookOpen size={13} className="text-white" />
                  </div>
                  מטלה לבית
                </h2>
                <p className="text-sm text-maccabi-muted leading-relaxed">
                  {session.homework}
                </p>
              </section>
            )}

            {/* Next session prep */}
            {session.nextSessionPrep && (
              <section className="rounded-xl border border-secondary-200 border-r-4 border-r-secondary bg-secondary-50/40 p-5 space-y-2">
                <h2 className="font-bold text-maccabi-text flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center">
                    <BookOpen size={13} className="text-white" />
                  </div>
                  הכנה למפגש הבא
                </h2>
                <p className="text-sm text-maccabi-muted leading-relaxed">
                  {session.nextSessionPrep}
                </p>
              </section>
            )}
          </div>

          {/* Right column: Tools + AI Advisor */}
          <div className="space-y-5">
            {/* Digital Tools */}
            {session.digitalTools.length > 0 && (
              <section className="space-y-3">
                <h2 className="section-title flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center">
                    <Wrench size={14} className="text-white" />
                  </div>
                  כלים דיגיטליים
                </h2>
                <div className="space-y-3">
                  {session.digitalTools.map((tool, index) => (
                    <div key={index} className="card p-4 space-y-1.5 hover:border-primary-200 hover:shadow-sm transition-all group">
                      <h3 className="font-semibold text-sm text-maccabi-text group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-maccabi-muted leading-relaxed">
                        {tool.description}
                      </p>
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                        >
                          פתח כלי ←
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AI Advisor */}
            <section>
              <h2 className="section-title flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #004B87, #00A651)" }}>
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                יועץ AI אישי
              </h2>
              <AdvisorPanel sessionId={session.id} isAvailable={isCurrent} />
            </section>
          </div>
        </div>
      )}

      {/* Navigation between sessions */}
      <div className="flex items-center justify-between pt-4 border-t border-maccabi-border">
        {prev ? (
          <Link
            href={`/session/${prev.id}`}
            className="flex items-center gap-2 text-sm text-maccabi-muted hover:text-primary transition-colors group"
          >
            <ArrowRight size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <div className="text-right">
              <div className="text-xs text-maccabi-muted">מפגש קודם</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link href="/" className="btn-secondary text-sm px-4 py-2">
          כל המפגשים
        </Link>

        {next ? (
          <Link
            href={`/session/${next.id}`}
            className={`flex items-center gap-2 text-sm transition-colors group ${
              next.status === "locked"
                ? "text-gray-400 cursor-not-allowed pointer-events-none"
                : "text-maccabi-muted hover:text-primary"
            }`}
          >
            <div className="text-left">
              <div className="text-xs">מפגש הבא</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ArrowLeft size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
