import React from "react";
import Reveal from "./Reveal";
import { PROJECTS } from "../lib/content";

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-content px-6 py-28 sm:py-36">
      <Reveal className="mb-4">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// projects"}</p>
      </Reveal>
      <Reveal delay={80} className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tightest">
          Things I&apos;ve built for fun.
        </h2>
      </Reveal>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <Reveal key={project.name}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-8 sm:p-12">
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent-glow">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-3 text-lg text-mute">{project.tagline}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-chalk/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 lg:border-l lg:border-white/8 lg:pl-10">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-chalk/70">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
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
