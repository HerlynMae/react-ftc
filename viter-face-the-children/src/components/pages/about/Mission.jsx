import React from "react";
import SectionTitle from "../../partials/SectionTitle";

const Mission = () => {
  return (
    <section className="py-40 ">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap justify-between  gap-10 lg:gap-5 items-center">
          <img src="./img/about-mission.webp" alt="mission-img" />
          <div className="bannerTitle">
            <SectionTitle
              title={"Mission"}
              desc={"Transforming Dreams into Reality"}
            />
            <p className="my-5 md:max-w-lg text-gray-700 text-balance">
              FTC mission is to make a difference in the lives of street
              children by rescuing, protecting, and caring for those that are
              abandoned, abused, or dangerously neglected (AADN). We are making
              a difference in the lives of children in need through child care
              programs and centers that provide full time protection and care,
              academic and spiritual development, and dedicated staff committed
              to the long term welfare and development of AADN children. We are
              committed to doing all that is necessary to guide them into
              adulthood as young men and women who may lead successful adult
              lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
