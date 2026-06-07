import { Session } from "@/types";

export const sessions: Session[] = [
  // ─── מפגש 1 — ניהול בעידן האג'נטי ────────────────────────────────────────
  {
    id: 1,
    title: "ניהול בעידן האג'נטי",
    subtitle: "מנהיגות בעידן הבינה המלאכותית",
    format: "frontal",
    duration: "יום מלא",
    date: "15.01.2026",
    status: "current",
    description:
      "מפגש הפתיחה של תוכנית מנהיגות בעידן הבינה המלאכותית. המפגש עוסק בהבנת ה-AI כהפרעה אסטרטגית, בשינויים הנדרשים בתפיסת התפקיד הניהולי במכבי, ובפיתוח מודעות אישית לחיזוק כישורים בעידן האג'נטי.",
    agenda: [
      {
        time: "09:00–09:15",
        title: "משחק פתיחה — מכירה פומבית",
        description:
          "משחק פתיחה אינטראקטיבי: מכירה פומבית של כישורים ניהוליים. כל משתתף מחליט אילו כישורים \"להשקיע\" ואילו \"להשאיר ל-AI\". לפני תחילת המשחק — התכנסות, היכרות ראשונית, הצגת מטרות התוכנית ומבנה היום.",
        tool: {
          name: "אפליקציית מכירה פומבית",
          description:
            "אפליקציה דיגיטלית לניהול משחק המכירה הפומבית — כל משתתף מגיש את הצעותיו בזמן אמת, רואה את הצעות האחרים ועוקב אחר התוצאות על המסך הגדול.",
          buttonLabel: "כניסה למשחק",
          url: "https://maccabi-ai-auction.vercel.app/join?event=maccabi-2024",
        },
      },
      {
        time: "09:30–10:30",
        title: "AI DISRUPTION — עולם העבודה החדש",
        description:
          "הרצאה: השינויים בעולם העבודה בעידן ה-AI ומשמעויותיהם הניהוליות. שאלון אינטראקטיבי על מיומנויות ותפקיד המנהל בעידן ה-AI.",
      },
      {
        time: "10:30–10:45",
        title: "הפסקה",
        description: "",
      },
      {
        time: "10:45–11:45",
        title: "יכולות ה-Copilot בעבודה הניהולית",
        description:
          "הרצאת מיקרוסופט — הצגת יכולות Copilot בעבודה הניהולית היומיומית: ניתוח נתונים, סיכום ישיבות, הכנת מסמכים וקבלת החלטות.",
      },
      {
        time: "11:45–13:00",
        title: "התנסות ניהולית — עתיד קרוב",
        description:
          "סימולציה של ישיבת צוות ניהולית. בחלוקה לקבוצות, המשתתפים ידמו ישיבת צוות המנתחת תהליכי עבודה, תעדוף משימות וקבלת החלטות בסביבה המשלבת סוכני AI כמכפילי כוח ניהוליים. שילוב Copilot לניתוח מידע, סיכום תובנות וגיבוש המלצות.",
        tool: {
          name: "אפליקציית הסימולציה",
          description:
            "פלטפורמת הסימולציה הניהולית — כל קבוצה נכנסת לסביבת ישיבת הצוות שלה, מקבלת גישה לדוחות ונתונים, ועובדת לצד סוכני AI (Performance ו-Well-being) לגיבוש המלצות מבוססות נתונים.",
          buttonLabel: "כניסה לסימולציה",
          url: "https://hug-my-vision.lovable.app",
        },
      },
      {
        time: "13:00–13:45",
        title: "ארוחת צהריים",
        description: "",
      },
      {
        time: "13:45–14:30",
        title: "רפלקציה וניתוח משמעויות",
        description:
          "זיהוי הזדמנויות לשילוב AI בעבודה הניהולית. דיון מונחה: מה השתנה, מה AI יכול לייעל, ומה נשאר אנושי.",
      },
      {
        time: "14:30–15:00",
        title: "שאלון 3×3 — ניהול בעידן ה-AI",
        description:
          "כל מנהל ממלא שאלון אישי בשלושה ממדים: קבלת החלטות, ניהול אנשים וניהול תהליכים — מה היה פעם, מה השתנה בעידן ה-AI, ומה האחריות שלי כמנהל. התשובות מוצגות בזמן אמת על הלוח המשותף.",
        tool: {
          name: "שאלון 3×3 — ניהול בעידן ה-AI",
          description:
            "שאלון אינטראקטיבי המחולק לשלושה ממדי ניהול (קבלת החלטות, ניהול אנשים, ניהול תהליכים), כל אחד עם שלוש שאלות רפלקציה. התשובות נאספות ומוצגות על לוח משותף בזמן אמת.",
          buttonLabel: "כניסה לשאלון",
          url: "https://ai-reflection-grid.lovable.app",
        },
      },
    ],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },

  // ─── מפגש 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "כישורי מנהיגות בעידן ה-AI",
    subtitle: "פיתוח מודעות וזהות מנהיגותית",
    format: "frontal",
    duration: "",
    date: "12.02.2026",
    status: "locked",
    description: "פיתוח מודעות וזהות מנהיגותית",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "כלי AI לעבודה ניהולית",
    subtitle: "כלי בינה מלאכותית ושימושים מרכזיים בתהליכי עבודה",
    format: "frontal",
    duration: "",
    date: "05.03.2026",
    status: "locked",
    description: "כלי בינה מלאכותית ושימושים מרכזיים בתהליכי עבודה",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 4 ────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "מיישמים AI בשטח",
    subtitle: "יישום בינה מלאכותית לחיזוק ביצועים ארגוניים",
    format: "frontal",
    duration: "",
    date: "02.04.2026",
    status: "locked",
    description: "יישום בינה מלאכותית לחיזוק ביצועים ארגוניים",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 5 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "מובילים הטמעה",
    subtitle: "ניהול שינוי והטמעת בינה מלאכותית במכבי",
    format: "frontal",
    duration: "",
    date: "07.05.2026",
    status: "locked",
    description: "ניהול שינוי והטמעת בינה מלאכותית במכבי",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 6 ────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "למידה מקדימה ליאור פרנקל",
    subtitle: "העמקה ב-AI, ניהול עובדים וקבלת החלטות אפקטיבית עם AI",
    format: "frontal",
    duration: "",
    date: "04.06.2026",
    status: "locked",
    description: "העמקה ב-AI, ניהול עובדים וקבלת החלטות אפקטיבית עם AI",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 7 ────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "מפגש 7",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "02.07.2026",
    status: "locked",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 8 ────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "מפגש 8",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "03.09.2026",
    status: "locked",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
  },

  // ─── מפגש 9 ────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "מפגש 9",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "15.10.2026",
    status: "locked",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
  },
];

export function getSessionById(id: number): Session | undefined {
  return sessions.find((s) => s.id === id);
}

export function getAdjacentSessions(id: number): {
  prev: Session | undefined;
  next: Session | undefined;
} {
  const index = sessions.findIndex((s) => s.id === id);
  return {
    prev: index > 0 ? sessions[index - 1] : undefined,
    next: index < sessions.length - 1 ? sessions[index + 1] : undefined,
  };
}
