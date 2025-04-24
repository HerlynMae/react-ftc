import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { residentChildInfo } from "./sponsor-data";
import { useNavigate } from "react-router";
import ModalChildDonation from "../../partials/modal/ModalChildDonation";

const Resident = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedChild, setSelectedChild] = React.useState(null);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
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
                  onClick={() => {
                    setSelectedChild(item);
                    setIsOpen(true);
                  }}
                  className="flex items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600"
                >
                  Sponsor <FaArrowRightLong />
                </button>
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
      {/* translate-y-0 z-20 translate-y-[100vh]*/}
      {isOpen && (
        <>
          <ModalChildDonation
            sectionStyle={
              isOpen ? `translate-y-0 z-20` : `translate-y-[-100vh] `
            }
            handleClose={() => setIsOpen(false)}
            child={selectedChild}
          />
        </>
      )}
    </div>
  );
};

export default Resident;
