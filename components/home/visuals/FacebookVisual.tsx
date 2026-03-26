import {
  CHART_MONO,
  CHART_SANS,
  COLORS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function FacebookVisual() {
  return (
    <svg viewBox="0 0 320 120" className={EXPERIENCE_VISUAL_CLASS}>
      <text
        x="160"
        y="16"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        Uptime target & ML component longevity
      </text>

      <circle cx="94" cy="74" r="38" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="9" />
      <circle
        cx="94"
        cy="74"
        r="38"
        fill="none"
        stroke={VISUAL_VARS.blue}
        strokeWidth="9"
        strokeLinecap="butt"
        strokeDasharray="236.4 238.8"
        strokeDashoffset="2.4"
        transform="rotate(-90 94 74)"
      />
      <text
        x="94"
        y="70"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="12"
        fontWeight="600"
        fill={VISUAL_VARS.blue}
      >
        99.9999%
      </text>
      <text
        x="94"
        y="88"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fill="currentColor"
      >
        uptime
      </text>

      <text x="170" y="34" fontFamily={CHART_SANS} fontSize="11" fontWeight="600" fill="currentColor">
        Component health
      </text>

      {[
        { y: 52, label: 'Server A', width: 72, fill: VISUAL_VARS.blue, opacity: 0.6 },
        { y: 69, label: 'Server B', width: 50, fill: COLORS.red, opacity: 0.62 },
        { y: 86, label: 'Server C', width: 78, fill: VISUAL_VARS.teal, opacity: 0.66 }
      ].map((bar) => (
        <g key={bar.label}>
          <text x="170" y={bar.y + 2} fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
            {bar.label}
          </text>
          <rect x="218" y={bar.y - 8} width="78" height="10" rx="3" fill={VISUAL_VARS.blue} fillOpacity="0.18" />
          <rect
            x="218"
            y={bar.y - 8}
            width={bar.width}
            height="10"
            rx="3"
            fill={bar.fill}
            fillOpacity={bar.opacity}
          />
        </g>
      ))}

      <text x="170" y="110" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        ML-predicted lifespan per part
      </text>
    </svg>
  );
}
