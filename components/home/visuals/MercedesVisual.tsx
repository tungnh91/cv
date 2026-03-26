import {
  CHART_MONO,
  CHART_SANS,
  COLORS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function MercedesVisual() {
  return (
    <svg viewBox="0 0 320 132" className={EXPERIENCE_VISUAL_CLASS}>
      <defs>
        <marker
          id="mercedes-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8" fill={VISUAL_VARS.teal} />
        </marker>
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
        Voice pipeline — response time improvement
      </text>

      <text x="0" y="48" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        Speech
      </text>

      {[
        { x: 46, label: 'In', width: 32 },
        { x: 104, label: 'NLP', width: 44 },
        { x: 172, label: 'Intent', width: 50 },
        { x: 246, label: 'Reply', width: 44 }
      ].map((node, index, arr) => (
        <g key={node.label}>
          <rect
            x={node.x}
            y="32"
            width={node.width}
            height="20"
            rx="4"
            fill={VISUAL_VARS.teal}
            fillOpacity="0.14"
            stroke={VISUAL_VARS.teal}
            strokeOpacity="0.92"
            strokeWidth="0.9"
          />
          <text
            x={node.x + node.width / 2}
            y="45"
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="10"
            fill={VISUAL_VARS.labelOnFill}
          >
            {node.label}
          </text>
          {index < arr.length - 1 ? (
            <line
              x1={node.x + node.width + 4}
              y1="42"
              x2={arr[index + 1].x - 6}
              y2="42"
              stroke={VISUAL_VARS.teal}
              strokeOpacity="0.9"
              strokeWidth="1"
              markerEnd="url(#mercedes-arrow)"
            />
          ) : null}
        </g>
      ))}

      <text x="0" y="82" fontFamily={CHART_SANS} fontSize="10" fontWeight="600" fill="currentColor">
        Response latency
      </text>

      <text x="0" y="101" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
        Before
      </text>
      <rect x="86" y="90" width="176" height="16" rx="8" fill="currentColor" opacity="0.08" />
      <rect x="86" y="90" width="176" height="16" rx="8" fill={COLORS.red} fillOpacity="0.5" />

      <text x="0" y="125" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
        After
      </text>
      <rect x="86" y="114" width="176" height="16" rx="8" fill="currentColor" opacity="0.08" />
      <rect x="86" y="114" width="64" height="16" rx="8" fill={VISUAL_VARS.teal} fillOpacity="0.88" />
    </svg>
  );
}
