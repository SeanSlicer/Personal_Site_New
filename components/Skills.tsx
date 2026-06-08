import Reveal from "./Reveal";
import { SKILLS } from "../lib/content";

const MARQUEE = SKILLS.flatMap((g) => g.items);

const Skills = () => {
  return (
    <section id="stack" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="mb-14">
          <p className="eyebrow">Stack</p>
          <h2 className="mt-7 max-w-2xl text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-tightest">
            The tools I reach for.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.key} delay={i * 70}>
              <div className="surface h-full rounded-2xl p-7 transition-colors duration-300 hover:border-coral/30">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-coral to-violet-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-chalk">
                    {group.label}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-sm text-chalk/75 transition-colors duration-200 hover:border-white/16 hover:text-chalk"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Infinite marquee of technologies */}
      <div className="mask-fade-x mt-16 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-4">
          {[...MARQUEE, ...MARQUEE].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-white/8 bg-white/[0.02] px-5 py-2 text-sm text-mute"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
