import React from "react";

export const Nav = () => {
  return (
    <nav className="rounded-b-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:block hidden  ">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="#AboutMe"
                className="text-gray-300 transition ease-in-out delay-150 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                About Me
              </a>

              <a
                href="#Experience"
                className="text-gray-300 transition ease-in-out delay-150 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </a>

              <a
                href="#ContactMe"
                className="text-gray-300 transition ease-in-out delay-150 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
