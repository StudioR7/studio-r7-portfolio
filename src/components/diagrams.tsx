/** Drawn diagrams: a process with its actors, and a simplified data model. */

const ACTOR_STYLES = [
  { chip: "bg-primary-ink text-white", bar: "bg-primary-ink" },
  { chip: "bg-accent-ink text-white", bar: "bg-accent-ink" },
  { chip: "bg-night text-white", bar: "bg-night" },
  { chip: "bg-[#8a4b00] text-white", bar: "bg-[#8a4b00]" },
];

type Step = { actor: number; title: string; body: string };

export function ProcessDiagram({
  actors,
  steps,
}: {
  actors: string[];
  steps: Step[];
}) {
  return (
    <div className="mt-8">
      <ul
        className="flex flex-wrap gap-x-5 gap-y-2"
        aria-label="Who is involved"
      >
        {actors.map((actor, index) => (
          <li
            key={actor}
            className="flex items-center gap-2 text-[15px] font-semibold"
          >
            <span
              className={`size-3 rounded-full ${ACTOR_STYLES[index % ACTOR_STYLES.length].bar}`}
              aria-hidden="true"
            />
            {actor}
          </li>
        ))}
      </ul>
      <ol className="mt-5 grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step, index) => {
          const style = ACTOR_STYLES[step.actor % ACTOR_STYLES.length];
          return (
            <li key={step.title} className="relative flex">
              <div className="flex w-full flex-col overflow-hidden rounded-xl border border-line bg-white">
                <span className={`h-1.5 ${style.bar}`} aria-hidden="true" />
                <div className="p-4">
                  <p className="flex items-center gap-2 text-[15px] font-bold">
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-[14px] ${style.chip}`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-muted">{actors[step.actor]}</span>
                  </p>
                  <p className="mt-2.5 text-lg font-bold leading-snug">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[15px] text-muted">{step.body}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <span
                  className="absolute -bottom-5 left-6 text-xl font-bold text-primary-ink sm:-right-3 sm:bottom-auto sm:left-auto sm:top-9"
                  aria-hidden="true"
                >
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

type Entity = {
  id: string;
  name: string;
  note: string;
  col: number;
  row: number;
};
type LinkLine = { from: string; to: string; label?: string };

const BOX_W = 220;
const BOX_H = 86;
const GAP_X = 70;
const GAP_Y = 64;
const PAD = 16;

export function SchemaDiagram({
  title,
  columns,
  entities,
  links,
}: {
  title: string;
  columns: number;
  entities: Entity[];
  links: LinkLine[];
}) {
  const rows = Math.max(...entities.map((entity) => entity.row)) + 1;
  const width = PAD * 2 + columns * BOX_W + (columns - 1) * GAP_X;
  const height = PAD * 2 + rows * BOX_H + (rows - 1) * GAP_Y;
  const place = (entity: Entity) => ({
    x: PAD + entity.col * (BOX_W + GAP_X),
    y: PAD + entity.row * (BOX_H + GAP_Y),
  });
  const byId = new Map(entities.map((entity) => [entity.id, entity]));

  const lines = links.map((link) => {
    const from = byId.get(link.from);
    const to = byId.get(link.to);
    if (!from || !to)
      throw new Error(`Unknown entity in link ${link.from} to ${link.to}`);
    const a = place(from);
    const b = place(to);
    const horizontal = from.row === to.row;
    const start = horizontal
      ? { x: a.x + (b.x > a.x ? BOX_W : 0), y: a.y + BOX_H / 2 }
      : { x: a.x + BOX_W / 2, y: a.y + (b.y > a.y ? BOX_H : 0) };
    const end = horizontal
      ? { x: b.x + (b.x > a.x ? 0 : BOX_W), y: b.y + BOX_H / 2 }
      : { x: b.x + BOX_W / 2, y: b.y + (b.y > a.y ? 0 : BOX_H) };
    const path =
      horizontal || start.x === end.x
        ? `M${start.x},${start.y} L${end.x},${end.y}`
        : `M${start.x},${start.y} V${(start.y + end.y) / 2} H${end.x} V${end.y}`;
    return {
      ...link,
      path,
      mid: { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 },
    };
  });

  return (
    <>
      <div
        className="frame-scroll mt-8 overflow-x-auto rounded-2xl border border-line bg-surface p-3"
        tabIndex={0}
        role="region"
        aria-label={`${title} (scrolls sideways on small screens)`}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="img"
          aria-label={`${title}: ${entities.map((entity) => entity.name).join(", ")}`}
          className="mx-auto block max-w-none"
        >
          <defs>
            <marker
              id="schema-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#1d4fd8" />
            </marker>
          </defs>
          {lines.map((line) => (
            <g key={`${line.from}-${line.to}`}>
              <path
                d={line.path}
                fill="none"
                stroke="#1d4fd8"
                strokeWidth="2"
                markerEnd="url(#schema-arrow)"
              />
              {line.label && (
                <>
                  <rect
                    x={line.mid.x - line.label.length * 4.2 - 6}
                    y={line.mid.y - 12}
                    width={line.label.length * 8.4 + 12}
                    height="24"
                    rx="12"
                    fill="#f5f8fc"
                  />
                  <text
                    x={line.mid.x}
                    y={line.mid.y + 5}
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="600"
                    fill="#47546b"
                  >
                    {line.label}
                  </text>
                </>
              )}
            </g>
          ))}
          {entities.map((entity) => {
            const { x, y } = place(entity);
            return (
              <g key={entity.id}>
                <rect
                  x={x}
                  y={y}
                  width={BOX_W}
                  height={BOX_H}
                  rx="12"
                  fill="#ffffff"
                  stroke="#dce3ee"
                  strokeWidth="1.5"
                />
                <rect
                  x={x}
                  y={y}
                  width="6"
                  height={BOX_H}
                  rx="3"
                  fill="#0b1220"
                />
                <text
                  x={x + 20}
                  y={y + 36}
                  fontSize="18"
                  fontWeight="800"
                  fill="#1a2233"
                >
                  {entity.name}
                </text>
                <text
                  x={x + 20}
                  y={y + 61}
                  fontSize="15"
                  fontWeight="500"
                  fill="#47546b"
                >
                  {entity.note}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-2 text-center text-[15px] font-medium text-muted md:hidden">
        <span aria-hidden="true">↔ </span>Scroll sideways to see it all
      </p>
    </>
  );
}
