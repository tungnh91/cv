import {
  CHART_MONO,
  CHART_SANS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function RedOakVisual() {
  const claims = [
    { x: 4, y: 34, label: 'claim A' },
    { x: 10, y: 61, label: 'claim B' },
    { x: 6, y: 88, label: 'claim C' }
  ];

  const models = [
    { cx: 92, cy: 34, label: 'M1', stroke: VISUAL_VARS.purple },
    { cx: 228, cy: 34, label: 'M2', stroke: VISUAL_VARS.blue },
    { cx: 92, cy: 106, label: 'M3', stroke: VISUAL_VARS.teal },
    { cx: 228, cy: 106, label: 'M4', stroke: VISUAL_VARS.purple }
  ];

  return (
    <svg viewBox="0 0 320 132" className={EXPERIENCE_VISUAL_CLASS}>
      <defs>
        <radialGradient id="redoak-core" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={VISUAL_VARS.purple} stopOpacity="0.3" />
          <stop offset="100%" stopColor={VISUAL_VARS.purple} stopOpacity="0.02" />
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

      <ellipse cx="160" cy="70" rx="86" ry="34" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.16" />
      <ellipse cx="160" cy="70" rx="58" ry="22" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.14" strokeDasharray="4 5" />

      {claims.map((claim, index) => (
        <g key={claim.label}>
          <rect
            x={claim.x}
            y={claim.y - 10}
            width="54"
            height="18"
            rx="9"
            fill={VISUAL_VARS.purple}
            fillOpacity="0.08"
            stroke={VISUAL_VARS.purple}
            strokeOpacity="0.24"
          />
          <text
            x={claim.x + 27}
            y={claim.y + 2}
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="8.5"
            fill={VISUAL_VARS.labelOnFillMuted}
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
            stroke={VISUAL_VARS.purple}
            strokeOpacity="0.46"
            strokeWidth="1.1"
          />
        </g>
      ))}

      <path d="M92 34 Q128 48 160 70" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.82" strokeWidth="1.6" />
      <path d="M228 34 Q194 48 160 70" fill="none" stroke={VISUAL_VARS.blue} strokeOpacity="0.78" strokeWidth="1.6" />
      <path d="M92 106 Q128 92 160 70" fill="none" stroke={VISUAL_VARS.teal} strokeOpacity="0.78" strokeWidth="1.6" />
      <path d="M228 106 Q194 92 160 70" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.82" strokeWidth="1.6" />

      <circle cx="160" cy="70" r="34" fill="url(#redoak-core)" />
      <circle cx="160" cy="70" r="28" fill={VISUAL_VARS.purple} fillOpacity="0.12" stroke={VISUAL_VARS.purple} strokeOpacity="0.32" />
      <circle cx="160" cy="70" r="22" fill={VISUAL_VARS.purple} fillOpacity="0.22" stroke={VISUAL_VARS.purple} strokeOpacity="0.48" />
      <text
        x="160"
        y="66"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fontWeight="600"
        fill={VISUAL_VARS.labelOnFill}
      >
        Consensus
      </text>
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fontFamily={CHART_MONO}
        fontSize="8.5"
        fill={VISUAL_VARS.labelOnFillMuted}
      >
        vote / verify
      </text>

      {models.map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="15" fill={node.stroke} fillOpacity="0.12" />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            fill={node.stroke}
            fillOpacity="0.22"
            stroke={node.stroke}
            strokeOpacity="0.92"
            strokeWidth="0.9"
          />
          <text
            x={node.cx}
            y={node.cy + 4}
            textAnchor="middle"
            fontFamily={CHART_SANS}
            fontSize="10"
            fill={VISUAL_VARS.labelOnFill}
          >
            {node.label}
          </text>
        </g>
      ))}

      {[
        { cx: 126, cy: 52, fill: VISUAL_VARS.purple },
        { cx: 126, cy: 78, fill: VISUAL_VARS.teal },
        { cx: 194, cy: 52, fill: VISUAL_VARS.blue },
        { cx: 194, cy: 88, fill: VISUAL_VARS.teal },
        { cx: 140, cy: 44, fill: VISUAL_VARS.purple },
        { cx: 208, cy: 96, fill: VISUAL_VARS.blue }
      ].map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r="2.2"
          fill={dot.fill}
          fillOpacity="0.82"
        />
      ))}

      <path d="M194 70 C 214 70, 230 70, 250 70" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.48" strokeWidth="1.2" />
      <rect x="254" y="44" width="58" height="50" rx="12" fill={VISUAL_VARS.purple} fillOpacity="0.08" stroke={VISUAL_VARS.purple} strokeOpacity="0.18" />
      <text x="283" y="57" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill={VISUAL_VARS.labelOnFillMuted}>
        ↓ halluc.
      </text>
      <text x="283" y="69" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill={VISUAL_VARS.labelOnFillMuted}>
        rate
      </text>
      <rect x="266" y="76" width="34" height="4" rx="2" fill={VISUAL_VARS.purple} fillOpacity="0.36" />
      <rect x="266" y="83" width="26" height="4" rx="2" fill={VISUAL_VARS.teal} fillOpacity="0.56" />
      <rect x="266" y="90" width="18" height="4" rx="2" fill={VISUAL_VARS.blue} fillOpacity="0.46" />
    </svg>
  );
}
