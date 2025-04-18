import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";

const Vision = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex lg:flex-row-reverse flex-wrap md:flex-nowrap justify-between  gap-10 lg:gap-5 items-center">
          <img src="./src/assets/about-vision.webp" alt="about-img" />
          <div className="bannerTitle">
            <SectionTitle
              title={"Vision"}
              desc={"Empowering Change, Inspiring Purpose"}
            />
            <p className="my-5 text-gray-700 text-balance">
              A nationwide network of child care centers committed to the
              advocacy, protection, care and development of abandoned, abused,
              or dangerously neglected children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
