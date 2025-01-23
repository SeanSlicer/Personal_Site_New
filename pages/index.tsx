import type { NextPage } from "next";
import Footer from "../components/layout/Footer";
import Form from "../components/Form";
import Column from "../components/layout/Column";
import AboutMe from "../components/AboutMe";
import Socials from "../components/Socials";

const Home: NextPage = () => {
  return (
    <Column>
      <div className="sm:py-6" />

      <Socials />

      <AboutMe />

      <Form />

      <Footer />
    </Column>
  );
};

export default Home;
