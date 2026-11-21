import { useEffect, useState, FormEvent } from 'react';
import { Award, CheckCircle2, Download, ExternalLink, Printer, X } from 'lucide-react';
import {
  ACHIEVEMENTS,
  CONTACT_INFO,
  EDUCATION,
  PROJECTS,
  ProjectItem,
  SKILLS,
} from '../data/portfolioData';
import { ProjectThumbnail } from './ProjectsSection';

interface ModalBackdropProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

function ModalShell({
  onClose,
  title,
  children,
  maxWidth = 'max-w-3xl',
}: ModalBackdropProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className={`w-full ${maxWidth} bg-[#0f0f10] border border-[#C81D1D]/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141416] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[#E62E2E] font-display text-xl" aria-hidden="true">
              /
            </span>
            <h3 className="font-display text-xl text-white uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full border border-white/15 hover:border-[#E62E2E] hover:text-[#E62E2E] text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <ModalShell onClose={onClose} title={project.title}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 aspect-[16/10] bg-[#161618] rounded-xl border border-white/10 p-3">
            <ProjectThumbnail project={project} />
          </div>
          <div className="md:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-200">{project.role}</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.summary}</p>
            <div className="text-xs text-zinc-400">
              Tools: <span className="text-zinc-200">{project.tools.join(' · ')}</span>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl text-[#E62E2E] tabular-nums">
                {m.value}
              </div>
              <div className="text-xs text-zinc-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Key Deliverables &amp; Outcomes
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-200">
                <span className="text-[#E62E2E] mt-1 shrink-0" aria-hidden="true">
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ModalShell>
  );
}

export function AllProjectsModal({
  onClose,
  onSelectProject,
}: {
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
}) {
  const [filter, setFilter] = useState<'All' | 'Data Analysis' | 'Web & UI' | 'Systems'>('All');
  const categories: Array<'All' | 'Data Analysis' | 'Web & UI' | 'Systems'> = [
    'All',
    'Data Analysis',
    'Web & UI',
    'Systems',
  ];

  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <ModalShell onClose={onClose} title="All Projects Archive" maxWidth="max-w-4xl">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                filter === cat
                  ? 'bg-[#C81D1D] border-[#E62E2E] text-white'
                  : 'bg-[#141416] border-white/10 text-zinc-300 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => {
                onClose();
                onSelectProject(project);
              }}
              className="text-left bg-[#141416] border border-white/10 hover:border-[#E62E2E]/60 rounded-xl p-4 flex flex-col justify-between group transition-all cursor-pointer"
            >
              <div className="w-full aspect-[16/10] bg-[#161618] rounded-lg overflow-hidden border border-white/5 p-2.5 mb-3">
                <ProjectThumbnail project={project} />
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 mb-1">
                  {project.category} · <span className="tabular-nums">{project.year}</span>
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-[#E62E2E] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">{project.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </ModalShell>
  );
}

export function AboutJourneyModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell onClose={onClose} title="About & Journey">
      <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Background &amp; Focus
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Lulusan MAN 2 Kota Kediri jurusan Saintek yang berminat dalam dunia Administrasi dan
            pengelolaan dokumen serta desain grafis dengan keingintahuan tinggi seputar energi
            berkelanjutan. Saat ini menempuh pendidikan S1 Sistem Informasi di Institut Teknologi
            PLN untuk memadukan ketelitian manajemen informasi dengan analisis data modern.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-[#E62E2E]" aria-hidden="true" />
            <span>Milestones &amp; Recognition</span>
          </h4>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.title} className="py-3.5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5">
                <span className="font-mono text-xs text-[#E62E2E] font-bold shrink-0 w-24 tabular-nums">
                  {item.year}
                </span>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Education Track
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="p-4 rounded-xl bg-[#141416] border border-white/10 space-y-1"
              >
                <div className="text-sm font-bold text-white">{edu.institution}</div>
                <div className="text-xs text-[#E62E2E]">{edu.program}</div>
                <p className="text-xs text-zinc-400 pt-1">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

export function CVModal({
  onClose,
  onNotify,
}: {
  onClose: () => void;
  onNotify: (msg: string) => void;
}) {
  const handleDownloadTextCV = () => {
    const content = [
      'MOCH. FAKHRUDDIN AR ROZI (PARUL.)',
      'Information Systems Student | Aspiring Data Analyst',
      `Email: ${CONTACT_INFO.email} | Phone: ${CONTACT_INFO.phoneDisplay}`,
      `LinkedIn: ${CONTACT_INFO.linkedinUrl}`,
      `GitHub: ${CONTACT_INFO.githubUrl}`,
      '',
      'PROFILE',
      'Lulusan MAN 2 Kota Kediri jurusan Saintek yang berminat dalam dunia Administrasi dan pengelolaan dokumen serta desain grafis dengan keingintahuan tinggi seputar energi berkelanjutan. Aktif dalam berorganisasi dan terlibat dalam kompetisi kepramukaan, desain, serta seni.',
      '',
      'EDUCATION',
      ...EDUCATION.map((e) => `- ${e.institution} — ${e.program} (${e.focus})`),
      '',
      'SKILLS',
      SKILLS.map((s) => `- ${s.name} (${s.level}): ${s.description}`).join('\n'),
      '',
      'SELECTED PROJECTS',
      ...PROJECTS.slice(0, 3).map((p) => `- ${p.title} (${p.year}): ${p.summary}`),
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Moch_Fakhruddin_Ar_Rozi.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onNotify('CV downloaded successfully');
  };

  return (
    <ModalShell onClose={onClose} title="Curriculum Vitae" maxWidth="max-w-3xl">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h4 className="font-display text-2xl text-white uppercase tracking-wide">
              Moch. Fakhruddin Ar Rozi
            </h4>
            <p className="text-xs text-[#E62E2E] font-semibold mt-0.5">
              Information Systems Student · Aspiring Data Analyst
            </p>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              {CONTACT_INFO.email} · {CONTACT_INFO.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#E62E2E] text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadTextCV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C81D1D] hover:bg-[#E62E2E] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Save CV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E62E2E]">
              Education
            </h5>
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="space-y-0.5">
                <div className="text-sm font-bold text-white">{edu.institution}</div>
                <div className="text-xs text-zinc-300">{edu.program}</div>
                <div className="text-xs text-zinc-400">{edu.focus}</div>
              </div>
            ))}

            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E62E2E] pt-2">
              Core Skills
            </h5>
            <div className="text-xs text-zinc-300 leading-relaxed">
              {SKILLS.map((s) => s.name).join(' · ')}
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#E62E2E]">
              Selected Projects
            </h5>
            {PROJECTS.slice(0, 3).map((p) => (
              <div key={p.id} className="space-y-0.5">
                <div className="text-sm font-bold text-white">
                  {p.title} <span className="text-xs font-normal text-zinc-400">({p.year})</span>
                </div>
                <p className="text-xs text-zinc-400">{p.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

export function ContactMessageModal({
  onClose,
  onNotify,
}: {
  onClose: () => void;
  onNotify: (msg: string) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    onNotify('Inquiry ready — you can also email directly');
  };

  const mailtoHref = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name || 'Visitor'}`
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;

  return (
    <ModalShell onClose={onClose} title="Send a Message" maxWidth="max-w-lg">
      {submitted ? (
        <div className="py-6 text-center space-y-4">
          <CheckCircle2 className="w-10 h-10 text-[#E62E2E] mx-auto" />
          <h4 className="font-display text-2xl text-white uppercase">Message Prepared</h4>
          <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
            Thanks, {name}. Click below to launch your email client with your message pre-filled,
            or reach out directly on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C81D1D] hover:bg-[#E62E2E] text-white text-xs font-bold transition-colors"
            >
              <span>Open Email App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold text-zinc-200 hover:border-white/40 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Budi Santoso"
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E62E2E] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E62E2E] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, data analysis need, or collaboration..."
              className="w-full bg-[#050505] border border-white/15 focus:border-[#E62E2E] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#C81D1D] hover:bg-[#E62E2E] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      )}
    </ModalShell>
  );
}
