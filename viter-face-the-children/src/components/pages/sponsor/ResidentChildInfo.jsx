import React from "react";
import { useParams } from "react-router-dom";
import ActionButton from "../../partials/ActionButton";
import Header from "../../partials/Header";
import Gift from "../../partials/Gift";
import Footer from "../../partials/Footer";
import { residentChildInfo } from "./sponsor-data";

const ChildInfo = () => {
  const { residentChildInfoId } = useParams();

  const item = residentChildInfo.find(
    (child) => child.residentChildInfoId === residentChildInfoId
  );

  return (
    <>
      <Header />
      <section className="py-20 md:pt-52 md:pb-72">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="max-w-[990px] w-full mx-auto">
              <div className="card w-[265px] mx-auto basis-[265px] shrink-0">
                <div className="relative">
                  <img
                    className="w-[265px] h-[360px] object-cover"
                    src={item.image}
                    alt="child-img"
                  />
                </div>
                <div className="bg-secondary/60 w-full p-2">
                  <p className="z-30 font-semibold text-base text-white">
                    {item.percent}% - Sponsored
                  </p>
                </div>
              </div>
            </div>
            <div className="text-gray-700">
              <h3 className="font-semibold text-xl border-b pb-2">
                {item.name}
              </h3>
              <ul className="flex gap-2 pt-3 pb-1">
                <li>Age:</li>
                <li>{item.age}</li>
              </ul>
              <ul className="flex gap-2 py-1">
                <li>Birthday:</li>
                <li>{item.birthday}</li>
              </ul>
              <h4 className="font-semibold text-lg my-4">{item.story}</h4>
              <p className="text-balance leading-5 mb-5">{item.desc}</p>
              <ActionButton text={"Sponsor Now"} />
            </div>
          </div>
        </div>
      </section>
      <Gift bgColor={"bg-lightGray"} />
      <Footer />
    </>
  );
};

export default ChildInfo;
