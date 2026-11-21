import { Download, Mail } from 'lucide-react';
import { CONTACT_INFO, HERO_IMAGE_URL, METRICS } from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface HeroSectionProps {
  onOpenCV: () => void;
  onExploreJourney: () => void;
}

export function HeroSection({ onOpenCV, onExploreJourney }: HeroSectionProps) {
  return (
    <section
      className="relative w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-8 md:pt-14 pb-12 overflow-hidden"
      id="home"
    >
      {/* Red futuristic background light beams & ambient glow */}
      <div
        className="absolute -top-10 right-10 w-[550px] h-[550px] bg-[#C81D1D]/20 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#C81D1D]/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Diagonal glowing graphic lines in the hero background */}
      <div
        className="absolute right-[12%] top-16 w-1 h-[420px] bg-gradient-to-b from-transparent via-[#E62E2E]/60 to-transparent rotate-[28deg] blur-[1px] pointer-events-none hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-[28%] top-28 w-1 h-[320px] bg-gradient-to-b from-transparent via-[#E62E2E]/40 to-transparent rotate-[28deg] blur-[1px] pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[560px]">
        {/* Left Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          <span className="font-script text-[#E62E2E] text-3xl sm:text-4xl -mb-3 select-none">
            Hello, I&apos;m
          </span>

          {/* Giant Display Names */}
          <div className="space-y-0.5">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              MOCH. FAKHRUDDIN
            </h1>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#E62E2E] text-glow-crimson leading-none">
              AR ROZI
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base font-semibold text-zinc-200 tracking-wide">
            Information Systems Student{' '}
            <span className="text-[#E62E2E] mx-1.5 font-bold" aria-hidden="true">
              |
            </span>{' '}
            Aspiring Data Analyst
          </p>

          {/* Brief Narrative */}
          <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-lg">
            Turning data into insights, membangun masa depan melalui teknologi dan analisis data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={onExploreJourney}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C81D1D] hover:bg-[#E62E2E] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-[#C81D1D]/30 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore My Journey</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/60 hover:bg-[#151515] border border-white/20 hover:border-[#E62E2E]/60 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E]"
            >
              <span>View CV</span>
              <Download className="w-4 h-4 text-zinc-300" aria-hidden="true" />
            </button>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E62E2E] hover:text-[#E62E2E] text-zinc-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E62E2E] hover:text-[#E62E2E] text-zinc-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Send Email"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E62E2E] hover:text-[#E62E2E] text-zinc-300 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Metric Counter Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
            {METRICS.map((metric) => (
              <div key={metric.label} className="border-l border-white/15 pl-3">
                <div className="font-display text-2xl sm:text-3xl text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium leading-tight whitespace-pre-line">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Hero Cutout Image & Skyscraper Setting */}
        <div className="lg:col-span-5 relative flex justify-center items-end min-h-[460px] sm:min-h-[580px] pt-8">
          <div className="relative w-full max-w-[420px] h-[520px] sm:h-[600px] overflow-hidden rounded-2xl flex justify-center items-end bg-[#0f0f10]">
            <PortraitImage
              src={HERO_IMAGE_URL}
              alt="Moch. Fakhruddin Ar Rozi at Night City"
              className="w-full h-full object-cover object-top contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/40 pointer-events-none" />
            <div
              className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-[#E62E2E] to-transparent shadow-[0_0_15px_#E62E2E] pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Vertical accent slogan on far right */}
          <div className="absolute right-2 sm:-right-4 bottom-12 hidden sm:flex items-center gap-3">
            <div className="w-[2px] h-14 bg-[#E62E2E]" aria-hidden="true" />
            <div className="flex flex-col text-xs font-bold text-white tracking-widest leading-snug uppercase">
              <span>Dream</span>
              <span>Learn</span>
              <span>Grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
