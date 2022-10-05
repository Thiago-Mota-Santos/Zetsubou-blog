import type { NextPage } from "next";
import Banner from "../components/Banner";
import Content from "../components/Content";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
};

export default Home;
