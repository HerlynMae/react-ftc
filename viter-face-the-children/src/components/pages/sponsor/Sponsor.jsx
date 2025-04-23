import React from "react";
import Header from "../../partials/Header";
import ChildrenSponsorship from "./ChildrenSponsorship";
import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";
import ChildInfo from "./ResidentChildInfo";

const Sponsor = () => {
  return (
    <>
      <Header />
      <ChildrenSponsorship />
      <Gift bgColor={"bg-lightGray"} />
      <Footer />
    </>
  );
};

export default Sponsor;
