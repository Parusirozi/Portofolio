import { ABOUT_IMAGE_URL } from '../data/portfolioData';
import { PortraitImage } from './PortraitImage';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export function AboutSection({ onOpenAboutModal }: AboutSectionProps) {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-16" id="about">
      {/* Header with crimson slash */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-[#E62E2E] font-display text-2xl font-bold" aria-hidden="true">
          /
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider">
          About Me
        </h2>
      </div>

      {/* 2-Column Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Narrative text & button */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal text-justify sm:text-left">
            Lulusan MAN 2 Kota Kediri jurusan Saintek yang berminat dalam dunia Administrasi dan
            pengelolaan dokumen serta desain grafis dengan keingintahuan tinggi seputar energi
            berkelanjutan. Aktif dalam berorganisasi dan terlibat dalam kompetisi kepramukaan,
            desain, serta seni.
          </p>
          <div>
            <button
              type="button"
              onClick={onOpenAboutModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 hover:border-[#E62E2E] hover:text-[#E62E2E] text-white text-xs font-semibold tracking-wider transition-all bg-[#0f0f10] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E]"
            >
              <span>More About Me</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Right: Sleek frame with city skyline photo & red glow */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#C81D1D]/50 shadow-[0_0_25px_rgba(200,29,29,0.25)] group bg-[#0f0f10]">
            <PortraitImage
              key={ABOUT_IMAGE_URL}
              src={ABOUT_IMAGE_URL}
              alt="Moch. Fakhruddin Ar Rozi at PLN Indonesia Power"
              className="w-full h-full object-cover object-[center_32%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-2 border-[#E62E2E]/30 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
