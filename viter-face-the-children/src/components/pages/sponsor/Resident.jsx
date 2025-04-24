import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { residentChildInfo } from "./sponsor-data";
import { useNavigate } from "react-router";
import ModalChildDonation from "../../partials/modal/ModalChildDonation";

const Resident = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {residentChildInfo.map((item) => (
          <div className="card w-[265px]" key={item.residentChildInfoId}>
            <div className="relative">
              <img
                className="w-[265px] h-[365px] object-cover"
                src={item.image}
                alt="child-img"
              />
              <div className="flex justify-between items-center absolute bottom-0 w-full p-2 bg-black/25 text-white">
                <div>
                  <h3>{item.name}</h3>
                  <button
                    onClick={() =>
                      navigate(
                        `/resident-child-info/${item.residentChildInfoId}`
                      )
                    }
                    className="text-secondary hover:text-orange-500"
                  >
                    View Info
                  </button>
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600"
                >
                  Sponsor <FaArrowRightLong />
                </button>

                {isOpen && (
                  <div
                    className="bg-black/5 fixed inset-0 w-full h-full left-0 top-0 z-1 grid place-content-center"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  ></div>
                  
                )}
                {isOpen && (
                  <ModalChildDonation
                    sectionStyle={
                      isOpen ? "translate-y-0" : "translate-y-[100vh]"
                    }
                  />
                )}
              </div>
            </div>
            <div className="bg-secondary/60 w-full p-2">
              <p className="z-30 font-semibold text-base text-white">
                {item.percent}%- Sponsored
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resident;
