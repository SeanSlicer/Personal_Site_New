import { useMouseParallax } from "../lib/hooks";

const Hero = () => {
  const m = useMouseParallax();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24"
    >
      {/* Ambient gradient field — drifts with the pointer for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[38%] h-[62vmax] w-[62vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/25 opacity-70 blur-[130px] animate-blob-drift"
          style={{ transform: `translate3d(calc(-50% + ${m.x * 24}px), calc(-50% + ${m.y * 24}px), 0)` }}
        />
        <div
          className="absolute right-[14%] top-[58%] h-[44vmax] w-[44vmax] rounded-full bg-violet-accent/25 opacity-60 blur-[130px] animate-blob-drift [animation-delay:-7s]"
          style={{ transform: `translate3d(${m.x * -30}px, ${m.y * -30}px, 0)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#0a0a0c_100%)]" />
      </div>

      {/* Floating glass shards (Keynote depth) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="glass absolute left-[12%] top-[26%] rounded-2xl px-4 py-3 text-sm text-mute animate-float"
          style={{ transform: `translate3d(${m.x * 36}px, ${m.y * 36}px, 0)` }}
        >
          <span className="text-coral-glow">●</span> TypeScript · C# / .NET
        </div>
        <div
          className="glass absolute right-[11%] top-[34%] rounded-2xl px-4 py-3 text-sm text-mute animate-float [animation-delay:-3s]"
          style={{ transform: `translate3d(${m.x * 48}px, ${m.y * 48}px, 0)` }}
        >
          <span className="text-violet-glow">●</span> AI-assisted engineering
        </div>
        <div
          className="glass absolute bottom-[22%] left-[18%] rounded-2xl px-4 py-3 text-sm text-mute animate-float [animation-delay:-5s]"
          style={{ transform: `translate3d(${m.x * 28}px, ${m.y * 28}px, 0)` }}
        >
          <span className="text-coral-glow">●</span> data &amp; search systems
        </div>
      </div>

      <p className="eyebrow mb-7 animate-fade-up">Software Engineer — Kansas City</p>

      {/* Headline with subtle pointer tilt */}
      <div className="[perspective:1200px]">
        <h1
          className="max-w-5xl text-center text-[clamp(3.2rem,12vw,9.5rem)] font-bold leading-[0.9] tracking-tightest transition-transform duration-300 ease-out animate-fade-up [animation-delay:80ms]"
          style={{ transform: `rotateX(${m.y * -4}deg) rotateY(${m.x * 4}deg)` }}
        >
          <span className="text-gradient animate-gradient-pan bg-clip-text">Sean Slicer</span>
        </h1>
      </div>

      <p className="mt-8 max-w-xl text-center text-lg leading-relaxed text-mute animate-fade-up [animation-delay:160ms] sm:text-xl">
        I build full-stack products and the data systems behind them — and I lean
        hard into AI-assisted, agentic development to ship faster.
      </p>

      <div className="mt-11 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
        <a
          href="#work"
          className="rounded-full bg-chalk px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-chalk transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
        >
          Get in touch
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute transition-colors hover:text-chalk"
      >
        <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
