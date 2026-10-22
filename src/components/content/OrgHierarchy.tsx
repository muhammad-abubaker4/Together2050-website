type Tone = "lead" | "role" | "department" | "unit";

type NodeBox = {
  lines: string[];
  x: number;
  y: number;
  w: number;
  h: number;
  tone: Tone;
  size: number;
};

const VB_W = 1200;
const VB_H = 890;

const founder: NodeBox = {
  lines: ["Founder"],
  x: 310,
  y: 20,
  w: 300,
  h: 58,
  tone: "lead",
  size: 16,
};
const cofounder: NodeBox = {
  lines: ["Co-Founder"],
  x: 310,
  y: 114,
  w: 300,
  h: 58,
  tone: "role",
  size: 16,
};
const president: NodeBox = {
  lines: ["President"],
  x: 310,
  y: 232,
  w: 300,
  h: 58,
  tone: "role",
  size: 16,
};
const vicePresident: NodeBox = {
  lines: ["Vice President"],
  x: 310,
  y: 326,
  w: 300,
  h: 58,
  tone: "role",
  size: 16,
};
const generalSecretary: NodeBox = {
  lines: ["General Secretary (GS)"],
  x: 310,
  y: 420,
  w: 300,
  h: 58,
  tone: "role",
  size: 16,
};
const directors: NodeBox = {
  lines: ["Directors / Department Heads"],
  x: 270,
  y: 514,
  w: 380,
  h: 58,
  tone: "role",
  size: 15,
};
const advisory: NodeBox = {
  lines: ["Advisory Council"],
  x: 948,
  y: 232,
  w: 232,
  h: 58,
  tone: "role",
  size: 15,
};
const programs: NodeBox = {
  lines: ["Programs & Projects"],
  x: 16,
  y: 692,
  w: 190,
  h: 58,
  tone: "department",
  size: 14,
};
const programCoordinators: NodeBox = {
  lines: ["Program Coordinators"],
  x: 16,
  y: 798,
  w: 190,
  h: 68,
  tone: "unit",
  size: 13,
};
const communications: NodeBox = {
  lines: ["Communications & Media"],
  x: 218,
  y: 692,
  w: 220,
  h: 58,
  tone: "department",
  size: 14,
};
const mediaTeams: NodeBox = {
  lines: ["Media & Content Teams"],
  x: 218,
  y: 798,
  w: 220,
  h: 68,
  tone: "unit",
  size: 13,
};
const community: NodeBox = {
  lines: ["Community & Outreach"],
  x: 450,
  y: 692,
  w: 490,
  h: 58,
  tone: "department",
  size: 14,
};
const womensWing: NodeBox = {
  lines: ["Women's Wing"],
  x: 450,
  y: 798,
  w: 154,
  h: 68,
  tone: "unit",
  size: 13,
};
const youthWing: NodeBox = {
  lines: ["Youth Wing"],
  x: 618,
  y: 798,
  w: 154,
  h: 68,
  tone: "unit",
  size: 13,
};
const chapters: NodeBox = {
  lines: ["Regional / Provincial", "Chapters"],
  x: 786,
  y: 798,
  w: 154,
  h: 68,
  tone: "unit",
  size: 13,
};
const finance: NodeBox = {
  lines: ["Finance & Administration"],
  x: 952,
  y: 692,
  w: 232,
  h: 58,
  tone: "department",
  size: 14,
};
const treasurer: NodeBox = {
  lines: ["Treasurer & Admin Team"],
  x: 952,
  y: 798,
  w: 232,
  h: 68,
  tone: "unit",
  size: 13,
};

const nodes = [
  founder,
  cofounder,
  president,
  vicePresident,
  generalSecretary,
  directors,
  advisory,
  programs,
  programCoordinators,
  communications,
  mediaTeams,
  community,
  womensWing,
  youthWing,
  chapters,
  finance,
  treasurer,
];

const departmentBranches: { head: NodeBox; children: NodeBox[] }[] = [
  { head: programs, children: [programCoordinators] },
  { head: communications, children: [mediaTeams] },
  { head: community, children: [womensWing, youthWing, chapters] },
  { head: finance, children: [treasurer] },
];

function cx(node: NodeBox) {
  return node.x + node.w / 2;
}

function strokeFor(tone: Tone) {
  if (tone === "lead") return "#FC0000";
  if (tone === "department") return "#6b6b6b";
  if (tone === "unit") return "#555555";
  return "#a3a3a3";
}

function NodeShape({ node }: { node: NodeBox }) {
  const gap = node.size + 4;
  const block = node.lines.length * gap;
  const firstBaseline = node.y + (node.h - block) / 2 + node.size * 0.82;
  return (
    <g className="group">
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={5}
        fill="#0b0b0b"
        stroke={strokeFor(node.tone)}
        strokeWidth={node.tone === "lead" ? 2 : 1.25}
        className="transition-[fill,stroke] duration-200 motion-reduce:transition-none group-hover:fill-[#FC0000] group-hover:stroke-[#FC0000]"
      />
      <text
        fill="#ffffff"
        fontSize={node.size}
        fontWeight={500}
        fontFamily="Instrument Sans, ui-sans-serif, system-ui, sans-serif"
        textAnchor="middle"
      >
        {node.lines.map((line, index) => (
          <tspan key={line} x={cx(node)} y={firstBaseline + index * gap}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function vLink(x: number, fromY: number, toY: number) {
  return `M ${x} ${fromY} V ${toY}`;
}

function stackClass(tone: Tone) {
  if (tone === "lead") return "border-2 border-red";
  if (tone === "department") return "border border-[#6b6b6b]";
  if (tone === "unit") return "border border-[#555555]";
  return "border border-[#a3a3a3]";
}

function StackBox({ node }: { node: NodeBox }) {
  return (
    <div
      className={`flex min-h-14 w-full items-center justify-center rounded-[5px] bg-ink px-4 py-3 text-center text-base font-medium leading-snug text-white transition-[background-color,border-color] duration-200 motion-reduce:transition-none hover:border-[#FC0000] hover:bg-[#FC0000] ${stackClass(node.tone)}`}
    >
      {node.lines.join(" ")}
    </div>
  );
}

function Stem() {
  return (
    <span className="flex flex-col items-center py-1" aria-hidden="true">
      <span className="h-7 w-px bg-[#cfcfcf]" />
    </span>
  );
}

function StackedChart() {
  const chain = [vicePresident, generalSecretary, directors];

  return (
    <div className="mx-auto mt-10 w-full max-w-xl xl:hidden">
      <div className="flex flex-col items-center">
        <StackBox node={founder} />
        <Stem />
        <StackBox node={cofounder} />
        <div className="relative flex w-full justify-center">
          <span
            className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-[#cfcfcf]"
            aria-hidden="true"
          />
          <div className="relative w-[46%] py-4 pl-4 ml-[50%]">
            <span
              className="absolute top-8 left-0 h-px w-4 bg-[#cfcfcf]"
              aria-hidden="true"
            />
            <p className="mb-2 text-center text-[0.7rem] font-medium tracking-[0.16em] uppercase text-stone">
              Strategic Guidance
            </p>
            <StackBox node={advisory} />
          </div>
        </div>
        <Stem />
        <StackBox node={president} />
        {chain.map((node) => (
          <div key={node.lines.join("-")} className="flex w-full flex-col items-center">
            <Stem />
            <StackBox node={node} />
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-8 border-t border-white/15 pt-10">
        {departmentBranches.map((branch) => (
          <div key={branch.head.lines.join("-")}>
            <StackBox node={branch.head} />
            <div className="mt-3 flex flex-col gap-3 border-l border-[#555555] pl-4">
              {branch.children.map((child) => (
                <StackBox key={child.lines.join("-")} node={child} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrgHierarchy() {
  const spine = cx(founder);
  const branchY = (cofounder.y + cofounder.h + president.y) / 2;
  const pillW = 170;
  const pillX = cofounder.x + cofounder.w + 40;
  const busY = directors.y + directors.h + 72;
  const communityBusY = community.y + community.h + 36;

  return (
    <section
      className="bg-ink pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16"
      aria-labelledby="org-hierarchy"
    >
      <div className="container-site">
          <h2
            id="org-hierarchy"
            className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Organizational Hierarchy
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            Leadership runs from the Founder through the Directors. The Advisory
            Council branches from the line between the Co-Founder and the
            President.
          </p>

          <StackedChart />

          <div
            className="mt-12 hidden overflow-x-auto overscroll-x-contain xl:block"
            tabIndex={0}
            role="region"
            aria-label="Organizational hierarchy chart"
          >
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="h-auto w-full min-w-[1200px] max-w-none"
              role="img"
              aria-labelledby="org-chart-title"
            >
              <title id="org-chart-title">
                Organizational hierarchy from Founder through the departments.
                The Advisory Council branches from the connector between
                Co-Founder and President.
              </title>
              <g
                fill="none"
                stroke="#cfcfcf"
                strokeWidth="1.25"
                strokeLinecap="square"
              >
                <path d={vLink(spine, founder.y + founder.h, cofounder.y)} />
                <path d={vLink(spine, cofounder.y + cofounder.h, president.y)} />
                <path d={vLink(spine, president.y + president.h, vicePresident.y)} />
                <path
                  d={vLink(spine, vicePresident.y + vicePresident.h, generalSecretary.y)}
                />
                <path
                  d={vLink(spine, generalSecretary.y + generalSecretary.h, directors.y)}
                />
                <path d={vLink(spine, directors.y + directors.h, busY)} />
                <path d={`M ${cx(programs)} ${busY} H ${cx(finance)}`} />
                <path d={vLink(cx(programs), busY, programs.y)} />
                <path d={vLink(cx(communications), busY, communications.y)} />
                <path d={vLink(cx(community), busY, community.y)} />
                <path d={vLink(cx(finance), busY, finance.y)} />
                <path
                  d={vLink(cx(programs), programs.y + programs.h, programCoordinators.y)}
                />
                <path
                  d={vLink(
                    cx(communications),
                    communications.y + communications.h,
                    mediaTeams.y,
                  )}
                />
                <path d={vLink(cx(finance), finance.y + finance.h, treasurer.y)} />
                <path d={vLink(cx(community), community.y + community.h, communityBusY)} />
                <path d={`M ${cx(womensWing)} ${communityBusY} H ${cx(chapters)}`} />
                <path d={vLink(cx(womensWing), communityBusY, womensWing.y)} />
                <path d={vLink(cx(youthWing), communityBusY, youthWing.y)} />
                <path d={vLink(cx(chapters), communityBusY, chapters.y)} />
              </g>
              <g fill="none" stroke="#cfcfcf" strokeWidth="1.25" strokeDasharray="5 5">
                <path d={`M ${spine} ${branchY} H ${cx(advisory)}`} />
                <path d={`M ${cx(advisory)} ${branchY} V ${advisory.y}`} />
              </g>
              <g className="group">
              <rect
                x={pillX}
                y={branchY - 14}
                width={pillW}
                height={28}
                rx={14}
                fill="#0b0b0b"
                stroke="#8a8a8a"
                className="transition-[fill,stroke] duration-200 motion-reduce:transition-none group-hover:fill-[#FC0000] group-hover:stroke-[#FC0000]"
              />
              <text
                x={pillX + pillW / 2}
                y={branchY + 4}
                textAnchor="middle"
                fill="#ffffff"
                fontSize={13}
                fontFamily="Instrument Sans, ui-sans-serif, system-ui, sans-serif"
              >
                Strategic Guidance
              </text>
              </g>
              {nodes.map((node) => (
                <NodeShape key={node.lines.join("-")} node={node} />
              ))}
            </svg>
          </div>
      </div>
    </section>
  );
}
