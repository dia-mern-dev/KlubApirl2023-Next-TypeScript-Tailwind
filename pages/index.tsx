import { NextPage } from "next";
import React from "react";
import Hero from "../components/_page/Hero";
import About from "../components/_page/About";
import Advertise from "../components/_page/Advertise";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Advertise />
    </>
  );
};

export default Home;
