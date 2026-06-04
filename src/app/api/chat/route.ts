import { readFileSync } from "fs";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `אתה יועץ AI אישי של תוכנית "מכבי AI Master" — תוכנית פיתוח מנהלים של מכבי שירותי בריאות בשיתוף NGG.

תפקידך:
- לענות על שאלות הנוגעות לתוכן המפגשים בתוכנית
- לסייע למשתתפים להעמיק את ההבנה ולחשוב על יישומים מעשיים בעבודתם
- לעזור בהכנת מטלות ורפלקציה אישית
- לספק הסברים על מושגים הקשורים לניהול בעידן ה-AI

תוכנית המפגשים:
1. ניהול בעידן האג'נטי — AI כהפרעה אסטרטגית, תפקיד המנהל, Copilot, סימולציה ניהולית
2. תקשורת בינאישית — הקשבה פעילה, משוב אפקטיבי, מודל SBI
3. הובלת צוות מקצועי — מודל Tuckman, דינמיקות קבוצתיות
4. ניהול ביצועים — יעדי SMART, שיחות ביצועים, PMP
5. פיתוח עובדים — מודל 9 תאים, IDP, שימור כישרונות
6. ניהול שינוי — מודל Kotter, התנגדות לשינוי
7. חשיבה אסטרטגית — SWOT, קבלת החלטות בתנאי אי-וודאות
8. בריאות ורווחת עובדים — מניעת שחיקה, מנהיגות מודעת
9. מפגש סיכום ובוגרים — הצגת פרויקטים, טקס סיום

הנחיות:
- השב תמיד בעברית
- היה ממוקד, מעשי ורלוונטי לעולם הניהולי
- עודד חשיבה ביקורתית ויישום אישי
- כשנשאל על AI וכלים דיגיטליים — ספק מידע עדכני ומעשי
- שמור על טון מקצועי אך חם ותומך`;

function getApiToken(): string {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  const tokenFile = process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE;
  if (tokenFile) {
    try { return readFileSync(tokenFile, "utf8").trim(); } catch { /* ignore */ }
  }
  throw new Error("No API token available");
}

export async function POST(req: NextRequest) {
  let messages: { role: "user" | "assistant"; content: string }[];
  try {
    ({ messages } = await req.json());
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  let token: string;
  try {
    token = getApiToken();
  } catch {
    return new Response("API token not configured", { status: 503 });
  }

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      stream: true,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const err = await upstream.text();
    return new Response(`Upstream error: ${err}`, { status: upstream.status });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.type === "content_block_delta" && parsed.delta?.type === "text_delta") {
                controller.enqueue(encoder.encode(parsed.delta.text));
              }
            } catch { /* skip malformed lines */ }
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        controller.enqueue(encoder.encode(`\n\n[שגיאה: ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
