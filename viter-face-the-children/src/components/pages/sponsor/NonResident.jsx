import React from "react";
import { nonResidentChildInfo } from "./sponsor-data";
import ModalChildDonation from "../../partials/modal/ModalChildDonation";
import ChildCard from "../../partials/ChildCard";

const NonResident = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedChild, setSelectedChild] = React.useState(null);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleSponsorClick = (child) => {
    setSelectedChild(child);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {nonResidentChildInfo.map((item) => (
          <ChildCard
            key={item.nonResidentChildInfoId}
            child={item}
            onSponsorClick={handleSponsorClick}
          />
        ))}
      </div>

      {isOpen && (
        <ModalChildDonation
          sectionStyle="translate-y-0 z-20"
          handleClose={() => setIsOpen(false)}
          child={selectedChild}
        />
      )}
    </div>
  );
};

export default NonResident;
