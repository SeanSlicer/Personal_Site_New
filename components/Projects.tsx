import Reveal from "./Reveal";
import { PROJECTS } from "../lib/content";

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-content px-6 py-28 sm:py-40">
      <Reveal className="mb-14">
        <p className="eyebrow">Projects</p>
        <h2 className="mt-7 max-w-2xl text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-tightest">
          Built for the love of <span className="text-gradient">building.</span>
        </h2>
      </Reveal>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <Reveal key={project.name} variant="scale">
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] p-8 sm:p-14">
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-coral/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-4xl font-bold tracking-tightest sm:text-5xl">{project.name}</h3>
                    <span className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 font-mono text-xs text-mute">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-4 text-xl text-chalk/80">{project.tagline}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-chalk/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3.5 lg:border-l lg:border-white/8 lg:pl-10">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-chalk/70">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gradient-to-r from-coral to-violet-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
