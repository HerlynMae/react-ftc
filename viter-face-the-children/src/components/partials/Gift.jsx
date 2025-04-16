import React from "react";
import SectionTitle from "./SectionTitle";

const Gift = () => {
  return (
    <section className="py-24 bg-lightGray">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center">
          <SectionTitle title={"Every Gift Counts"} />
          <h2 className=" text-xl lg:text-4xl font-semibold text-gray-700 mb-5">
            Together, We Make a Difference
          </h2>
          <p className="max-w-lg text-[14px] text-gray-700">
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
