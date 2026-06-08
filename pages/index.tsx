import type { NextPage } from "next";
import Nav from "../components/layout/Nav";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Form from "../components/Form";
import Footer from "../components/layout/Footer";

const Home: NextPage = () => {
  return (
    <main className="grain relative">
      <Nav />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Form />
      <Footer />
    </main>
  );
};

export default Home;
