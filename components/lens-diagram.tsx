/**
 * Ядро litcore — линза. Слева: ручной хаос (серые расфокусированные лучи).
 * По центру: стекло-линза (ядро). Справа: сфокусированный результат (электрик-луч).
 */
export function LensDiagram({ className }: { className?: string }) {
  const chaosLines = Array.from({ length: 11 }, (_, i) => {
    const y = 40 + i * 34
    const jitter = (i % 3) - 1
    return { y, jitter }
  })
  const focusLines = Array.from({ length: 7 }, (_, i) => 168 + i * 12)

  return (
    <svg
      viewBox="0 0 900 420"
      className={className}
      role="img"
      aria-label="Диаграмма ядра litcore: хаос заявок на входе фокусируется линзой в результат на выходе"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lensGlass" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#eef1f6" />
          <stop offset="100%" stopColor="#cfd6e0" />
        </radialGradient>
        <linearGradient id="focusBeam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2333e0" />
          <stop offset="100%" stopColor="#39d5e8" />
        </linearGradient>
        <filter id="beamGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ВХОД — ручной хаос */}
      <g stroke="#9aa2ae" strokeWidth="1" strokeDasharray="5 6" opacity="0.7">
        {chaosLines.map((l, i) => (
          <path
            key={i}
            data-flow
            d={`M0 ${l.y + l.jitter * 10} Q 220 ${l.y - l.jitter * 30} 405 210`}
            fill="none"
            style={{ animation: `dash-flow ${5 + (i % 4)}s linear infinite` }}
          />
        ))}
      </g>

      {/* ЛИНЗА — ядро */}
      <g>
        <circle
          cx="450"
          cy="210"
          r="86"
          fill="url(#lensGlass)"
          stroke="#0e1116"
          strokeWidth="1.5"
        />
        <circle
          cx="450"
          cy="210"
          r="86"
          fill="none"
          stroke="#2333e0"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <circle
          data-beam
          cx="450"
          cy="210"
          r="52"
          fill="none"
          stroke="#2333e0"
          strokeWidth="1.5"
          style={{ animation: 'pulse-core 4s ease-in-out infinite', transformOrigin: '450px 210px' }}
        />
        <circle cx="450" cy="210" r="6" fill="#2333e0" />
        {/* блик стекла */}
        <ellipse cx="424" cy="182" rx="26" ry="16" fill="#ffffff" opacity="0.7" />
      </g>

      {/* ВЫХОД — сфокусированный результат */}
      <g filter="url(#beamGlow)">
        {focusLines.map((y, i) => (
          <line
            key={i}
            x1="536"
            y1="210"
            x2="900"
            y2={y}
            stroke="url(#focusBeam)"
            strokeWidth={i === 3 ? 3 : 1.3}
            opacity={i === 3 ? 1 : 0.55}
          />
        ))}
      </g>
    </svg>
  )
}
