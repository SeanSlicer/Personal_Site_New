import Reveal from "./Reveal";
import { EXPERIENCE } from "../lib/content";
import { useScrollProgress } from "../lib/hooks";

const Experience = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="work" className="relative mx-auto max-w-content px-6 py-28 sm:py-40">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
        {/* Sticky intro + progress rail */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-7 text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-tightest">
              Six years,
              <br />
              <span className="text-gradient">five teams.</span>
            </h2>
            <p className="mt-6 max-w-sm text-mute">
              From mainframe-adjacent banking systems to RESO-compliant real
              estate data at scale — here&apos;s the through-line.
            </p>
          </Reveal>

          <div className="mt-10 hidden h-1 w-full overflow-hidden rounded-full bg-white/8 lg:block">
            <div
              className="h-full rounded-full bg-gradient-to-r from-coral to-violet-accent transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>

        {/* Job lineup */}
        <ol className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <Reveal as="li" variant="scale" key={job.company} delay={i * 40}>
              <article className="surface group rounded-3xl p-7 transition-colors duration-300 hover:border-white/16 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-chalk sm:text-2xl">
                    {job.company}
                  </h3>
                  <span className="font-mono text-sm text-mute">
                    {job.start} – {job.end}
                  </span>
                </div>
                <p className="mt-1 text-sm text-coral-glow">
                  {job.role} · {job.location}
                </p>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-chalk/70">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gradient-to-r from-coral to-violet-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
