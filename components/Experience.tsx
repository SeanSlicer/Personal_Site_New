import Reveal from "./Reveal";
import { EXPERIENCE } from "../lib/content";

export const Experience = () => {
  return (
    <section id="work" className="relative mx-auto max-w-content px-6 py-28 sm:py-36">
      <Reveal className="mb-4">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// experience"}</p>
      </Reveal>
      <Reveal delay={80} className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tightest">
          <span className="font-mono text-mute">git log</span> --author=sean
        </h2>
      </Reveal>

      <div className="relative">
        {/* the commit "branch" line */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-[9px]"
        />

        <ol className="space-y-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" key={job.hash} delay={i * 60} className="relative pl-10 sm:pl-14">
              {/* commit node */}
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-accent/50 bg-ink sm:h-5 sm:w-5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(52,211,153,0.7)]" />
              </span>

              <div className="surface rounded-2xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mute">
                  <span className="text-accent">commit {job.hash}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>
                    {job.start} → {job.end}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-chalk sm:text-2xl">
                  {job.role}{" "}
                  <span className="text-mute">@</span>{" "}
                  <span className="text-gradient">{job.company}</span>
                </h3>
                <p className="mt-1 text-sm text-mute">{job.location}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-chalk/70">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
