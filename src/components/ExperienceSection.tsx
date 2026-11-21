import { useState } from 'react';
import { EDUCATION, SKILLS, WORK_PROCESS } from '../data/portfolioData';

export function ExperienceSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const activeSkillDetail = SKILLS.find((s) => s.name === selectedSkill);

  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-16" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* COLUMN 1: Education & Skills */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8" id="skills">
          {/* Education Sub-block */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#E62E2E] font-display text-xl font-bold" aria-hidden="true">
                /
              </span>
              <h3 className="font-display text-xl text-white uppercase tracking-wider">
                Education &amp; Skills
              </h3>
            </div>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="flex items-start gap-2.5">
                  <span className="text-[#E62E2E] text-xs mt-1" aria-hidden="true">
                    ✦
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{edu.institution}</h4>
                    <p className="text-xs text-zinc-400">{edu.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Sub-block */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[#E62E2E] font-display text-xl font-bold" aria-hidden="true">
                  /
                </span>
                <h3 className="font-display text-xl text-white uppercase tracking-wider">
                  Skills
                </h3>
              </div>
              {selectedSkill && (
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="text-[11px] text-zinc-400 hover:text-[#E62E2E] transition-colors cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => {
                const isSelected = selectedSkill === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() =>
                      setSelectedSkill(isSelected ? null : skill.name)
                    }
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E62E2E] ${
                      isSelected
                        ? 'bg-[#4A0D0D] border-[#C81D1D] text-white'
                        : 'bg-[#131315] border-white/10 text-zinc-200 hover:border-[#E62E2E]/60 hover:text-white'
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>

            {activeSkillDetail && (
              <div className="mt-4 p-3.5 rounded-xl bg-[#0f0f10] border border-[#C81D1D]/40 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="font-semibold text-white">
                    {activeSkillDetail.name}
                  </span>
                  <span className="text-[#E62E2E] font-semibold">
                    {activeSkillDetail.level}
                  </span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  {activeSkillDetail.description}
                </p>
                <p className="text-[11px] text-zinc-400 pt-1">
                  Focus: {activeSkillDetail.tools.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* COLUMN 2: Work Process */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#E62E2E] font-display text-xl font-bold" aria-hidden="true">
                /
              </span>
              <h3 className="font-display text-xl text-white uppercase tracking-wider">
                Work Process
              </h3>
            </div>

            {/* Vertical Process Steps with Line */}
            <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[1px] before:bg-[#E62E2E]/40">
              {WORK_PROCESS.map((step) => {
                const isExpanded = activeStep === step.number;
                return (
                  <div key={step.number} className="relative">
                    <span
                      className={`absolute -left-[30px] top-0.5 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold font-mono tabular-nums transition-colors ${
                        isExpanded
                          ? 'bg-[#C81D1D] border-[#E62E2E] text-white'
                          : 'bg-black border-[#E62E2E] text-white'
                      }`}
                    >
                      {step.number}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveStep(isExpanded ? null : step.number)
                      }
                      className="text-left w-full group cursor-pointer focus-visible:outline-none"
                    >
                      <h4 className="text-xs font-bold uppercase text-white flex items-center gap-2 group-hover:text-[#E62E2E] transition-colors">
                        <span>{step.title}</span>
                        <span className="text-[#E62E2E]" aria-hidden="true">
                          →
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {step.description}
                      </p>
                      {isExpanded && (
                        <p className="text-[11px] text-zinc-300 mt-2 pt-2 border-t border-white/10 leading-relaxed">
                          {step.detail}
                        </p>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COLUMN 3: Editorial Quote Box */}
        <div className="lg:col-span-4 bg-[#0f0f10] border border-white/10 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#C81D1D]/50 transition-colors">
          <div>
            <div
              className="text-[#E62E2E] text-5xl font-serif font-bold leading-none mb-3 select-none"
              aria-hidden="true"
            >
              ❝
            </div>
            <blockquote className="text-base sm:text-lg italic font-normal text-zinc-200 leading-snug tracking-tight">
              Good design is not just how it looks, but how it works.
            </blockquote>
          </div>

          {/* Signature */}
          <div className="pt-8">
            <div className="font-script text-4xl text-white transform -rotate-2 select-none tracking-wide">
              Parul
            </div>
            <div className="w-16 h-0.5 bg-[#E62E2E] mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
