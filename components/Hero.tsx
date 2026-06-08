import { useEffect, useState } from "react";
import { HERO_LINES } from "../lib/content";

/** Types out the hero terminal lines character-by-character, then loops the cursor. */
function useTypewriter(lines: string[]) {
  const [rendered, setRendered] = useState<string[]>([""]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRendered(lines);
      setDone(true);
      return;
    }

    let line = 0;
    let char = 0;
    let active = true;
    const out: string[] = [""];

    const tick = () => {
      if (!active) return;
      if (line >= lines.length) {
        setDone(true);
        return;
      }
      const current = lines[line];
      out[line] = current.slice(0, char + 1);
      setRendered([...out]);
      char += 1;
      if (char >= current.length) {
        line += 1;
        char = 0;
        out[line] = "";
        setTimeout(tick, 380);
      } else {
        // prompt lines type a touch faster than output lines
        setTimeout(tick, current.startsWith("$") ? 42 : 22);
      }
    };

    const start = setTimeout(tick, 500);
    return () => {
      active = false;
      clearTimeout(start);
    };
  }, [lines]);

  return { rendered, done };
}

const Hero = () => {
  const { rendered, done } = useTypewriter(HERO_LINES);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Ambient gradient field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 opacity-60 blur-[120px] animate-blob-drift" />
        <div className="absolute right-[12%] top-[55%] h-[42vmax] w-[42vmax] rounded-full bg-violet-accent/20 opacity-50 blur-[120px] animate-blob-drift [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#06070a_100%)]" />
      </div>

      <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-accent animate-fade-up">
        Software Engineer · Kansas City
      </p>

      <h1 className="max-w-5xl text-center text-[clamp(3rem,11vw,8.5rem)] font-bold leading-[0.92] tracking-tightest animate-fade-up [animation-delay:80ms]">
        <span className="text-gradient animate-gradient-pan bg-clip-text">Sean Slicer</span>
      </h1>

      <p className="mt-7 max-w-xl text-center text-lg leading-relaxed text-mute animate-fade-up [animation-delay:160ms] sm:text-xl">
        I build full-stack products and the data systems behind them — with a
        heavy dose of AI-assisted, agentic development.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
        <a
          href="#work"
          className="rounded-full bg-chalk px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-chalk transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
        >
          Get in touch
        </a>
      </div>

      {/* Terminal card */}
      <div className="mt-16 w-full max-w-xl animate-fade-up [animation-delay:320ms]">
        <div className="surface overflow-hidden rounded-2xl text-left shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-mute">— bash —</span>
          </div>
          <div className="min-h-[150px] px-5 py-4 font-mono text-sm leading-7">
            {rendered.map((line, i) => {
              const isPrompt = line.startsWith("$");
              const isLast = i === rendered.length - 1;
              return (
                <div key={i} className={isPrompt ? "text-accent-glow" : "text-chalk/90"}>
                  {isPrompt ? <span className="text-accent">➜ </span> : <span className="text-mute">{"  "}</span>}
                  {isPrompt ? line.slice(2) : line}
                  {isLast && !done && (
                    <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
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
