import React from "react";
import SectionTitle from "../../partials/SectionTitle";

const OverviewAboutChildren = () => {
  return (
    <section className="md:pt-[13rem] py-32">
      <div className="container">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between  gap-10">
          <div className="">
            <div className="">
              <SectionTitle
                title={"The Problem"}
                desc={"Rescuing Lives from Poverty and Abuse"}
              />
              <p className="my-5   text-gray-700 md:max-w-xl">
                Historically in the Philippines, due to widespread poverty, the
                problem of abandoned, abused, or dangerously neglected (AADN)
                children has been remarkably large. Many hundreds of thousands
                of children, perhaps millions, have grown up living mostly on
                the streets. There is very minimal governmental protection or
                assistance for what are often termed “street children,” and in
                class-segregated social systems these children are not only
                viewed as a nuisance, but are the target of a wide variety of
                evils.
              </p>
            </div>
            <div className="">
              <div className="">
                <SectionTitle
                  title={"Our Action"}
                  desc={"Creating Lasting Change through Our Intervention"}
                />
              </div>

              <p className="my-5 text-gray-700 md:max-w-lg">
                The Face the Children (FTC) program is established to serve AADN
                children through a program that provides protection, care,
                nurture, education, and spiritual development that affords them
                a genuinely greater opportunity for a dignified and meaningful
                adult life.
              </p>
              <div className="">
                <h3 className="text-lg md:text-2xl font-semibold text-primary">
                  Protect
                </h3>
                <p className="mt-3 mb-5 text-gray-700 md:max-w-md">
                  We provide a safe environment and place for those living in
                  our children’s homes, who are provided full-time care.
                </p>
              </div>
              <div className="">
                <h3 className="text-lg md:text-2xl font-semibold text-primary">
                  Care
                </h3>
                <p className="mt-3 mb-5 text-gray-700 md:max-w-md">
                  We meet the basic physical and material needs for the children
                  in the FTC program
                </p>
              </div>
              <div className="">
                <h3 className="text-lg md:text-2xl font-semibold text-primary">
                  Nurture
                </h3>
                <p className="mt-3 mb-5 text-gray-700 md:max-w-md">
                  We provide loving oversight that involves listening,
                  counseling, and prayer. We do our best to be a parent figure
                  in the lives of the children.
                </p>
              </div>
              <div className="">
                <h3 className="text-lg md:text-2xl font-semibold text-primary">
                  Education
                </h3>
                <p className="mt-3 mb-5 text-gray-700 md:max-w-md">
                  We provide K-12 educational services for all the children in
                  our program, as well as opportunities for University for the
                  higher achievers.
                </p>
              </div>
              <div className="">
                <h3 className="text-lg md:text-2xl font-semibold text-primary">
                  Spiritual Development
                </h3>
                <p className="mt-3 mb-5 text-gray-700 md:max-w-md">
                  As Christians we believe spiritual well-being comes through a
                  meaningful relationship with God. The Bible is our main source
                  of spiritual direction and guidance.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[570px]">
            <img src="./img/s-banner.webp" alt="ftc-program-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewAboutChildren;
