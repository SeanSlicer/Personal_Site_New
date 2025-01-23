import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shadow-sm-bottom border-t border-gray-200 bg-white">
      <div className="text-center p-6 bg-gray-200">
        <span>© {year} Copyright Sean Slicer</span>
      </div>
    </footer>
  );
};

export default Footer;
