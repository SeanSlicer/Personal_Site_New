import type { NextPage } from "next";
import { Footer } from "../components/layout/Footer";
import Form from "../components/Form";
import Column from "../components/layout/Column";

const Home: NextPage = () => {
  return (
    <>
      <Form />
      <Footer />
    </>
  );
};

export default Home;
