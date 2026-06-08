import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-sm text-mute">
          <span className="text-accent">~/</span>sean.slicer
        </span>
        <span className="text-sm text-mute">© {year} Sean Slicer · Built with Next.js</span>
        <a href="#top" className="text-sm text-mute transition-colors hover:text-chalk">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
