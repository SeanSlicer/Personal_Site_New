import Color from "color";
import Link from "next/link";
import React from "react";

type Props = {
  color?: string;
};

export const Footer: React.FC<Props> = (props) => {
  const { color } = props;

  return (
    <footer className="shadow-sm-bottom border-t border-gray-200 bg-white">
      <div className="text-center p-6 bg-gray-200">
        <span>© {new Date().getFullYear()} Copyright Sean Slicer</span>
      </div>
    </footer>
  );
};
