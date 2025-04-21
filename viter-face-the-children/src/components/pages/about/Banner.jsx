import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="md:pt-[13rem] py-40">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap justify-between  gap-10  items-center ">
          <img src="./img/about-banner.webp" alt="children-img" />
          <div className=" bannerTitle">
            <SectionTitle title={"From Streets to Smiles"} />
            <h1 className="text-2xl lg:text-[45px] text-balance text-gray-700 mb-10 font-semibold  lg:leading-snug">
              Transform lives from the harsh reality of the streets to the
              warmth and comfort of genuine smiles
            </h1>
            <Link to={"/sponsor"}>
              <ActionButton text={"Sponsor Now"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
