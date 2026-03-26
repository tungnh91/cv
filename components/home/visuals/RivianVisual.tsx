import {
  CHART_MONO,
  CHART_SANS,
  COLORS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function RivianVisual() {
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
      <rect x="56" y="68" width="9" height="18" rx="3" fill={VISUAL_VARS.teal} fillOpacity="0.82" />
      <text x="72" y="80" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
        5 sec
      </text>

      <rect x="204" y="64" width="104" height="34" rx="8" fill={VISUAL_VARS.teal} fillOpacity="0.12" />
      <text
        x="256"
        y="81"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="18"
        fontWeight="600"
        fill={VISUAL_VARS.teal}
      >
        120×
      </text>
      <text
        x="256"
        y="93"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fill={VISUAL_VARS.teal}
      >
        faster
      </text>

      <text x="0" y="112" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        Stack: Python · TS · React · AWS · Kafka · Spark · Terraform
      </text>
    </svg>
  );
}
