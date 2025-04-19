import React from "react";
import ChildCard from "./ChildCard";
import ActionButton from "./ActionButton";

const ChildInfo = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className=" max-w-[990px] w-full mx-auto ">
            <div className="card w-[265px] mx-auto basis-[265px] shrink-0  ">
              <div className="relative">
                <img
                  className="w-[265px] h-[360px] object-cover"
                  src="./img/John-luke-b.jpg"
                  alt="child-img"
                />
              </div>
              <div className="bg-secondary/60 w-full p-2 ">
                <div className=""></div>
                <p className=" z-30 font-semibold text-base text-white">
                  0.00% - Sponsored
                </p>
              </div>
            </div>
          </div>

          <div className="text-gray-700 ">
            <h3 className="font-semibold text-xl border-b pb-2">
              John Luke B.
            </h3>
            <ul className="flex gap-2 pt-3 pb-1">
              <li>Age:</li>
              <li>12</li>
            </ul>
            <ul className="flex gap-2 py-1">
              <li>Birthday:</li>
              <li>Jul 3, 2013</li>
            </ul>
            <h4 className="font-semibold text-lg my-4">My Story</h4>
            <p className="text-balance leading-5 mb-5">
              John Luke, or JL, as he is called by his friends was neglected and
              then abandoned by his parents. When the mother and father
              separated JL and his siblings were in the care of their mother.
              The mother went to work overseas and left them in the care of
              another man who abandoned them. The mother does not respond to
              contact. JL is enrolled in grade 3 at Frontline Christian Academy
              and is interacting well within Face the Children. Sponsor Now
            </p>
            <ActionButton text={"Sponsor Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildInfo;
