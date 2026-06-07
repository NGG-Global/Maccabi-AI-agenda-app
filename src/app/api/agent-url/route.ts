import { NextResponse } from "next/server";

const AGENT_ID = "agent_9101kt6thg56fn4vnkfq3ga8qshw";

export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  // If no API key, return the public URL and let the client try directly
  if (!apiKey) {
    return NextResponse.json({
      url: `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${AGENT_ID}`,
    });
  }

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
      { headers: { "xi-api-key": apiKey }, cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`ElevenLabs responded with ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ url: data.signed_url });
  } catch (err) {
    console.error("Failed to get ElevenLabs signed URL:", err);
    return NextResponse.json(
      { error: "Failed to get signed URL" },
      { status: 500 }
    );
  }
}
