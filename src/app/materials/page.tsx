import Link from "next/link";
import {
  Download,
  FileText,
  ArrowRight,
  Presentation,
  Lock,
} from "lucide-react";

interface Material {
  sessionId: number;
  sessionTitle: string;
  label: string;
  description: string;
  fileName: string | null;
  fileSize: string | null;
  available: boolean;
}

const materials: Material[] = [
  {
    sessionId: 1,
    sessionTitle: "מפגש 1",
    label: "ניהול בעידן האג'נטי",
    description:
      "מצגת המפגש המלאה: מתווה יום ראשון, רקע לסימולציה, תפקידי המשתתפים, שאלות לרפלקציה וסיכום תובנות.",
    fileName: "session-1-agentic-management.pptx",
    fileSize: "20 MB",
    available: true,
  },
  {
    sessionId: 2,
    sessionTitle: "מפגש 2",
    label: "תקשורת בינאישית",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 3,
    sessionTitle: "מפגש 3",
    label: "הובלת צוות מקצועי",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 4,
    sessionTitle: "מפגש 4",
    label: "ניהול ביצועים",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 5,
    sessionTitle: "מפגש 5",
    label: "פיתוח עובדים",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 6,
    sessionTitle: "מפגש 6",
    label: "ניהול שינוי",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 7,
    sessionTitle: "מפגש 7",
    label: "חשיבה אסטרטגית",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 8,
    sessionTitle: "מפגש 8",
    label: "בריאות ורווחת עובדים",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
  {
    sessionId: 9,
    sessionTitle: "מפגש 9",
    label: "מפגש סיכום ובוגרים",
    description: "חומרי המפגש יהיו זמינים לפני מועד המפגש.",
    fileName: null,
    fileSize: null,
    available: false,
  },
];

// Ofek categorical colours — one per session, fixed order
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
                {m.available && m.fileName ? (
                  <div className="pt-3 border-t border-maccabi-border flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-maccabi-muted">
                      <Presentation size={14} className="text-primary-500 shrink-0" />
                      <span>מצגת PowerPoint · {m.fileSize}</span>
                    </div>
                    <a
                      href={`/materials/${m.fileName}`}
                      download
                      className="btn-primary !min-h-[34px] !py-1.5 !px-3 !text-xs flex items-center gap-1.5"
                    >
                      <Download size={12} />
                      הורדה
                    </a>
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
