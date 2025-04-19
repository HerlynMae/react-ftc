import React from "react";
import ActionButton from "../../partials/ActionButton";
import SectionTitle from "../../partials/SectionTitle";

const Banner = () => {
  return (
    <section className="py-40 ">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between  gap-10 lg:gap-5 items-center">
          <div className="">
            <div className="bannerTitle">
              <SectionTitle title={"Creating Opportunity"} />
              <h1 className="text-2xl lg:text-[46px] text-balance text-gray-700 mb-10 font-semibold  lg:leading-snug">
                Making a difference for abandoned, abused, or dangerously
                neglected children
              </h1>
              <ActionButton text={"Sponsor Now"} />
            </div>
          </div>
          <div className="">
            <img src="./img/h-banner.png" alt="banner-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
