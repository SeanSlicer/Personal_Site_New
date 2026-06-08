import Reveal from "./Reveal";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-content px-6 py-32 sm:py-44">
      {/* closing glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/10 blur-[140px]"
      />

      <Reveal className="text-center">
        <p className="eyebrow justify-center">Contact</p>
        <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(2.6rem,8vw,6rem)] font-bold leading-[0.98] tracking-tightest">
          Let&apos;s build <span className="text-gradient animate-gradient-pan bg-clip-text">something.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-mute">
          Got a role, a project, or just want to talk shop? Find me on the links
          below — I&apos;m quick to respond.
        </p>

        <div className="mt-11 flex justify-center">
          <Socials />
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
