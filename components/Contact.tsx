import Reveal from "./Reveal";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-content px-6 py-28 sm:py-36">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// contact"}</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tightest">
          Let&apos;s build <span className="text-gradient">something.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-mute">
          Got a role, a project, or just want to talk shop? The fastest way to
          reach me is email.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="mailto:sean.slicer@gmail.com"
            className="rounded-full bg-chalk px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
          >
            sean.slicer@gmail.com
          </a>
          <Socials />
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
