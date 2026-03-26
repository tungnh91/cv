import { CHART_MONO, CHART_SANS, COLORS } from './constants';

export default function FacebookVisual() {
  return (
    <svg viewBox="0 0 320 120" className="w-full text-gray-500 dark:text-gray-400">
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
        stroke={COLORS.blue}
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
        fill={COLORS.blueLight}
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
        { y: 52, label: 'Server A', width: 72, fill: COLORS.blue, opacity: 0.56 },
        { y: 69, label: 'Server B', width: 50, fill: COLORS.red, opacity: 0.62 },
        { y: 86, label: 'Server C', width: 78, fill: COLORS.tealLight, opacity: 0.62 }
      ].map((bar) => (
        <g key={bar.label}>
          <text x="170" y={bar.y + 2} fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
            {bar.label}
          </text>
          <rect x="218" y={bar.y - 8} width="78" height="10" rx="3" fill={COLORS.blue} fillOpacity="0.18" />
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
