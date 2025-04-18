import React from "react";
import Banner from "./Banner";
import Vision from "./Vision";
import Mission from "./Mission";
import Gift from "../../partials/Gift";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Banner />
      <Vision />
      <Mission />
      <Gift bgColor={"bg-lightGray"} />
      <Footer />
    </>
  );
};

export default About;
