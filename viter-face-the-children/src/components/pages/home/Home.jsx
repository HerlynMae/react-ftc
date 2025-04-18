import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Partners from "./Partners";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
