import React from "react";
import Header from "../../partials/Header";

import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";
import DonationInfo from "./DonationInfo";
import DonateInfo from "./DonateInfo";

const Donation = () => {
  return (
    <>
      <Header />
      <DonationInfo />
      <Gift bgColor={"bg-lightGray"} />
      <Footer />
    </>
  );
};

export default Donation;
