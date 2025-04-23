import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-nowrap  justify-between gap-5 items-center">
          <div className="max-w-md">
            <SectionTitle
              title={"Our Solutions"}
              desc={"Services We Provide"}
            />
            <p className="my-5 text-gray-700 md:max-w-[27rem] md:leading-6">
              Making a difference in the lives of children can be simplified
              into a few essential actions focused on their overall well-being.
              Here are the things we provide for our children
            </p>
            <Link to={"/strategy"}>
              <ActionButton text={"Learn More"} />
            </Link>
          </div>
          <div className="">
            <img src="./img/h-service.png" alt="solution-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
