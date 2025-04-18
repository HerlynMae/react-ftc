import React from "react";
import SectionTitle from "../../partials/SectionTitle";

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
              <div className="card">
                <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">
                  20+
                </h2>
                <small className="text-gray-700">Years Experience</small>
              </div>
              <div className="card">
                <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">
                  10+
                </h2>
                <small className="text-gray-700">Volunteers</small>
              </div>
              <div className="card">
                <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">
                  30+
                </h2>
                <small className="text-gray-700">Resident Child</small>
              </div>
              <div className="card">
                <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">
                  10+
                </h2>
                <small className="text-gray-700">Non-Resident Child</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
