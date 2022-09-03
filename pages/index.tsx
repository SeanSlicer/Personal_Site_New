import type { NextPage } from "next";
import { Footer } from "../components/layout/Footer";
import Form from "../components/Form";
import Column from "../components/layout/Column";
import { AboutMe } from "../components/AboutMe";
import { Nav } from "../components/layout/Nav";

const Home: NextPage = () => {
  return (
    <>
      <div className="sm:py-6" />
      <AboutMe />

      <Form />

      <Footer />
    </>
  );
};

export default Home;
