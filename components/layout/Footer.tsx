import Color from "color";
import Link from "next/link";
import { FC, useState } from "react";

type Props = {
  color?: string;
};

export const Footer: FC<Props> = (props) => {
  const [date, setDate] = useState<Date>(new Date());
  const { color } = props;

  return (
    <footer className="shadow-sm-bottom border-t border-gray-200 bg-white">
      <div className="text-center p-6 bg-gray-200">
        <span>© {date.getFullYear()} Copyright Sean Slicer</span>
      </div>
    </footer>
  );
};
