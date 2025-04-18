import React from "react";
import OverviewAboutChildren from "./OverviewAboutChildren";
import Header from "../../partials/Header";
import LoveChilden from "./LoveChilden";
import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";

const Strategy = () => {
  return (
    <>
      <Header />
      <OverviewAboutChildren />
      <LoveChilden />
      <Gift bgColor={"bg-white"} />
      <Footer />
    </>
  );
};

export default Strategy;
