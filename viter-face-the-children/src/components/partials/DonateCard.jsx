import React from "react";
import ActionButton from "./ActionButton";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const DonateCard = ({ img, title, desc }) => {
  return (
    <div className="card md:py-5">
      <img
        className="w-[265px] h-[360px] object-cover  "
        src={img}
        alt="donate-img"
      />
      <div className="relative w-[265px]  h-[260px] px-2 py-4 bg-white shadow-lg ">
        <div className="">
          <h3 className="font-semibold mb-4 text-gray-700 text-xl">{title}</h3>
          <p className="text-xs leading-5 mb-7">{desc}</p>
        </div>
        <div className="absolute bottom-5 left-2">
          <a
            className="text-secondary hover:text-orange-700 mb-3 flex items-center gap-2"
            href="#"
          >
            <FaRegArrowAltCircleRight />
            Read more
          </a>
          <ActionButton text={"Donate Now"} />
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
