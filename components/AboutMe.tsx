import Reveal from "./Reveal";
import { ABOUT } from "../lib/content";

const STATS = [
  { value: "6+", label: "Years building software" },
  { value: "5", label: "Engineering teams" },
  { value: "AI", label: "Agentic-first workflow" },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative mx-auto max-w-content px-6 py-28 sm:py-40">
      <Reveal>
        <p className="eyebrow">About</p>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-9 max-w-4xl text-[clamp(1.7rem,3.8vw,3rem)] font-medium leading-[1.22] tracking-tight">
          {ABOUT.split(" ").map((word, i) => (
            <span key={i}>
              {/clean|fast|tools|AI-assisted|agentic/i.test(word) ? (
                <span className="text-gradient">{word} </span>
              ) : (
                <span className="text-chalk/55">{word} </span>
              )}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="bg-white/[0.02]">
            <div className="flex h-full flex-col justify-center px-8 py-11">
              <span className="bg-gradient-to-br from-coral-glow to-violet-glow bg-clip-text text-5xl font-bold tracking-tightest text-transparent sm:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 text-sm text-mute">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
