import type { NextPage } from "next";
import { Footer } from "../components/layout/Footer";
import Form from "../components/Form";
import Column from "../components/layout/Column";
import { AboutMe } from "../components/AboutMe";
import { Nav } from "../components/layout/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Column className="flex flex-col items-center">
        <AboutMe />
      </Column>
      <Form />
      <Footer />
    </>
  );
};

export default Home;
