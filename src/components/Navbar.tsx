import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onOpenCV }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#050505]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-40 border-b border-white/5">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-[80px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <span
            className="text-[#E62E2E] text-2xl font-black leading-none group-hover:scale-110 transition-transform"
            aria-hidden="true"
          >
            ▶
          </span>
          <div className="flex flex-col">
            <span className="font-display tracking-wider text-2xl sm:text-3xl text-white uppercase leading-none whitespace-nowrap">
              PARUL<span className="text-[#E62E2E]">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-semibold mt-0.5 whitespace-nowrap">
              Personal Portfolio
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wider">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#E62E2E] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E62E2E]'
                    : 'text-zinc-300 hover:text-[#E62E2E]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-white/20 hover:border-[#E62E2E] text-xs font-semibold text-white bg-black/40 hover:bg-[#C81D1D]/20 transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E]"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-zinc-200 hover:border-[#E62E2E] hover:text-[#E62E2E] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#0a0a0c] px-5 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`py-2.5 px-3 text-sm font-semibold tracking-wider rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#E62E2E] bg-[#C81D1D]/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
