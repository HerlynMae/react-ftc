import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Resident = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="card w-[265px] ">
          <div className="relative">
            <img
              className="w-[265px] h-[365px] object-cover"
              src="./img/John-luke-b.jpg"
              alt="child-img"
            />
            <div className="flex justify-between items-center  absolute bottom-0 w-full p-2  bg-black/25 text-white">
              <div className="">
                <h3>John Luke B</h3>
                <a className="text-secondary hover:text-orange-500" href="#">
                  View Info
                </a>
              </div>
              <button className=" flex  items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600">
                Sponsor <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="bg-secondary/60 w-full p-2 ">
            <div className=""></div>
            <p className=" z-30 font-semibold text-base text-white">
              0.00% - Sponsored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resident;
