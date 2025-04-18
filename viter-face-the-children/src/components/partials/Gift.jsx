import React from "react";
import SectionTitle from "./SectionTitle";

const Gift = ({ bgColor }) => {
  return (
    <section className={`py-10 lg:py-24   ${bgColor}`}>
      <div className="container">
        <div className="lg:max-w-[640px] mx-auto text-center px-2">
          <SectionTitle title={"Every Gift Counts"} />
          <h2 className=" text-lg lg:text-3xl font-semibold text-gray-700 mb-5">
            Together, We Make a Difference
          </h2>
          <p className="text-balance text-[14px] text-gray-700">
            Together, we lend a helping hand to those in need, offering hope and
            support where it's needed most. From volunteering our time to
            donating resources, each act of kindness strengthens our community
            fabric.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
