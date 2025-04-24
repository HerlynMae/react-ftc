import React from "react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ActionButton from "../../partials/ActionButton";
import { useNavigate } from "react-router";
import { donationInfo } from "./donation-data";

const DonationInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-40 md:pt-[13rem]">
      <div className="container">
        <div className="mx-auto max-w-[1300px] w-full px-[15px]">
          <div className="flex flex-wrap justify-center md:flex-nowrap gap-3 md:gap-7 ">
            {donationInfo.map((offer) => (
              <div className="card md:py-5" key={offer.donationInfoId}>
                <img
                  className="w-[265px] h-[360px] object-cover  "
                  src={offer.image}
                  alt="donate-img"
                />
                <div className="relative w-[265px]  h-[260px] px-2 py-4 bg-white shadow-lg ">
                  <div className="">
                    <h3 className="font-semibold mb-4 text-gray-700 text-xl">
                      {offer.title}
                    </h3>
                    <p className="text-xs leading-5 mb-7">
                      {offer.desc.length > 141
                        ? offer.desc.slice(0, 141) + "..."
                        : offer.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-2">
                    <button
                      onClick={() =>
                        navigate(`/donate-info/${offer.donationInfoId}`)
                      }
                      className="text-secondary hover:text-orange-700 mb-3 flex items-center gap-2"
                    >
                      <FaRegArrowAltCircleRight />
                      Read more
                    </button>

                    <ActionButton text={"Donate Now"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
