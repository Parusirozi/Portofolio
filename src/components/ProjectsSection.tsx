import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export function ProjectThumbnail({ project }: { project: ProjectItem }) {
  if (project.previewType === 'analytics') {
    const bars = project.chartBars ?? [40, 65, 50, 90, 60, 80];
    return (
      <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span className="text-[#E62E2E] font-bold">● ANALYTICS</span>
          <span>DASHBOARD</span>
        </div>
        <div className="flex items-end gap-1.5 h-16 pt-2">
          {bars.map((height, idx) => {
            const barColor =
              idx === 1
                ? 'bg-[#C81D1D]/70'
                : idx === 3
                ? 'bg-[#E62E2E]'
                : idx === 5
                ? 'bg-[#C81D1D]'
                : idx === 2
                ? 'bg-zinc-600'
                : 'bg-zinc-700';
            return (
              <div
                key={idx}
                className={`w-1/6 ${barColor} rounded-t-sm transition-transform duration-300 group-hover:scale-y-105 origin-bottom`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
          <span>METRICS_V2</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'portfolio') {
    return (
      <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span className="text-[#E62E2E] font-bold">● PORTFOLIO</span>
          <span>UI / UX</span>
        </div>
        <div className="my-auto text-center">
          <span className="font-display text-xl text-white tracking-wider block">
            MODERN DESIGN
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">
            Tailwind &amp; Responsive
          </span>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
          <span>WEB_STATION</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'system') {
    return (
      <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span className="text-[#E62E2E] font-bold">● ARCHITECTURE</span>
          <span>SYSTEM</span>
        </div>
        <div className="font-mono text-[9px] text-zinc-400 space-y-1 my-auto bg-black/40 p-2 rounded">
          <div className="text-[#E62E2E]">&gt; doc.manage(vault)</div>
          <div>&gt; status: 200 OK</div>
          <div>&gt; audit: verified</div>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
          <span>DOC_CONTROL</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'energy') {
    return (
      <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span className="text-[#E62E2E] font-bold">● ENERGY</span>
          <span>RESEARCH</span>
        </div>
        <div className="my-auto space-y-1.5">
          <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
            <div className="h-full w-4/5 bg-[#E62E2E]" />
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
            <div className="h-full w-3/5 bg-[#C81D1D]/70" />
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
            <div className="h-full w-1/2 bg-zinc-600" />
          </div>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
          <span>CLEAN_GRID</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
      </div>
    );
  }

  if (project.previewType === 'archive') {
    return (
      <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span className="text-[#E62E2E] font-bold">● SECRETARIAT</span>
          <span>TOOLKIT</span>
        </div>
        <div className="my-auto grid grid-cols-2 gap-1.5 font-mono text-[9px] text-zinc-300">
          <div className="bg-black/40 p-1.5 rounded border border-white/5">REG_250+</div>
          <div className="bg-black/40 p-1.5 rounded border border-white/5">CERT_AUTO</div>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
          <span>ADMIN_KIT</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#1b1c20] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
      <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
        <span className="text-[#E62E2E] font-bold">● GRAPHIC</span>
        <span>EDITORIAL</span>
      </div>
      <div className="my-auto text-center">
        <span className="font-display text-xl text-white tracking-wider block">
          VISUAL SERIES
        </span>
        <span className="text-[10px] text-zinc-400 font-mono">Canva &amp; Print Grids</span>
      </div>
      <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
        <span>CAMPAIGN_12</span>
        <span className="tabular-nums">{project.year}</span>
      </div>
    </div>
  );
}

export function ProjectsSection({
  onSelectProject,
  onViewAllProjects,
}: ProjectsSectionProps) {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-16" id="projects">
      {/* Header with crimson bar & View All link */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#E62E2E] font-display text-2xl font-bold" aria-hidden="true">
            /
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider">
            Selected Projects
          </h2>
        </div>

        <button
          type="button"
          onClick={onViewAllProjects}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-[#E62E2E] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E] rounded px-2 py-1"
        >
          <span>View All Projects</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* 3 Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="bg-[#0f0f10] border border-white/10 hover:border-[#C81D1D]/60 rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300 cursor-pointer"
          >
            {/* Visual Display Thumbnail */}
            <div className="w-full aspect-[16/10] bg-[#161618] rounded-xl overflow-hidden border border-white/5 relative flex items-center justify-center p-3 mb-5">
              <ProjectThumbnail project={project} />
            </div>

            {/* Card Text & Action */}
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#E62E2E] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">{project.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                aria-label={`Inspect ${project.title}`}
                className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#E62E2E] group-hover:bg-[#E62E2E]/10 flex items-center justify-center text-zinc-300 group-hover:text-[#E62E2E] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E]"
              >
                →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
