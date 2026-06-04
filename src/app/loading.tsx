export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#04081f" }}
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
        {/* Outer slow ring */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "spin-slow 3s linear infinite" }}
        >
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e6fe0" />
              <stop offset="100%" stopColor="#73d9f0" />
            </linearGradient>
          </defs>
          <circle
            cx="110" cy="110" r="96"
            fill="none"
            stroke="url(#g1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="230 374"
          />
        </svg>

        {/* Inner fast ring */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "spin-fast 1.8s linear infinite reverse", width: 160, height: 160, top: 30, left: 30 }}
        >
          <defs>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#73d9f0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e6fe0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle
            cx="110" cy="110" r="80"
            fill="none"
            stroke="url(#g2)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="120 385"
          />
        </svg>

        {/* Logo in center */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image003.png"
          alt="Maccabi AI Master"
          style={{ width: 100, height: 100, objectFit: "contain", position: "relative", zIndex: 10 }}
        />

        {/* Pixel dots */}
        <svg
          className="absolute"
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          style={{ inset: 0, width: "100%", height: "100%", animation: "pulse-dots 2s ease-in-out infinite" }}
        >
          <rect x="18" y="100" width="11" height="11" rx="2" fill="#73d9f0" />
          <rect x="36" y="118" width="8"  height="8"  rx="2" fill="#73d9f0" opacity="0.7" />
          <rect x="28" y="84"  width="6"  height="6"  rx="1" fill="#73d9f0" opacity="0.5" />
        </svg>
      </div>

      {/* Text */}
      <div className="mt-8 text-center" style={{ animation: "fade-in-text 1s ease-out both" }}>
        <p
          className="font-black tracking-widest"
          style={{ color: "#73d9f0", fontSize: 13, letterSpacing: "0.25em" }}
        >
          MACCABI AI MASTER
        </p>
        {/* Loading dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 5, height: 5,
                borderRadius: "50%",
                background: "#1e6fe0",
                display: "inline-block",
                animation: `bounce-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow  { to { transform: rotate(360deg); } }
        @keyframes spin-fast  { to { transform: rotate(360deg); } }
        @keyframes pulse-dots {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes fade-in-text {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
