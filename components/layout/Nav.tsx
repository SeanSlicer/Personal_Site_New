import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-content items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass shadow-lg shadow-black/40" : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-chalk"
        >
          <span className="text-accent">~/</span>
          <span className="font-semibold tracking-tight">sean.slicer</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-mute transition-colors duration-200 hover:bg-white/5 hover:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-glow transition-all duration-300 hover:bg-accent/20 hover:shadow-[0_0_24px_-6px_rgba(52,211,153,0.6)]"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
};

export default Nav;
