import { Check, Copy, Mail, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactFooterProps {
  onOpenContactForm: () => void;
  onNotify: (msg: string) => void;
}

export function ContactFooter({ onOpenContactForm, onNotify }: ContactFooterProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone', label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      onNotify(`${label} copied to clipboard`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      onNotify(`Contact: ${text}`);
    }
  };

  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 pb-8 border-t border-white/10"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Col 1: Giant Title & Description */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
            Let’s Work
            <br />
            <span className="text-[#E62E2E]">Together</span>{' '}
            <span className="text-[#E62E2E] text-2xl font-sans font-light" aria-hidden="true">
              /
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
            Have a project, collaboration, or just want to say hello? Feel free to reach out to me!
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={onOpenContactForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C81D1D] hover:bg-[#E62E2E] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Send a Message</span>
            </button>
          </div>
        </div>

        {/* Col 2: Interactive Contact Info List */}
        <div className="lg:col-span-4 space-y-3">
          {/* Email */}
          <div className="flex items-center justify-between gap-2 group">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-xs text-zinc-300 hover:text-white transition-colors min-w-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#141416] border border-white/10 group-hover:border-[#E62E2E] group-hover:text-[#E62E2E] flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <span className="font-mono truncate">{CONTACT_INFO.email}</span>
            </a>
            <button
              type="button"
              onClick={() => handleCopy(CONTACT_INFO.email, 'email', 'Email')}
              aria-label="Copy email address"
              className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-[#E62E2E]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone / WA */}
          <div className="flex items-center justify-between gap-2 group">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-zinc-300 hover:text-white transition-colors min-w-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#141416] border border-white/10 group-hover:border-[#E62E2E] group-hover:text-[#E62E2E] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <span className="font-mono tabular-nums">{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => handleCopy(CONTACT_INFO.phoneDisplay, 'phone', 'Phone number')}
              aria-label="Copy phone number"
              className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-[#E62E2E]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#141416] border border-white/10 group-hover:border-[#E62E2E] group-hover:text-[#E62E2E] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <span className="font-mono truncate">{CONTACT_INFO.linkedinLabel}</span>
          </a>

          {/* GitHub */}
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#141416] border border-white/10 group-hover:border-[#E62E2E] group-hover:text-[#E62E2E] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </div>
            <span className="font-mono">{CONTACT_INFO.githubLabel}</span>
          </a>
        </div>

        {/* Col 3: Sleek dark laptop mockup showcase */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] bg-gradient-to-tr from-black to-[#111] p-3 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center">
            <div className="w-full aspect-[16/10] bg-black rounded-lg border border-red-950/40 relative overflow-hidden flex flex-col justify-between p-3">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C81D1D]/30 via-transparent to-transparent" />
              <div className="text-[9px] font-mono text-[#E62E2E] flex justify-between items-center z-10">
                <span>PARUL_WORKSPACE</span>
                <span className="w-2 h-2 rounded-full bg-[#E62E2E]" />
              </div>
              <div className="my-auto text-center z-10">
                <span className="font-display text-2xl text-white tracking-widest block">
                  DATA_AI
                </span>
                <span className="text-[8px] font-mono text-zinc-400">
                  CONNECTING FUTURES
                </span>
              </div>
              <div className="text-[8px] font-mono text-zinc-500 z-10">
                <span>PORTFOLIO 2026</span>
              </div>
            </div>
            <div className="w-28 h-1 bg-zinc-700 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <footer className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
        <div>
          © 2026 <span className="text-white font-bold">PARUL.</span> All rights reserved.
        </div>
        <div className="text-[11px] font-mono tracking-widest text-[#E62E2E]">
          Build Better Together
        </div>
      </footer>
    </section>
  );
}
