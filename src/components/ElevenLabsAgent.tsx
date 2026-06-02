"use client";

import { useEffect } from "react";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

export default function ElevenLabsAgent() {
  useEffect(() => {
    if (document.getElementById("elevenlabs-widget-script")) return;
    const script = document.createElement("script");
    script.id = "elevenlabs-widget-script";
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!AGENT_ID) {
    return (
      <div className="card p-5 text-center text-sm text-maccabi-muted">
        <p className="font-medium text-maccabi-text mb-1">סוכן AI אישי</p>
        <p>יש להגדיר את משתנה הסביבה{" "}
          <code className="bg-gray-100 px-1 rounded text-xs">NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* @ts-expect-error – custom web component from ElevenLabs */}
      <elevenlabs-convai agent-id={AGENT_ID} />
    </div>
  );
}
