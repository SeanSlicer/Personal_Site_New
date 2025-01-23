import { FC, useEffect, useState } from "react";

const Footer: FC = () => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <footer className="shadow-sm-bottom border-t border-gray-200 bg-white">
      <div className="text-center p-6 bg-gray-200">
        <span>© {date ? date.getFullYear() : ""} Copyright Sean Slicer</span>
      </div>
    </footer>
  );
};

export default Footer;
