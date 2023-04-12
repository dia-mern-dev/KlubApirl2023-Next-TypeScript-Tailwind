import { NextPage } from "next";
import React from "react";
import Hero from "../components/_page/Hero";
import About from "../components/_page/About";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
