import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="flex items-center gap-2.5 text-sm font-semibold text-chalk">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-coral to-violet-accent text-[10px] font-bold text-ink">
            S
          </span>
          Sean Slicer
        </span>
        <span className="text-sm text-mute">© {year} · Designed &amp; built in Kansas City</span>
        <a href="#top" className="text-sm text-mute transition-colors hover:text-chalk">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
