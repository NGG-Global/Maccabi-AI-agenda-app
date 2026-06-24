import Link from "next/link";
import {
  Download,
  FileText,
  FileType,
  ArrowRight,
  ArrowUpLeft,
  Lock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface MaterialFile {
  label: string;
  fileName: string;
  fileSize: string;
  type?: "pdf" | "docx";
}

interface Material {
  sessionId: number;
  sessionTitle: string;
  label: string;
  description: string;
  files: MaterialFile[] | null;
  available: boolean;
}

const materials: Material[] = [
  {
    sessionId: 1,
    sessionTitle: "מפגש 1",
    label: "ניהול בעידן האג'נטי",
    description:
      "חומרי המפגש המלאים: מצגות המפגש ורקע תיאורטי לתוכנית.",
    files: [
      { label: "חומרי מפגש 1", fileName: "session-1-materials.pdf", fileSize: "3.2 MB", type: "pdf" },
      { label: "AI Master — מבוא לתוכנית", fileName: "session-1-ai-master.pdf", fileSize: "2.4 MB", type: "pdf" },
      { label: "מאמר קריאה — 2024", fileName: "session-1-reading-2024.docx", fileSize: "", type: "docx" },
    ],
    available: true,
  },
  {
    sessionId: 2,
    sessionTitle: "מפגש 2",
    label: "כישורי מנהיגות בעידן ה-AI",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    files: null,
    available: false,
  },
  {
    sessionId: 3,
    sessionTitle: "מפגש 3",
    label: "כישורי מנהיגות בעידן ה-AI",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    files: null,
    available: false,
  },
  {
    sessionId: 4,
    sessionTitle: "מפגש 4",
    label: "מיישמים AI בשטח",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    files: null,
    available: false,
  },
  {
    sessionId: 5,
    sessionTitle: "מפגש 5",
    label: "מיישמים AI בשטח",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    files: null,
    available: false,
  },
  {
    sessionId: 6,
    sessionTitle: "מפגש 6",
    label: "מובילים הטמעה",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    files: null,
    available: false,
  },
];

const sessionColors = [
  "#6B76EC", "#73D9F0", "#A7C86F", "#F9BE94",
  "#F1717E", "#D25089", "#1E3C95", "#2B92B7", "#040450",
];

export default function MaterialsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-maccabi-subtle">
        <Link href="/" className="hover:text-primary-700 transition-colors flex items-center gap-1">
          <ArrowRight size={14} />
          מפת המסע
        </Link>
        <span className="text-maccabi-border">›</span>
        <span className="text-maccabi-text font-medium">חומרי למידה</span>
      </nav>

      {/* Hero */}
      <div className="bg-grad-navy rounded-lg p-6 sm:p-8 text-white -mx-4 sm:mx-0">
        <div className="text-xs font-medium tracking-wide text-accent-300 mb-2">
          מכבי AI Master · מחזור 2026
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
          חומרי למידה<span className="text-accent-500">.</span>
        </h1>
        <p className="text-sm text-primary-300 mt-2 max-w-xl leading-relaxed">
          מצגות, מסמכים וחומרי הכנה לכל מפגשי התוכנית — יתעדכנו לפני כל מפגש.
        </p>
      </div>

      {/* Universal resource — applies across all sessions, not tied to one */}
      <a
        href="https://adoption.microsoft.com/en-us/copilot/success-kit/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 overflow-hidden rounded-md bg-white border border-maccabi-border shadow-ofek-1 hover:shadow-ofek-2 transition-all duration-200 p-4 sm:p-5"
      >
        {/* Accent bar — leading edge in RTL */}
        <span className="absolute inset-y-0 right-0 w-1 bg-grad-navy" aria-hidden="true" />

        {/* Icon */}
        <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-primary-50 text-primary-700">
          <Sparkles size={22} />
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-semibold tracking-wider text-accent-700">
              לכל המפגשים
            </span>
            <span className="chip chip-external">
              <ExternalLink size={11} /> קישור חיצוני
            </span>
          </div>
          <h3 className="font-semibold text-base text-maccabi-text leading-snug">
            ערכת הטמעה — Microsoft 365 Copilot
          </h3>
          <p className="text-xs text-maccabi-muted mt-1 leading-relaxed max-w-2xl">
            ערכת ההטמעה הרשמית של Microsoft: מדריכים, תרחישי שימוש וכלים מעשיים
            להטמעת Copilot בארגון — זמינה לכל משתתפי התוכנית, ללא תלות במפגש מסוים.
          </p>
        </div>

        {/* Affordance */}
        <ArrowUpLeft
          size={18}
          className="shrink-0 text-maccabi-subtle transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-700"
        />
      </a>

      {/* Materials grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {materials.map((m) => {
          const color = sessionColors[(m.sessionId - 1) % sessionColors.length];
          return (
            <div
              key={m.sessionId}
              className={[
                "relative flex flex-col overflow-hidden rounded-md transition-all duration-200",
                m.available
                  ? "bg-white border border-maccabi-border shadow-ofek-1 hover:shadow-ofek-2"
                  : "bg-[#fbfbfc] border border-maccabi-border opacity-60",
              ].join(" ")}
            >
              {/* Colour bar */}
              <div className="h-1 w-full shrink-0" style={{ background: m.available ? color : "#E2E3E5" }} />

              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* Session label */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold tracking-wider text-maccabi-subtle">
                    {m.sessionTitle}
                  </span>
                  {m.available ? (
                    <span className="chip chip-frontal">זמין</span>
                  ) : (
                    <span className="chip" style={{ background: "#F3F4F6", color: "#808285" }}>
                      <Lock size={11} /> בקרוב
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className={`font-semibold leading-snug text-base ${m.available ? "text-maccabi-text" : "text-maccabi-subtle"}`}>
                    {m.label}
                  </h3>
                  <p className="text-xs text-maccabi-muted mt-1 leading-relaxed line-clamp-2">
                    {m.description}
                  </p>
                </div>

                <div className="flex-1" />

                {/* Download area */}
                {m.available && m.files && m.files.length > 0 ? (
                  <div className="pt-3 border-t border-maccabi-border space-y-2">
                    {m.files.map((f) => {
                      const isDocx = f.type === "docx";
                      const Icon = isDocx ? FileType : FileText;
                      const typeLabel = isDocx ? "Word" : "PDF";
                      return (
                        <a
                          key={f.fileName}
                          href={`/materials/${f.fileName}`}
                          download
                          className="flex items-center gap-2 w-full text-xs text-primary-700 bg-primary-50 border border-primary-200 rounded-md px-3 py-2 hover:bg-primary-100 transition-colors"
                        >
                          <Icon size={13} className="shrink-0 text-primary-500" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{f.label}</div>
                            <div className="text-maccabi-muted text-[11px]">{typeLabel}{f.fileSize ? ` · ${f.fileSize}` : ""}</div>
                          </div>
                          <Download size={12} className="shrink-0 opacity-50" />
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pt-3 border-t border-maccabi-border flex items-center gap-2 text-xs text-maccabi-subtle">
                    <FileText size={13} />
                    <span>יתעדכן לפני המפגש</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-maccabi-subtle text-center pb-2 leading-relaxed">
        חומרים נוספים יועלו לאורך התוכנית. לשאלות, פנו לצוות ההדרכה.
      </p>
    </div>
  );
}
