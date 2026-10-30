// Self-made hero illustration: a tour route drawing itself across a contour grid.
const stops = [
  { x: 60, y: 250, n: "01" },
  { x: 170, y: 150, n: "02" },
  { x: 290, y: 205, n: "03" },
  { x: 400, y: 95, n: "04" },
  { x: 520, y: 170, n: "05" },
];

const route = "M60 250 C110 230 130 160 170 150 S250 215 290 205 S360 105 400 95 S490 175 520 170";

export function HeroRoute() {
  return (
    <svg viewBox="0 0 580 320" className="h-auto w-full" role="img" aria-label="Illustration of a tour route connecting five cities">
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="var(--rule-strong)" />
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="580" height="320" rx="24" fill="url(#dots)" opacity="0.7" />

      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M-20 ${280 - i * 55} C120 ${230 - i * 60} 260 ${300 - i * 50} 380 ${220 - i * 58} S560 ${200 - i * 55} 620 ${150 - i * 50}`}
          fill="none"
          stroke="var(--rule)"
          strokeWidth="1.2"
        />
      ))}

      <path d={route} fill="none" stroke="var(--accent)" strokeOpacity="0.18" strokeWidth="12" strokeLinecap="round" />
      <path
        d={route}
        className="draw"
        style={{ ["--len" as string]: 620 }}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {stops.map((s, i) => (
        <g key={s.n} className="rise" style={{ animationDelay: `${0.35 + i * 0.4}s` }}>
          <circle cx={s.x} cy={s.y} r="34" fill="url(#glow)" />
          <circle cx={s.x} cy={s.y} r="9" fill="var(--accent)" className="pulse-ring" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={s.x} cy={s.y} r="9" fill="var(--paper-raised)" stroke="var(--accent)" strokeWidth="3" />
          <text x={s.x} y={s.y - 20} textAnchor="middle" fontSize="12" fontFamily="var(--font-jetbrains)" fill="var(--ink-faint)">
            {s.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
