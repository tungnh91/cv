import {
  CHART_MONO,
  CHART_SANS,
  COLORS,
  EXPERIENCE_VISUAL_CLASS
} from './constants';

export default function ZillowVisual() {
  const rows = [
    { label: 'AI Tooling', width: 160, suffix: 'Lead', opacity: 0.62 },
    { label: 'Observability', width: 130, suffix: 'Built', opacity: 0.48 },
    { label: 'Data Pipelines', width: 100, suffix: 'Designed', opacity: 0.38 },
    { label: 'Mentorship', width: 80, suffix: 'Program Lead', opacity: 0.32 }
  ];

  return (
    <svg viewBox="0 0 320 112" className={EXPERIENCE_VISUAL_CLASS}>
      <text
        x="0"
        y="16"
        fontFamily={CHART_SANS}
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        Key focus areas
      </text>

      {rows.map((row, index) => {
        const y = 36 + index * 22;

        return (
          <g key={row.label}>
            <text
              x="0"
              y={y}
              fontFamily={CHART_MONO}
              fontSize="11"
              fill="currentColor"
            >
              {row.label}
            </text>
            <rect
              x="96"
              y={y - 10}
              width="160"
              height="11"
              rx="3"
              fill="currentColor"
              opacity="0.12"
            />
            <rect
              x="96"
              y={y - 10}
              width={row.width}
              height="11"
              rx="3"
              fill={COLORS.amberDeep}
              opacity={row.opacity}
            />
            <text
              x={96 + row.width + 8}
              y={y}
              fontFamily={CHART_SANS}
              fontSize="10"
              fill="currentColor"
            >
              {row.suffix}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
