import Column from "../components/layout/Column";

export const AboutMe = () => {
  return (
    <section id="AboutMe">
      <h1 className=" my-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        About Me
      </h1>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <article id="AboutMeDescription">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 lg:group-hover:opacity-100 transition duration-500 group-hover:duration-400 "></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <p className="my-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white">
                  I&apos;m Sean. An efficient engineer with great detailing
                  skills, a hunger for knowledge, and pride myself on keeping up
                  to date with modern technologies.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
