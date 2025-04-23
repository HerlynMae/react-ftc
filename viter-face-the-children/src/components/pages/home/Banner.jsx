import React from "react";
import ActionButton from "../../partials/ActionButton";
import SectionTitle from "../../partials/SectionTitle";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="pt-52 pb-40 ">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between  gap-10 lg:gap-5 items-center">
          <div className="">
            <div className="bannerTitle">
              <SectionTitle title={"Creating Opportunity"} />
              <h1 className="text-2xl lg:text-[46px] text-balance text-gray-700 mb-10 font-semibold  lg:leading-snug">
                Making a difference for abandoned, abused, or dangerously
                neglected children
              </h1>
              <Link to={"/sponsor"}>
                <ActionButton text={"Sponsor Now"} />
              </Link>
            </div>
          </div>
          <div className="">
            <img
              src="./img/h-banner.png"
              alt="children-img"
              className="lg:w-full lg:h-[35rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
