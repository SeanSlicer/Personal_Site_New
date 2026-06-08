import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Reveal from "./Reveal";
import Socials from "./Socials";

const toastOpts = {
  position: "top-right" as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const fieldClass =
  "block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-chalk placeholder-mute outline-none transition-colors duration-200 focus:border-accent/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent/20";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-content px-6 py-28 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{"// contact"}</p>
          <h2 className="mt-4 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tightest">
            Let&apos;s build
            <br />
            <span className="text-gradient">something.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
            Got a role, a project, or just want to talk shop? Drop me a line —
            I&apos;ll get back to you within a day or two.
          </p>

          <div className="mt-8">
            <Socials />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={async (e) => {
              setButtonDisable(true);
              e.preventDefault();
              axios
                .post("/api/airtable", { name, email, message })
                .then(function (response) {
                  setName("");
                  setEmail("");
                  setMessage("");
                  if (response) {
                    setButtonDisable(false);
                    toast.success(
                      "Your message has been sent! I'll respond in the next 24-48 hours.",
                      toastOpts
                    );
                  }
                })
                .catch(function (error) {
                  setButtonDisable(false);
                  toast.error("Your message did not send. Please try again.", toastOpts);
                  console.log(error);
                });
            }}
            action="#"
            className="surface space-y-6 rounded-3xl p-7 sm:p-9"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-chalk/80">
                Your name
              </label>
              <input
                value={name}
                autoComplete="name"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-chalk/80">
                Your email
              </label>
              <input
                value={email}
                type="email"
                autoComplete="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-chalk/80">
                Your message
              </label>
              <textarea
                value={message}
                id="message"
                required
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={fieldClass}
                placeholder="Leave a message..."
              />
            </div>
            <button
              type="submit"
              disabled={buttonDisable}
              className="w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent-glow hover:shadow-[0_0_30px_-8px_rgba(52,211,153,0.8)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {buttonDisable ? "Sending..." : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
