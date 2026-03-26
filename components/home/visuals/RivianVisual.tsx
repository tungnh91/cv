import { CHART_MONO, CHART_SANS, COLORS } from './constants';

export default function RivianVisual() {
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
        Support lookup time — RAG impact
      </text>

      <text x="0" y="46" fontFamily={CHART_MONO} fontSize="11" fill="currentColor">
        Before
      </text>
      <rect x="56" y="34" width="220" height="18" rx="3" fill={COLORS.red} fillOpacity="0.36" />
      <text x="281" y="46" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
        ~10 min
      </text>

      <text x="0" y="80" fontFamily={CHART_MONO} fontSize="11" fill="currentColor">
        After
      </text>
      <rect x="56" y="68" width="9" height="18" rx="3" fill={COLORS.teal} fillOpacity="0.78" />
      <text x="72" y="80" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
        5 sec
      </text>

      <rect x="204" y="64" width="104" height="34" rx="8" fill={COLORS.teal} fillOpacity="0.1" />
      <text
        x="256"
        y="81"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="18"
        fontWeight="600"
        fill={COLORS.tealLight}
      >
        120×
      </text>
      <text
        x="256"
        y="93"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fill={COLORS.tealLight}
      >
        faster
      </text>

      <text x="0" y="112" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        Stack: Python · TS · React · AWS · Kafka · Spark · Terraform
      </text>
    </svg>
  );
}
