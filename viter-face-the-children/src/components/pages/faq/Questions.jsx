import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { faqInfo } from "./faq-data";

const Questions = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const AccordionToggle = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <section className="md:pt-[13rem] py-32">
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center">
          <SectionTitle title={"Your Questions, Our Clarity"} />
          <h1 className="text-2xl lg:text-[46px] text-gray-700 mb-10 font-semibold lg:leading-snug">
            Our Commitment to Child Development
          </h1>
        </div>
        {/* Accordion */}
        <div className="my-20">
          {faqInfo.map((item, accordion) => (
            <div key={accordion} className="faqItem relative mb-8">
              <button
                className="inline-block w-full text-left"
                onClick={() => AccordionToggle(accordion)}
              >
                <div
                  className={
                    activeAccordion === accordion
                      ? "question flex  items-center gap-5 cursor-pointer rounded-md border border-primary max-w-xl text-primary p-2  hover:text-white hover:bg-primary"
                      : "question -z-50 flex  items-center gap-5 cursor-pointer rounded-md border text-gray-700 border-gray-200 p-2  max-w-xl mb-5 lg:mb-0 hover:text-white hover:bg-primary duration-500"
                  }
                >
                  <p className="text-xl font-semibold opacity-50">
                    {item.number}
                  </p>
                  <p className="mb-0 text-sm lg:max-w-[85%] question-hover:text-white">
                    {item.question}
                  </p>
                  <span className="md:absolute top-4 left-[48%] text-md flex-grow question-hover:text-white">
                    <FaChevronRight
                      className={
                        activeAccordion === accordion
                          ? "hidden md:block question-text-primary hover:text-white"
                          : "hidden md:block question-text-gray-700 hover:text-white"
                      }
                    />
                    <FaChevronDown
                      className={
                        activeAccordion === accordion
                          ? "block md:hidden text-primary question-hover:text-white"
                          : "block md:hidden text-gray-700  question-hover:text-white"
                      }
                    />
                  </span>
                </div>
              </button>

              <div
                className={`answer leading-snug text-gray-700 top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md ${
                  activeAccordion === accordion ? "" : "hidden"
                }`}
              >
                <p className="leading-snug text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
