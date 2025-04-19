import React from "react";
import Header from "../../partials/Header";
import DonationInfo from "./DonationInfo";
import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";
import DonateInfo from "../../partials/DonateInfo";

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
