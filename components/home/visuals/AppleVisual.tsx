import {
  CHART_MONO,
  CHART_SANS,
  COLORS,
  EXPERIENCE_VISUAL_CLASS
} from './constants';

export default function AppleVisual() {
  const topRow = [
    { x: 0, width: 70, label: 'iOS', fill: COLORS.grayLight, opacity: 0.35 },
    { x: 80, width: 74, label: 'macOS', fill: COLORS.grayLight, opacity: 0.3 },
    { x: 164, width: 80, label: 'watchOS', fill: COLORS.grayLight, opacity: 0.28 },
    { x: 254, width: 60, label: 'tvOS', fill: COLORS.grayLight, opacity: 0.28 }
  ];

  const bottomRow = [
    { x: 40, width: 86, label: 'Networking FW' },
    { x: 136, width: 80, label: 'Kernel Analysis' },
    { x: 226, width: 72, label: 'HW Repair' }
  ];

  return (
    <svg viewBox="0 0 320 110" className={EXPERIENCE_VISUAL_CLASS}>
      <text
        x="160"
        y="16"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        Platforms covered
      </text>

      {topRow.map((pill) => (
        <g key={pill.label}>
          <rect x={pill.x} y="26" width={pill.width} height="26" rx="13" fill={pill.fill} fillOpacity={pill.opacity} />
          <text
            x={pill.x + pill.width / 2}
            y="42"
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="10"
            fill="currentColor"
          >
            {pill.label}
          </text>
        </g>
      ))}

      {bottomRow.map((pill) => (
        <g key={pill.label}>
          <rect x={pill.x} y="62" width={pill.width} height="26" rx="13" fill={COLORS.gray} fillOpacity="0.2" />
          <text
            x={pill.x + pill.width / 2}
            y="78"
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="10"
            fill="currentColor"
          >
            {pill.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
