import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap-reverse md:flex-nowrap  justify-between gap-10 lg:gap-5 items-center">
          <div className="">
            <img src="./src/assets/h-about.webp" alt="" />
          </div>
          <div className="max-w-md">
            <SectionTitle
              title={"Who We Are"}
              desc={" Let's Share to Change a life today"}
            />
            <p className="my-5 text-gray-700">
              When we come together as a community, our collective efforts can
              lead to monumental changes. By fostering a culture of sharing, we
              not only help those in immediate need but also build a foundation
              of support and compassion that benefits everyone.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <AboutCard number={"20+"} text={"Years Experience"} />
              <AboutCard number={"10+"} text={"Volunteers"} />
              <AboutCard number={"30+"} text={"Resident Child"} />
              <AboutCard number={"10+"} text={"Non-Resident Child"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
