import { Session } from "@/types";

export const sessions: Session[] = [
  {
    id: 1,
    title: "ניהול בעידן האג'נטי",
    subtitle: "מנהיגות בעידן הבינה המלאכותית",
    format: "frontal",
    duration: "יום מלא",
    participants: "כ-100 משתתפים",
    date: "15.01.2025",
    status: "current",
    location: "מרכז הכשרה מכבי, תל אביב",
    description:
      "מפגש הפתיחה של תוכנית מנהיגות בעידן הבינה המלאכותית. המפגש עוסק בהבנת ה-AI כהפרעה אסטרטגית, בשינויים הנדרשים בתפיסת התפקיד הניהולי במכבי, ובפיתוח מודעות אישית לחיזוק כישורים בעידן האג'נטי.",
    agenda: [
      {
        time: "09:00–09:30",
        title: "פתיחה והצגת מבנה ומטרות התוכנית",
        description: "משחק פתיחה: מכירה פומבית — הצגת מטרות התוכנית, מבנה היום וציפיות הדדיות",
        facilitator: "ניל\"י גולדפיין — NGG",
      },
      {
        time: "09:30–10:30",
        title: "AI DISRUPTION — עולם העבודה החדש",
        description:
          "הרצאה: השינויים בעולם העבודה בעידן ה-AI ומשמעויותיהם הניהוליות. שאלון אינטראקטיבי על מיומנויות ותפקיד המנהל בעידן ה-AI.",
        facilitator: "מנחה התוכנית",
      },
      {
        time: "10:30–10:45",
        title: "הפסקה",
        description: "",
      },
      {
        time: "10:45–11:45",
        title: "יכולות ה-Copilot בעבודה הניהולית",
        description: "הרצאת מיקרוסופט — הצגת יכולות Copilot בעבודה הניהולית היומיומית.",
        facilitator: "נציג מיקרוסופט",
      },
      {
        time: "11:45–13:00",
        title: "התנסות ניהולית — עתיד קרוב",
        description:
          "סימולציה של ישיבת צוות ניהולית. בחלוקה לקבוצות, המשתתפים ידמו ישיבת צוות המנתחת תהליכי עבודה, תעדוף משימות וקבלת החלטות בסביבה המשלבת סוכני AI כמכפילי כוח ניהוליים. שילוב התנסות ב-Copilot לניתוח מידע, סיכום תובנות וגיבוש המלצות.",
        facilitator: "מנחה התוכנית",
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
          "זיהוי הזדמנויות לשילוב Copilot בעבודה הניהולית. חשיבה אישית על 3×3: קבלת החלטות, ניהול אנשים, ניהול תהליכים — מה השתנה, מה AI יכול לייעל, ומה נשאר אנושי.",
        facilitator: "מנחה התוכנית",
      },
      {
        time: "14:30–15:00",
        title: "סיכום",
        description: "סבב סיכום, הצגת מיני-סייט, סיכום תובנות מרכזיות.",
        facilitator: "מנחה התוכנית",
      },
    ],
    digitalTools: [
      {
        name: "Microsoft Copilot",
        description:
          "כלי הבינה המלאכותית של מיקרוסופט לעבודה ניהולית יומיומית — ניתוח נתונים, סיכום, קבלת החלטות והפקת תובנות. ישמש במהלך הסימולציה.",
        icon: "cpu",
      },
      {
        name: "AI Lead Agent",
        description:
          "סוכן AI אישי לתרגול עצמאי לאורך התוכנית — זמין לתמיכה, שאלות והעמקה בין המפגשים.",
        icon: "bot",
      },
      {
        name: "מיני-סייט התוכנית",
        description:
          "פלטפורמה דיגיטלית מלווה לתוכנית — חומרי לימוד, משימות, תובנות וחומרי הכנה לכל מפגש.",
        icon: "layout",
      },
    ],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 2,
    title: "כישורי מנהיגות בעידן ה-AI",
    subtitle: "פיתוח מודעות וזהות מנהיגותית",
    format: "frontal",
    duration: "יום מלא",
    participants: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 3,
    title: "כלי AI לעבודה ניהולית",
    subtitle: "כלי בינה מלאכותית ושימושים מרכזיים בתהליכי עבודה",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 4,
    title: "מיישמים AI בשטח",
    subtitle: "יישום בינה מלאכותית לחיזוק ביצועים ארגוניים",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 5,
    title: "מובילים הטמעה",
    subtitle: "ניהול שינוי והטמעת בינה מלאכותית במכבי",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 6,
    title: "מפגש 6",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 7,
    title: "מפגש 7",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 8,
    title: "מפגש 8",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
  },
  {
    id: 9,
    title: "מפגש 9",
    subtitle: "",
    format: "frontal",
    duration: "",
    date: "",
    status: "open",
    description: "",
    agenda: [],
    digitalTools: [],
    homework: "",
    nextSessionPrep: "",
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
