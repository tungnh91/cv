import { CHART_MONO, CHART_SANS, COLORS } from './constants';

export default function RedOakVisual() {
  const claims = [
    { x: 4, y: 34, label: 'claim A' },
    { x: 10, y: 61, label: 'claim B' },
    { x: 6, y: 88, label: 'claim C' }
  ];

  const models = [
    { cx: 92, cy: 34, label: 'M1', stroke: COLORS.purpleLight },
    { cx: 228, cy: 34, label: 'M2', stroke: COLORS.blueLight },
    { cx: 92, cy: 106, label: 'M3', stroke: COLORS.tealLight },
    { cx: 228, cy: 106, label: 'M4', stroke: COLORS.purpleLight }
  ];

  return (
    <svg viewBox="0 0 320 132" className="w-full text-gray-500 dark:text-gray-400">
      <defs>
        <radialGradient id="redoak-core" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={COLORS.purpleLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.02" />
        </radialGradient>
      </defs>

      <text
        x="160"
        y="16"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        Council of models consensus
      </text>

      <ellipse cx="160" cy="70" rx="86" ry="34" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.12" />
      <ellipse cx="160" cy="70" rx="58" ry="22" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.1" strokeDasharray="4 5" />

      {claims.map((claim, index) => (
        <g key={claim.label}>
          <rect
            x={claim.x}
            y={claim.y - 10}
            width="54"
            height="18"
            rx="9"
            fill={COLORS.purple}
            fillOpacity="0.08"
            stroke={COLORS.purpleLight}
            strokeOpacity="0.16"
          />
          <text
            x={claim.x + 27}
            y={claim.y + 2}
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="8.5"
            fill="#ddd9ff"
          >
            {claim.label}
          </text>
          <path
            d={[
              'M 58 34 C 84 34, 102 40, 126 52',
              'M 64 61 C 88 61, 104 62, 126 68',
              'M 60 88 C 84 88, 102 84, 126 78'
            ][index]}
            fill="none"
            stroke={COLORS.purpleLight}
            strokeOpacity="0.32"
            strokeWidth="1.1"
          />
        </g>
      ))}

      <path d="M92 34 Q128 48 160 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.78" strokeWidth="1.6" />
      <path d="M228 34 Q194 48 160 70" fill="none" stroke={COLORS.blueLight} strokeOpacity="0.72" strokeWidth="1.6" />
      <path d="M92 106 Q128 92 160 70" fill="none" stroke={COLORS.tealLight} strokeOpacity="0.72" strokeWidth="1.6" />
      <path d="M228 106 Q194 92 160 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.78" strokeWidth="1.6" />

      <circle cx="160" cy="70" r="34" fill="url(#redoak-core)" />
      <circle cx="160" cy="70" r="28" fill={COLORS.purple} fillOpacity="0.1" stroke={COLORS.purple} strokeOpacity="0.24" />
      <circle cx="160" cy="70" r="22" fill={COLORS.purple} fillOpacity="0.18" stroke={COLORS.purpleLight} strokeOpacity="0.4" />
      <text
        x="160"
        y="66"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fontWeight="600"
        fill="#f0ecff"
      >
        Consensus
      </text>
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fontFamily={CHART_MONO}
        fontSize="8.5"
        fill="#d8d2ff"
      >
        vote / verify
      </text>

      {models.map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="15" fill={node.stroke} fillOpacity="0.08" />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            fill={node.stroke}
            fillOpacity="0.18"
            stroke={node.stroke}
            strokeOpacity="0.9"
            strokeWidth="0.9"
          />
          <text
            x={node.cx}
            y={node.cy + 4}
            textAnchor="middle"
            fontFamily={CHART_SANS}
            fontSize="10"
            fill="#f0ecff"
          >
            {node.label}
          </text>
        </g>
      ))}

      {[
        { cx: 126, cy: 52 },
        { cx: 126, cy: 78 },
        { cx: 194, cy: 52 },
        { cx: 194, cy: 88 },
        { cx: 140, cy: 44 },
        { cx: 208, cy: 96 }
      ].map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r="2.2"
          fill={index % 2 === 0 ? COLORS.purpleLight : COLORS.tealLight}
          fillOpacity="0.7"
        />
      ))}

      <path d="M194 70 C 214 70, 230 70, 250 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.38" strokeWidth="1.2" />
      <rect x="254" y="44" width="58" height="50" rx="12" fill={COLORS.purple} fillOpacity="0.08" stroke={COLORS.purpleLight} strokeOpacity="0.12" />
      <text x="283" y="57" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill="#d8d2ff">
        ↓ halluc.
      </text>
      <text x="283" y="69" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill="#d8d2ff">
        rate
      </text>
      <rect x="266" y="76" width="34" height="4" rx="2" fill={COLORS.purpleLight} fillOpacity="0.24" />
      <rect x="266" y="83" width="26" height="4" rx="2" fill={COLORS.tealLight} fillOpacity="0.4" />
      <rect x="266" y="90" width="18" height="4" rx="2" fill={COLORS.blueLight} fillOpacity="0.32" />
    </svg>
  );
}
