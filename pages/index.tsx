import { Suspense, useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display } from '@next/font/google';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import GravityField from '../components/GravityField';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: '400'
});

const links = [
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/timothytungnguyen',
    icon: 'profile'
  },
  {
    title: 'Résumé',
    link: 'https://docs.google.com/document/d/1uAT9FdEBqnd4Eil6w2MVxv2NrF6hjOeYRSZEO6y6Tw0/edit?usp=sharing',
    icon: 'doc'
  }
];

const experienceRows = [
  {
    company: 'Zillow',
    role: 'Principal SWE',
    years: '2024—now',
    summary: 'Leading AI tooling, observability, and backend modernization.',
    tags: ['AI/ML', 'Observability', 'Data Pipelines', 'Mentorship'],
    visualization: 'zillow'
  },
  {
    company: 'Red Oak AI',
    role: 'Cofounder & CTO',
    years: '2024',
    summary:
      'Built a council-of-models system to cross-check facts and reduce hallucinations.',
    tags: ['Multi-Agent', 'LLM', 'Adversarial AI', 'Founder'],
    visualization: 'redoak'
  },
  {
    company: 'Rivian',
    role: 'Staff SWE',
    years: '2020—2024',
    summary:
      'Led ML infra and shipped a vehicle guide that cut support lookup from ~10 min to 5 sec.',
    tags: ['RAG', 'ML Infra', 'Kafka', 'Spark', 'AWS'],
    visualization: 'rivian'
  },
  {
    company: 'Facebook',
    role: 'Sr. SWE',
    years: '2018—2020',
    summary:
      'Built data-center systems and ML signals for component longevity at scale.',
    tags: ['ML', 'Data Center', 'ETL', 'Predictive Infra'],
    visualization: 'facebook'
  },
  {
    company: 'Mercedes-Benz R&D',
    role: 'Software Engineer',
    years: '2017—2018',
    summary:
      'Shipped NLP voice backends for production cars and improved response latency.',
    tags: ['NLP', 'Voice UI', 'Go', 'Node.js', 'GCP'],
    visualization: 'mercedes'
  },
  {
    company: 'Hack Reactor',
    role: 'Hacker in Residence',
    years: '2017',
    summary:
      'Taught 80-student cohorts algorithms, Node, async workflows, and cloud deployment.',
    tags: ['Teaching', 'Algorithms', 'Node.js', 'Interviews'],
    visualization: 'hackreactor'
  },
  {
    company: 'Apple',
    role: 'Technical Staff',
    years: '2014—2016',
    summary:
      'Worked across Apple platforms, kernel analysis, hardware diagnosis, and repair.',
    tags: ['iOS', 'macOS', 'Kernel', 'Hardware', 'Firmware'],
    visualization: 'apple'
  },
  {
    company: 'Noble House',
    role: 'SEO Intern',
    years: '2014—2015',
    summary:
      'Improved search performance through testing, analytics, and CTR optimization.',
    tags: ['SEO', 'A/B Testing', 'Analytics', 'CTR Optimization'],
    visualization: 'noblehouse'
  }
] as const;

const CHART_SANS = 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
const CHART_MONO =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace';

const COLORS = {
  amber: '#EF9F27',
  amberDeep: '#BA7517',
  purple: '#534AB7',
  purpleLight: '#AFA9EC',
  teal: '#1D9E75',
  tealLight: '#5DCAA5',
  blue: '#378ADD',
  blueLight: '#B5D4F4',
  red: '#E24B4A',
  green: '#639922',
  gray: '#888780',
  grayLight: '#D3D1C7'
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Suspense fallback={null}>
      <Container description="Tim Nguyen — principal engineer and builder across AI, ML infrastructure, automotive software, and developer platforms.">
        <section className="mx-auto flex max-w-3xl flex-col gap-10 pb-20">
          <div
            ref={heroRef}
            className="relative isolate overflow-hidden rounded-[2rem] border border-gray-200 shadow-[0_36px_120px_-72px_rgba(18,114,76,0.45)] dark:border-gray-800 dark:shadow-[0_36px_120px_-72px_rgba(62,207,142,0.3)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-white/80 backdrop-blur dark:bg-gray-800/70" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,117,23,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(239,166,46,0.12),transparent_38%)]" />
            <GravityField containerRef={heroRef} className="z-10" />

            <div className="relative z-20 p-8 sm:p-10">
              <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    Tim Nguyen
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    I design and build highly scalable, performant, and reliable
                    software products.
                  </p>
                </div>

                <div className="relative w-[104px] sm:w-[176px]">
                  <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl dark:bg-brand-500/25" />
                  <div className="relative rounded-full border border-brand-200 bg-brand-50/70 p-1.5 shadow-lg shadow-brand-500/10 dark:border-brand-800 dark:bg-gray-900">
                    <Image
                      alt="Tim Nguyen"
                      height={176}
                      width={176}
                      src="/avatar.jpeg"
                      sizes="30vw"
                      priority
                      className="rounded-full border border-white/80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent dark:via-brand-800" />
          </div>

          <div className="mx-auto grid w-full max-w-2xl gap-5 md:grid-cols-2">
            {links.map(({ title, link, icon }) => (
              <BlogPostCard key={title} title={title} link={link} icon={icon} />
            ))}
          </div>
        </section>

        <VisualExperienceSection />
      </Container>
    </Suspense>
  );
}

function VisualExperienceSection() {
  return (
    <section className="mx-auto w-full max-w-5xl pb-24 sm:pb-28">
      <div className="overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/72 backdrop-blur dark:border-gray-800 dark:bg-[#111410]/72">
        <div className="px-6 py-5 sm:px-8 sm:py-6 lg:px-10">
          <SectionLabel>Professional experience</SectionLabel>
        </div>

        <div className="border-t border-gray-200/80 dark:border-gray-800" />

        <div className="px-6 sm:px-8 lg:px-10">
          {experienceRows.map((item, index) => (
            <ExperienceRow
              key={`${item.company}-${item.years}`}
              item={item}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
}

function ExperienceRow({
  item,
  isFirst
}: {
  item: (typeof experienceRows)[number];
  isFirst: boolean;
}) {
  return (
    <div
      className={`grid gap-6 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:gap-8 ${
        !isFirst ? 'border-t border-gray-200/80 dark:border-gray-800' : ''
      }`}
    >
      <div className="min-w-0 md:border-r md:border-gray-200/80 md:pr-8 dark:md:border-gray-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <h3
              className={`${displayFont.className} text-3xl leading-none text-gray-900 dark:text-white sm:text-[2.1rem]`}
            >
              {item.company}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:ml-auto sm:justify-end">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              {item.role}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {item.years}
            </span>
          </div>
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {item.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </div>

      <div className="flex items-center md:pl-2">
        <ExperienceVisual visualization={item.visualization} />
      </div>
    </div>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-[11px] text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
      {children}
    </span>
  );
}

function ExperienceVisual({
  visualization
}: {
  visualization: (typeof experienceRows)[number]['visualization'];
}) {
  switch (visualization) {
    case 'zillow':
      return <ZillowVisual />;
    case 'redoak':
      return <RedOakVisual />;
    case 'rivian':
      return <RivianVisual />;
    case 'facebook':
      return <FacebookVisual />;
    case 'mercedes':
      return <MercedesVisual />;
    case 'hackreactor':
      return <HackReactorVisual />;
    case 'apple':
      return <AppleVisual />;
    case 'noblehouse':
    default:
      return <NobleHouseVisual />;
  }
}

function ZillowVisual() {
  const rows = [
    { label: 'AI Tooling', width: 160, suffix: 'Lead', opacity: 0.62 },
    { label: 'Observability', width: 130, suffix: 'Built', opacity: 0.48 },
    { label: 'Data Pipelines', width: 100, suffix: 'Designed', opacity: 0.38 },
    { label: 'Mentorship', width: 80, suffix: 'Program Lead', opacity: 0.32 }
  ];

  return (
    <svg viewBox="0 0 320 112" className="w-full text-gray-500 dark:text-gray-400">
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
            <rect x="96" y={y - 10} width="160" height="11" rx="3" fill="currentColor" opacity="0.12" />
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

function RedOakVisual() {
  const claims = [
    { x: 4, y: 34, label: 'claim A' },
    { x: 10, y: 61, label: 'claim B' },
    { x: 6, y: 88, label: 'claim C' }
  ];

  const models = [
    { cx: 92, cy: 34, label: 'M1', stroke: COLORS.purpleLight },
    { cx: 228, cy: 34, label: 'M2', stroke: COLORS.blueLight },
    { cx: 92, cy: 106, label: 'M3', stroke: COLORS.tealLight },
    { cx: 228, cy: 106, label: 'M4', stroke: COLORS.purpleLight }
  ];

  return (
    <svg viewBox="0 0 320 132" className="w-full text-gray-500 dark:text-gray-400">
      <defs>
        <radialGradient id="redoak-core" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={COLORS.purpleLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.02" />
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

      <ellipse cx="160" cy="70" rx="86" ry="34" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.12" />
      <ellipse cx="160" cy="70" rx="58" ry="22" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.1" strokeDasharray="4 5" />

      {claims.map((claim, index) => (
        <g key={claim.label}>
          <rect
            x={claim.x}
            y={claim.y - 10}
            width="54"
            height="18"
            rx="9"
            fill={COLORS.purple}
            fillOpacity="0.08"
            stroke={COLORS.purpleLight}
            strokeOpacity="0.16"
          />
          <text
            x={claim.x + 27}
            y={claim.y + 2}
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="8.5"
            fill="#ddd9ff"
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
            stroke={COLORS.purpleLight}
            strokeOpacity="0.32"
            strokeWidth="1.1"
          />
        </g>
      ))}

      <path d="M92 34 Q128 48 160 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.78" strokeWidth="1.6" />
      <path d="M228 34 Q194 48 160 70" fill="none" stroke={COLORS.blueLight} strokeOpacity="0.72" strokeWidth="1.6" />
      <path d="M92 106 Q128 92 160 70" fill="none" stroke={COLORS.tealLight} strokeOpacity="0.72" strokeWidth="1.6" />
      <path d="M228 106 Q194 92 160 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.78" strokeWidth="1.6" />

      <circle cx="160" cy="70" r="34" fill="url(#redoak-core)" />
      <circle cx="160" cy="70" r="28" fill={COLORS.purple} fillOpacity="0.1" stroke={COLORS.purple} strokeOpacity="0.24" />
      <circle cx="160" cy="70" r="22" fill={COLORS.purple} fillOpacity="0.18" stroke={COLORS.purpleLight} strokeOpacity="0.4" />
      <text
        x="160"
        y="66"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="10"
        fontWeight="600"
        fill="#f0ecff"
      >
        Consensus
      </text>
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fontFamily={CHART_MONO}
        fontSize="8.5"
        fill="#d8d2ff"
      >
        vote / verify
      </text>

      {models.map((node) => (
        <g key={node.label}>
          <circle cx={node.cx} cy={node.cy} r="15" fill={node.stroke} fillOpacity="0.08" />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            fill={node.stroke}
            fillOpacity="0.18"
            stroke={node.stroke}
            strokeOpacity="0.9"
            strokeWidth="0.9"
          />
          <text
            x={node.cx}
            y={node.cy + 4}
            textAnchor="middle"
            fontFamily={CHART_SANS}
            fontSize="10"
            fill="#f0ecff"
          >
            {node.label}
          </text>
        </g>
      ))}

      {[
        { cx: 126, cy: 52 },
        { cx: 126, cy: 78 },
        { cx: 194, cy: 52 },
        { cx: 194, cy: 88 },
        { cx: 140, cy: 44 },
        { cx: 208, cy: 96 }
      ].map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r="2.2"
          fill={index % 2 === 0 ? COLORS.purpleLight : COLORS.tealLight}
          fillOpacity="0.7"
        />
      ))}

      <path d="M194 70 C 214 70, 230 70, 250 70" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.38" strokeWidth="1.2" />
      <rect x="254" y="44" width="58" height="50" rx="12" fill={COLORS.purple} fillOpacity="0.08" stroke={COLORS.purpleLight} strokeOpacity="0.12" />
      <text x="283" y="57" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill="#d8d2ff">
        ↓ halluc.
      </text>
      <text x="283" y="69" textAnchor="middle" fontFamily={CHART_MONO} fontSize="9" fill="#d8d2ff">
        rate
      </text>
      <rect x="266" y="76" width="34" height="4" rx="2" fill={COLORS.purpleLight} fillOpacity="0.24" />
      <rect x="266" y="83" width="26" height="4" rx="2" fill={COLORS.tealLight} fillOpacity="0.4" />
      <rect x="266" y="90" width="18" height="4" rx="2" fill={COLORS.blueLight} fillOpacity="0.32" />
    </svg>
  );
}

function RivianVisual() {
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

function FacebookVisual() {
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

function MercedesVisual() {
  return (
    <svg viewBox="0 0 320 132" className="w-full text-gray-500 dark:text-gray-400">
      <defs>
        <marker
          id="mercedes-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8" fill={COLORS.tealLight} />
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
            fill={COLORS.tealLight}
            fillOpacity="0.2"
            stroke={COLORS.tealLight}
            strokeOpacity="0.85"
            strokeWidth="0.8"
          />
          <text
            x={node.x + node.width / 2}
            y="45"
            textAnchor="middle"
            fontFamily={CHART_MONO}
            fontSize="10"
            fill="#c9f2e2"
          >
            {node.label}
          </text>
          {index < arr.length - 1 ? (
            <line
              x1={node.x + node.width + 4}
              y1="42"
              x2={arr[index + 1].x - 6}
              y2="42"
              stroke={COLORS.tealLight}
              strokeWidth="0.9"
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
      <rect x="86" y="114" width="64" height="16" rx="8" fill={COLORS.tealLight} fillOpacity="0.85" />

    </svg>
  );
}

function HackReactorVisual() {
  return (
    <svg viewBox="0 0 320 124" className="w-full text-gray-500 dark:text-gray-400">
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

      <rect x="232" y="12" width="72" height="18" rx="9" fill={COLORS.blue} fillOpacity="0.08" />
      <text
        x="268"
        y="24"
        textAnchor="middle"
        fontFamily={CHART_MONO}
        fontSize="9"
        fill={COLORS.blueLight}
      >
        2–3× / wk
      </text>

      <circle cx="70" cy="72" r="36" fill={COLORS.blue} fillOpacity="0.07" stroke={COLORS.blue} strokeOpacity="0.45" />
      <circle
        cx="70"
        cy="72"
        r="48"
        fill="none"
        stroke={COLORS.blue}
        strokeOpacity="0.2"
        strokeDasharray="3 6"
      />
      <text
        x="70"
        y="68"
        textAnchor="middle"
        fontFamily={CHART_SANS}
        fontSize="22"
        fontWeight="600"
        fill="#d8e9ff"
      >
        80
      </text>
      <text x="70" y="86" textAnchor="middle" fontFamily={CHART_SANS} fontSize="10" fill="currentColor">
        students
      </text>

      <path d="M112 64 C 132 48 148 42 168 42" fill="none" stroke={COLORS.blueLight} strokeOpacity="0.55" strokeWidth="1.4" />
      <path d="M112 78 C 136 82 154 92 180 94" fill="none" stroke={COLORS.tealLight} strokeOpacity="0.5" strokeWidth="1.3" />
      <path d="M168 42 C 196 34 224 34 246 42" fill="none" stroke={COLORS.purpleLight} strokeOpacity="0.42" strokeWidth="1.1" />
      <path d="M192 94 C 224 90 246 84 270 78" fill="none" stroke={COLORS.blueLight} strokeOpacity="0.36" strokeWidth="1.1" />

      {[
        { cx: 170, cy: 40, r: 24, label: 'Algorithms', fill: COLORS.blueLight, opacity: 0.3 },
        { cx: 252, cy: 40, r: 17, label: 'DS', fill: COLORS.purpleLight, opacity: 0.3 },
        { cx: 190, cy: 92, r: 22, label: 'Async/Auth', fill: COLORS.tealLight, opacity: 0.26 },
        { cx: 278, cy: 82, r: 15, label: 'Cloud', fill: COLORS.blueLight, opacity: 0.24 },
        { cx: 130, cy: 104, r: 11, label: 'Node', fill: COLORS.amber, opacity: 0.28 }
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
        <circle key={index} cx={dot.cx} cy={dot.cy} r="2" fill={COLORS.blueLight} fillOpacity="0.4" />
      ))}
    </svg>
  );
}

function AppleVisual() {
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
    <svg viewBox="0 0 320 110" className="w-full text-gray-500 dark:text-gray-400">
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

function NobleHouseVisual() {
  return (
    <svg viewBox="0 0 320 110" className="w-full text-gray-500 dark:text-gray-400">
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
        fill={COLORS.green}
        fillOpacity="0.1"
      />
      <polyline
        points="10,90 50,80 90,72 130,60 170,50 210,40 260,28 300,20"
        fill="none"
        stroke={COLORS.green}
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
          fill={COLORS.green}
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

      <text x="288" y="18" fontFamily={CHART_MONO} fontSize="10" fill={COLORS.green}>
        ↑ CTR
      </text>
    </svg>
  );
}

