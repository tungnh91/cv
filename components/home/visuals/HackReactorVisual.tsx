import {
  CHART_MONO,
  CHART_SANS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function HackReactorVisual() {
  return (
    <svg viewBox="0 0 320 124" className={EXPERIENCE_VISUAL_CLASS}>
      <text
        x="160"
        y="16"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        Reach & topics covered
      </text>

      <rect x="232" y="12" width="72" height="18" rx="9" fill={VISUAL_VARS.blue} fillOpacity="0.12" />
      <text
        x="268"
        y="24"
        textAnchor="middle"
        fontFamily={CHART_MONO}
        fontSize="9"
        fill={VISUAL_VARS.blue}
      >
        2–3× / wk
      </text>

      <circle cx="70" cy="72" r="36" fill={VISUAL_VARS.blue} fillOpacity="0.1" stroke={VISUAL_VARS.blue} strokeOpacity="0.6" />
      <circle
        cx="70"
        cy="72"
        r="48"
        fill="none"
        stroke={VISUAL_VARS.blue}
        strokeOpacity="0.26"
        strokeDasharray="3 6"
      />
      <text
        x="70"
        y="68"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="22"
        fontWeight="600"
        fill={VISUAL_VARS.blue}
      >
        80
      </text>
      <text x="70" y="86" textAnchor="middle" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        students
      </text>

      <path d="M112 64 C 132 48 148 42 168 42" fill="none" stroke={VISUAL_VARS.blue} strokeOpacity="0.64" strokeWidth="1.4" />
      <path d="M112 78 C 136 82 154 92 180 94" fill="none" stroke={VISUAL_VARS.teal} strokeOpacity="0.58" strokeWidth="1.3" />
      <path d="M168 42 C 196 34 224 34 246 42" fill="none" stroke={VISUAL_VARS.purple} strokeOpacity="0.52" strokeWidth="1.1" />
      <path d="M192 94 C 224 90 246 84 270 78" fill="none" stroke={VISUAL_VARS.blue} strokeOpacity="0.42" strokeWidth="1.1" />

      {[
        { cx: 170, cy: 40, r: 24, label: 'Algorithms', fill: VISUAL_VARS.blue, opacity: 0.22 },
        { cx: 252, cy: 40, r: 17, label: 'DS', fill: VISUAL_VARS.purple, opacity: 0.22 },
        { cx: 190, cy: 92, r: 22, label: 'Async/Auth', fill: VISUAL_VARS.teal, opacity: 0.2 },
        { cx: 278, cy: 82, r: 15, label: 'Cloud', fill: VISUAL_VARS.blue, opacity: 0.16 },
        { cx: 130, cy: 104, r: 11, label: 'Node', fill: VISUAL_VARS.amber, opacity: 0.22 }
      ].map((bubble) => (
        <g key={bubble.label}>
          <circle cx={bubble.cx} cy={bubble.cy} r={bubble.r} fill={bubble.fill} fillOpacity={bubble.opacity} />
          <text
            x={bubble.cx}
            y={bubble.cy + 4}
            textAnchor="middle"
            fontFamily={CHART_SANS}
            fontSize={bubble.label === 'Async/Auth' ? '9' : '10'}
            fill="currentColor"
          >
            {bubble.label}
          </text>
        </g>
      ))}

      {[
        { cx: 146, cy: 24 },
        { cx: 228, cy: 20 },
        { cx: 298, cy: 58 },
        { cx: 122, cy: 38 },
        { cx: 154, cy: 110 }
      ].map((dot, index) => (
        <circle key={index} cx={dot.cx} cy={dot.cy} r="2" fill={VISUAL_VARS.blue} fillOpacity="0.46" />
      ))}
    </svg>
  );
}
