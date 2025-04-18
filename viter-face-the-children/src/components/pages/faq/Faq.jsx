import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Gift from "../../partials/Gift";
import Questions from "./Questions";
import Contact from "./Contact";

const Faq = () => {
  return (
    <>
      <Header />
      <Questions />
      <Contact />
      <Gift bgColor={"bg-white"} />
      <Footer />
    </>
  );
};

export default Faq;
