import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import TeamCard from "../../partials/TeamCard";

const Team = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <SectionTitle title={"Get to Know Us"} desc={"Our Dedicated Team"} />
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center mt-10">
              <TeamCard
                img={"./img/team-judea.webp"}
                name={"Judea Delos Santos"}
                role={"Communication & Development Staff"}
                email={"judea.delossantos@thefrontline.asia"}
              />
              <TeamCard
                img={"./img/team-mike.webp"}
                name={"Michael Gordon"}
                role={"Spiritual Director"}
                email={"mike.gordon@thefrontline.asia"}
              />
              <TeamCard
                img={"./img/team-jp.webp"}
                name={"John Katigbak"}
                role={"Managing Director"}
                email={"john.katigbak@thefrontline.asia"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
