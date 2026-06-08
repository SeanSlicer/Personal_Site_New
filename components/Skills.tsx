import React from "react";
import Reveal from "./Reveal";
import { SKILLS } from "../lib/content";

const MARQUEE = SKILLS.flatMap((g) => g.items);

const Skills = () => {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="mb-4">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// stack"}</p>
        </Reveal>
        <Reveal delay={80} className="mb-16">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tightest">
            The tools I reach for.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.key} delay={i * 70}>
              <div className="surface h-full rounded-2xl p-6 font-mono text-sm transition-colors duration-300 hover:border-accent/30">
                <div className="mb-4 text-xs text-mute">{group.label}</div>
                <div className="leading-7">
                  <span className="text-violet-accent">const</span>{" "}
                  <span className="text-accent-glow">{group.key}</span>{" "}
                  <span className="text-mute">= [</span>
                  <div className="pl-4">
                    {group.items.map((item, j) => (
                      <div key={item} className="text-chalk/80">
                        <span className="text-accent">&quot;{item}&quot;</span>
                        {j < group.items.length - 1 && <span className="text-mute">,</span>}
                      </div>
                    ))}
                  </div>
                  <span className="text-mute">];</span>
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
