import React from "react";
import Reveal from "./Reveal";
import { ABOUT } from "../lib/content";

const STATS = [
  { value: "6+", label: "Years building software" },
  { value: "5", label: "Engineering teams" },
  { value: "∞", label: "AI-assisted workflows" },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative mx-auto max-w-content px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// about"}</p>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-8 max-w-4xl text-[clamp(1.6rem,3.6vw,2.75rem)] font-medium leading-[1.25] tracking-tight text-chalk">
          {ABOUT.split(" ").map((word, i) => (
            <span key={i}>
              {/* subtle emphasis on a few key words */}
              {/clean|fast|tools|AI-assisted|agentic/i.test(word) ? (
                <span className="text-gradient">{word} </span>
              ) : (
                <span className="text-chalk/55">{word} </span>
              )}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="bg-white/[0.02]">
            <div className="flex h-full flex-col justify-center px-8 py-10">
              <span className="text-5xl font-bold tracking-tightest text-accent-glow">{stat.value}</span>
              <span className="mt-2 text-sm text-mute">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
