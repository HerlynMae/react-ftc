import React from "react";
import Header from "../../header/Header";

import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Partners from "./Partners";
import Footer from "../../footer/Footer";

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
