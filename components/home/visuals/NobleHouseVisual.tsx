import {
  CHART_MONO,
  CHART_SANS,
  EXPERIENCE_VISUAL_CLASS,
  VISUAL_VARS
} from './constants';

export default function NobleHouseVisual() {
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
        Organic CTR improvement over time
      </text>

      <polygon
        points="10,90 50,80 90,72 130,60 170,50 210,40 260,28 300,20 300,98 10,98"
        fill={VISUAL_VARS.green}
        fillOpacity="0.1"
      />
      <polyline
        points="10,90 50,80 90,72 130,60 170,50 210,40 260,28 300,20"
        fill="none"
        stroke={VISUAL_VARS.green}
        strokeWidth="1.8"
      />

      {[
        { cx: 10, cy: 90, r: 3 },
        { cx: 90, cy: 72, r: 3 },
        { cx: 170, cy: 50, r: 3 },
        { cx: 260, cy: 28, r: 3 },
        { cx: 300, cy: 20, r: 4 }
      ].map((dot, index) => (
        <circle
          key={`${dot.cx}-${dot.cy}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={VISUAL_VARS.green}
          fillOpacity={index === 4 ? 1 : 0.6}
        />
      ))}

      {[
        { x: 10, label: 'Q1' },
        { x: 90, label: 'Q2' },
        { x: 170, label: 'Q3' },
        { x: 260, label: 'Q4' }
      ].map((tick) => (
        <text key={tick.label} x={tick.x} y="106" fontFamily={CHART_MONO} fontSize="10" fill="currentColor">
          {tick.label}
        </text>
      ))}

      <text x="288" y="18" fontFamily={CHART_MONO} fontSize="10" fill={VISUAL_VARS.green}>
        ↑ CTR
      </text>
    </svg>
  );
}
