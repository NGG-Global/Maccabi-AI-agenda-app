import { notFound } from "next/navigation";
import Link from "next/link";
import { getSessionById, getAdjacentSessions } from "@/data/sessions";
import StatusBadge from "@/components/StatusBadge";
import ElevenLabsAgent from "@/components/ElevenLabsAgent";
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
} from "lucide-react";

const formatConfig = {
  frontal: { label: "מפגש פרונטלי", Icon: Building2, className: "badge-frontal" },
  virtual: { label: "מפגש וירטואלי", Icon: Monitor, className: "badge-virtual" },
  external: { label: "ספד חיצוני", Icon: Briefcase, className: "badge-external" },
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
  const isCurrent = session.status === "current";
  const hasContent =
    session.agenda.length > 0 ||
    session.digitalTools.length > 0 ||
    !!session.homework ||
    !!session.description;

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
      <div className={`card p-4 sm:p-6 space-y-4 ${isCurrent ? "border-primary border-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={session.status} size="md" />
          <span className={fmt.className}>
            <FmtIcon size={13} />
            {fmt.label}
          </span>
          <span className="text-sm text-maccabi-muted">מפגש {session.id} מתוך 9</span>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-maccabi-text">
            {session.title}
          </h1>
          {session.subtitle && (
            <p className="text-maccabi-muted mt-1 text-base">{session.subtitle}</p>
          )}
        </div>

        {session.description && (
          <p className="text-maccabi-text leading-relaxed text-sm max-w-3xl">
            {session.description}
          </p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap gap-5 text-sm text-maccabi-muted pt-1">
          {session.date && (
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-primary-400" />
              <span>{session.date}</span>
            </div>
          )}
          {session.duration && (
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-primary-400" />
              <span>{session.duration}</span>
            </div>
          )}
          {session.participants && (
            <div className="flex items-center gap-1.5">
              <Users size={15} className="text-primary-400" />
              <span>{session.participants}</span>
            </div>
          )}
          {session.location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={15} className="text-primary-400" />
              <span>{session.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {hasContent ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Agenda + Homework */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agenda */}
            {session.agenda.length > 0 && (
              <section className="space-y-3">
                <h2 className="section-title flex items-center gap-2">
                  <ClipboardList size={20} className="text-primary" />
                  אג&#8217;נדת המפגש
                </h2>
                <div className="space-y-2">
                  {session.agenda.map((item, index) => (
                    <div
                      key={index}
                      className={`card p-4 ${
                        !item.description && !item.facilitator
                          ? "bg-gray-50 opacity-60"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="shrink-0">
                          <span className="font-mono text-xs font-semibold text-primary bg-primary-50 px-2 py-1 rounded-md">
                            {item.time}
                          </span>
                        </div>
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
                            <p className="text-xs text-primary-500 mt-1 font-medium">
                              מנחה: {item.facilitator}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Homework */}
            {session.homework && (
              <section className="card p-5 border-r-4 border-r-accent space-y-2">
                <h2 className="font-bold text-maccabi-text flex items-center gap-2">
                  <BookOpen size={18} className="text-accent" />
                  מטלה לבית
                </h2>
                <p className="text-sm text-maccabi-muted leading-relaxed">
                  {session.homework}
                </p>
              </section>
            )}

            {/* Next session prep */}
            {session.nextSessionPrep && (
              <section className="card p-5 border-r-4 border-r-secondary space-y-2">
                <h2 className="font-bold text-maccabi-text flex items-center gap-2">
                  <BookOpen size={18} className="text-secondary" />
                  הכנה למפגש הבא
                </h2>
                <p className="text-sm text-maccabi-muted leading-relaxed">
                  {session.nextSessionPrep}
                </p>
              </section>
            )}
          </div>

          {/* Right column: Tools + ElevenLabs Agent */}
          <div className="space-y-5">
            {/* Digital Tools */}
            {session.digitalTools.length > 0 && (
              <section className="space-y-3">
                <h2 className="section-title flex items-center gap-2">
                  <Wrench size={20} className="text-primary" />
                  כלים דיגיטליים
                </h2>
                <div className="space-y-3">
                  {session.digitalTools.map((tool, index) => (
                    <div key={index} className="card p-4 space-y-1 hover:border-primary-200 transition-colors">
                      <h3 className="font-semibold text-sm text-maccabi-text">
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
                          className="text-xs text-primary font-medium hover:underline"
                        >
                          פתח כלי ←
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ElevenLabs AI Agent */}
            <section className="space-y-3">
              <h2 className="section-title flex items-center gap-2">
                <span className="text-primary">✦</span>
                סוכן AI אישי
              </h2>
              <ElevenLabsAgent />
            </section>
          </div>
        </div>
      ) : (
        <div className="card p-10 flex flex-col items-center justify-center text-center space-y-3">
          <p className="text-maccabi-muted text-sm">תוכן המפגש יתעדכן בקרוב.</p>
          <Link href="/" className="btn-primary mt-2">
            חזרה למפת המסע
          </Link>
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
            className="flex items-center gap-2 text-sm text-maccabi-muted hover:text-primary transition-colors group"
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
