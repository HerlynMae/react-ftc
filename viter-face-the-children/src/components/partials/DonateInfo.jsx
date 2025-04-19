import React from "react";
import ActionButton from "./ActionButton";

const DonateInfo = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="">
          <div className="flex flex-wrap md:flex-nowrap gap-5 max-w-[850px] w-full mx-auto ">
            <div className="card w-[265px] mx-auto basis-[265px] shrink-0  ">
              <div className="relative">
                <img
                  className="w-[265px] h-[360px] object-cover"
                  src="./img/sponsor-child-opt.jpg"
                  alt="donate-img"
                />
              </div>
            </div>
            <div className="text-gray-700 ">
              <h3 className="font-semibold text-xl border-b pb-2">
                Children Sponsorship
              </h3>

              <p className="text-balance leading-5 mt-3 mb-5">
                Making a difference for abandoned, abused, or dangerously
                neglected children.
              </p>
              <ActionButton text={"Sponsor Now"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateInfo;
