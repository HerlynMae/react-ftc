import React from "react";
import Header from "../../partials/Header";
import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";
import { useParams } from "react-router";
import { offerInfo } from "./donation-data";
import ActionButton from "../../partials/ActionButton";

const DonateInfo = () => {
  const { donationInfoId } = useParams();
  const offer = offerInfo.find(
    (donate) => donate.donationInfoId === donationInfoId
  );
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="container">
          <div className="">
            <div className="flex flex-wrap md:flex-nowrap gap-5 max-w-[850px] w-full mx-auto ">
              <div className="card w-[265px] mx-auto basis-[265px] shrink-0  ">
                <div className="relative">
                  <img
                    className="w-[265px] h-[360px] object-cover"
                    src={offer.image}
                    alt="donate-img"
                  />
                </div>
              </div>
              <div className="text-gray-700 ">
                <h3 className="font-semibold text-xl border-b pb-2">
                  {offer.title}
                </h3>

                <p className="text-balance leading-5 mt-3 mb-5">{offer.desc}</p>
                <ActionButton text={"Sponsor Now"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gift bgColor={"bglightGray"} />
      <Footer />
    </>
  );
};

export default DonateInfo;
