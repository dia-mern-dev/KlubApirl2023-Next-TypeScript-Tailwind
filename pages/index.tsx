import { NextPage } from "next";
import React from "react";
import Hero from "../components/_page/Hero";
import About from "../components/_page/About";
import Advertise from "../components/_page/Advertise";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Advertise />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
