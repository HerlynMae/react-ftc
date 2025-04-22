import React from "react";
import ModalChildDonation from "./modal/ModalChildDonation";

const ChildCard = ({ img, name, link, buttonText, sponsor }) => {
  // const [modalOpen, setModalOpen] = React.useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <div className="card w-[265px] ">
      <div className="relative">
        <img
          className="w-[265px] h-[365px] object-cover"
          src={img}
          alt="child-img"
        />
        <div className="flex justify-between items-center  absolute bottom-0 w-full p-2  bg-black/25 text-white">
          <div className="">
            <h3>{name}</h3>
            <a className="text-secondary hover:text-orange-500" href="#">
              {link}
            </a>
          </div>
          <button className=" flex  items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600">
            {buttonText}
          </button>
          {/* <button
            onClick={openModal}
            className=" flex  items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600"
          >
            {buttonText}
          </button>
          <ModalChildDonation openModal={modalOpen} closeModal={closeModal} /> */}
        </div>
      </div>
      <div className="bg-secondary/60 w-full p-2 ">
        <div className=""></div>
        <p className=" z-30 font-semibold text-base text-white">{sponsor}</p>
      </div>
    </div>
  );
};

export default ChildCard;
