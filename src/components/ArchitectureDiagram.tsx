// Plotline architecture diagram. Two inline SVG layouts share the same boxes:
// a wide one (≥1024px) and a tall, stacked one for phones/tablets, so the
// text stays readable at every size. Colors come from the theme tokens via
// Tailwind fill-/stroke- classes. The SVGs are hidden from screen readers;
// the figure carries a full text description instead.

// Type sizes per layout, in SVG units. The wide layout renders at ~1.08× and
// the tall one at ≥1× (it's drawn 262 units wide to match a 320px phone),
// so all text renders at 14px or larger.
const sizes = {
  md: { title: 15, line: 13, titleY: 26, firstLine: 47, step: 18, pad: 16, label: 13, labelStep: 16 },
  lg: { title: 15.5, line: 14.5, titleY: 28, firstLine: 50, step: 20, pad: 14, label: 14, labelStep: 17 },
};
type Size = keyof typeof sizes;

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** One title line, or several if it needs to wrap */
  title: string | string[];
  lines?: string[];
  variant?: "main" | "dashed" | "side";
  size?: Size;
};

function Box({ x, y, w, h, title, lines = [], variant = "main", size = "md" }: BoxProps) {
  const s = sizes[size];
  const side = variant === "side";
  const titles = Array.isArray(title) ? title : [title];
  const linesStart = s.firstLine + (titles.length - 1) * s.step;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        strokeWidth={1.5}
        strokeDasharray={variant === "dashed" ? "6 5" : undefined}
        className={
          side
            ? "fill-tag-bg stroke-tag-bg"
            : variant === "dashed"
              ? "fill-surface stroke-accent"
              : "fill-surface stroke-line"
        }
      />
      {titles.map((t, i) => (
        <text
          key={t}
          x={x + s.pad}
          y={y + s.titleY + i * s.step}
          fontSize={s.title}
          fontWeight={600}
          className={side ? "fill-tag-ink" : "fill-ink"}
        >
          {t}
        </text>
      ))}
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + s.pad}
          y={y + linesStart + i * s.step}
          fontSize={s.line}
          className={side ? "fill-tag-ink" : "fill-muted"}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

/** Inner pill inside the Vercel box for the password-reset route.
 *  The first line is bold. */
function Pill({
  x,
  y,
  w,
  lines,
  size = "md",
}: {
  x: number;
  y: number;
  w: number;
  lines: string[];
  size?: Size;
}) {
  const s = sizes[size];
  const rowH = s.line + 8;
  return (
    <g>
      <rect x={x} y={y} width={w} height={lines.length * rowH + 14} rx={10} className="fill-tag-bg" />
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 12}
          y={y + 7 + s.line + i * rowH}
          fontSize={s.line}
          fontWeight={i === 0 ? 600 : 400}
          className="fill-tag-ink"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ d, id, dashed }: { d: string; id: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth={2}
      strokeDasharray={dashed ? "6 5" : undefined}
      markerEnd={`url(#${id})`}
      className="stroke-accent"
    />
  );
}

function Label({ x, y, lines, size = "md" }: { x: number; y: number; lines: string[]; size?: Size }) {
  const s = sizes[size];
  return (
    <text x={x} y={y} fontSize={s.label} className="fill-muted">
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : s.labelStep}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function ArrowHead({ id }: { id: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX={9}
      refY={5}
      markerWidth={8}
      markerHeight={8}
      orient="auto-start-reverse"
    >
      <path d="M0 0 L10 5 L0 10 z" className="fill-accent" />
    </marker>
  );
}

const vercelLines = ["Pages + API routes (BFF)", "JWT in httpOnly cookie"];

function WideDiagram() {
  const id = "arch-arrow-wide";
  return (
    <svg
      viewBox="0 0 840 384"
      aria-hidden="true"
      focusable="false"
      className="hidden h-auto w-full lg:block"
    >
      <defs>
        <ArrowHead id={id} />
      </defs>
      {/* Column A */}
      <Box x={16} y={44} w={170} h={64} title="Browser" lines={["visitor"]} />
      <Box
        x={16}
        y={196}
        w={170}
        h={150}
        variant="side"
        title="Gemini API"
        lines={["(explanations)", "templated fallback", "+ circuit breaker", "on quota errors"]}
      />
      {/* Column B */}
      <Box x={236} y={20} w={250} h={170} title="Next.js 16 · Vercel" lines={vercelLines} />
      <Pill
        x={248}
        y={118}
        w={226}
        lines={["Password-reset server route", "protected by internal API key"]}
      />
      <Box x={236} y={240} w={250} h={64} title="Gmail SMTP" lines={["password-reset emails"]} />
      {/* Column C */}
      <Box x={566} y={36} w={258} h={80} title="FastAPI · Render" lines={["Python 3.12"]} />
      <Box
        x={566}
        y={170}
        w={258}
        h={80}
        title="PostgreSQL 16 · Neon"
        lines={["precomputed top-50 neighbours"]}
      />
      <Box
        x={566}
        y={298}
        w={258}
        h={72}
        variant="dashed"
        title="Offline precompute pipeline"
        lines={["builds top-50 neighbours"]}
      />
      {/* Arrows */}
      <Arrow id={id} d="M186 76 L234 76" />
      <Arrow id={id} d="M486 76 L564 76" />
      <Label x={492} y={44} lines={["server-side", "calls"]} />
      <Arrow id={id} d="M361 190 L361 238" />
      <Label x={371} y={219} lines={["sends email"]} />
      <Arrow id={id} d="M695 116 L695 168" />
      <Label x={705} y={147} lines={["SQLAlchemy"]} />
      <Arrow id={id} d="M695 298 L695 252" dashed />
      <Label x={705} y={279} lines={["writes neighbours"]} />
    </svg>
  );
}

function TallDiagram() {
  const id = "arch-arrow-tall";
  const lg = "lg" as const;
  return (
    <svg
      viewBox="0 0 262 924"
      aria-hidden="true"
      focusable="false"
      className="mx-auto block h-auto w-full max-w-[360px] lg:hidden"
    >
      <defs>
        <ArrowHead id={id} />
      </defs>
      <Box size={lg} x={6} y={8} w={250} h={46} title="Browser" />
      <Box size={lg} x={6} y={88} w={250} h={182} title="Next.js 16 · Vercel" lines={vercelLines} />
      <Pill
        size={lg}
        x={18}
        y={176}
        w={226}
        lines={["Password-reset", "server route, protected by", "internal API key"]}
      />
      <Box size={lg} x={136} y={306} w={120} h={70} title="Gmail SMTP" lines={["reset emails"]} />
      <Box size={lg} x={6} y={432} w={250} h={70} title="FastAPI · Render" lines={["Python 3.12"]} />
      <Box
        size={lg}
        x={6}
        y={538}
        w={250}
        h={90}
        title="PostgreSQL 16 · Neon"
        lines={["precomputed top-50", "neighbours"]}
      />
      <Box
        size={lg}
        x={6}
        y={676}
        w={250}
        h={90}
        variant="dashed"
        title={["Offline precompute", "pipeline"]}
        lines={["builds top-50 neighbours"]}
      />
      <Box
        size={lg}
        x={6}
        y={790}
        w={250}
        h={126}
        variant="side"
        title="Gemini API"
        lines={["(explanations)", "templated fallback +", "circuit breaker on", "quota errors"]}
      />
      {/* Arrows */}
      <Arrow id={id} d="M131 54 L131 86" />
      <Arrow id={id} d="M40 270 L40 430" />
      <Label size={lg} x={50} y={340} lines={["server-side", "calls"]} />
      <Arrow id={id} d="M196 270 L196 304" />
      <Arrow id={id} d="M131 502 L131 536" />
      <Label size={lg} x={141} y={524} lines={["SQLAlchemy"]} />
      <Arrow id={id} d="M131 676 L131 630" dashed />
      <Label size={lg} x={141} y={648} lines={["writes", "neighbours"]} />
    </svg>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure aria-labelledby="arch-caption" aria-describedby="arch-desc">
      <div className="rounded-3xl border border-line bg-bg p-2 sm:p-6">
        <WideDiagram />
        <TallDiagram />
      </div>
      <figcaption id="arch-caption" className="mt-3 text-sm text-muted">
        Architecture overview. The dashed path runs offline, ahead of time.
      </figcaption>
      <div id="arch-desc" className="sr-only">
        <p>Diagram description:</p>
        <ol>
          <li>
            The browser loads the Next.js 16 app on Vercel. Its API routes act
            as a backend-for-frontend and keep the session JWT in an httpOnly
            cookie.
          </li>
          <li>Those routes make server-side calls to FastAPI (Python 3.12) on Render.</li>
          <li>
            FastAPI reads from PostgreSQL 16 on Neon through SQLAlchemy,
            including precomputed top-50 neighbours.
          </li>
          <li>
            An offline precompute pipeline builds those top-50 neighbours and
            writes them into PostgreSQL ahead of time.
          </li>
          <li>
            A password-reset server route on Vercel, protected by a shared
            internal API key, gets reset tokens from FastAPI and sends the
            email through Gmail SMTP.
          </li>
          <li>
            The Gemini API generates the explanations, with a templated
            fallback and a circuit breaker on quota errors.
          </li>
        </ol>
      </div>
    </figure>
  );
}
