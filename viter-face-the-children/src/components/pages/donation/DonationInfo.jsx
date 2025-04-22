import React from "react";
import DonateCard from "../../partials/DonateCard";

const DonationInfo = () => {
  return (
    <section className="pt-32 pb-40 md:pt-[13rem]">
      <div className="container">
        <div className="mx-auto max-w-[1300px] w-full px-[15px]">
          <div className="flex flex-wrap justify-center md:flex-nowrap gap-3 md:gap-7 ">
            <DonateCard
              img={"./img/sponsor-child-opt.jpg"}
              title={"Children Sponsorship"}
              desc={
                "Making a difference for abandoned, abused, or dangerously neglected children."
              }
            />
            <DonateCard
              img={"./img/feeding.jpg"}
              title={"Feeding Program"}
              desc={
                "Weekly Community Development Programs (CDP) in impoverished communities. These gatherings consist of providing a meal for the children, story-"
              }
            />
            <DonateCard
              img={"./img/General-giving.jpg"}
              title={"General Donation"}
              desc={
                "Give unrestricted gifts that allow Frontline to direct these funds where they are most needed. Your giving allows us to continue to actively partner with needs "
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
