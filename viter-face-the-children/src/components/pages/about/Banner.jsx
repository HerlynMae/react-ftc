import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";

const Banner = () => {
  return (
    <section className="py-40">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between  gap-10 lg:gap-5 items-center">
          <img src="./src/assets/about-banner.webp" alt="about-img" />
          <div className="max-w-xl">
            <SectionTitle title={"From Streets to Smiles"} />
            <h1 className="text-2xl lg:text-5xl text-gray-700 mb-10 font-semibold  lg:leading-snug">
              Transform lives from the harsh reality of the streets to the
              warmth and comfort of genuine smiles
            </h1>
            <ActionButton text={"Sponsor Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
