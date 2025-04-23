import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ChildCard from "../../partials/ChildCard";

const NonResident = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {/* 1 */}
        <ChildCard
          img={"./img/trixie.jpg"}
          name={"Trixie Mae N"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/danica.jpg"}
          name={"Danica V"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/rosemae.jpg"}
          name={"Rose Mae N"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/opt-rachelle.jpg"}
          name={"Rachelle M"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        {/* 2 */}
        <ChildCard
          img={"./img/opt-don.jpg"}
          name={"Richard T"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/marygrace.jpg"}
          name={"Mary Grace V"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/eugene.jpg"}
          name={"Eugene Lance D"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/opt-gladays.jpg"}
          name={"Gladys T"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        {/* 3 */}
        <ChildCard
          img={"./img/julieann.jpg"}
          name={"Julie Ann T"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/opt-mark.jpg"}
          name={"Mark John B"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
        <ChildCard
          img={"./img/opt-marian.jpg"}
          name={"Marian Nhicole B"}
          link={"View Info"}
          buttonText={
            <>
              Sponsor <FaArrowRightLong />
            </>
          }
          sponsor={"0.00% - Sponsored"}
        />
      </div>
    </div>
  );
};

export default NonResident;
