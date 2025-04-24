import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { faqInfo } from "./faq-data";

const Questions = () => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  return (
    <section className="md:pt-[13rem] py-32 ">
      <div className="max-w-6xl mx-auto px-3 ">
        <div className="text-center">
          <SectionTitle title={"Your Questions, Our Clarity"} />
          <h1 className="text-2xl lg:text-[46px] text-gray-700 mb-10 font-semibold  lg:leading-snug">
            Our Commitment to Child Development
          </h1>
        </div>
        {/* accordion */}
        <div className="my-20  ">
          {faqInfo.map((item) => (
            <div className="faqItem relative mb-8 ">
              <button
                className="inline-block w-full text-left"
                onClick={() => setAccordionOpen(!accordionOpen)}
              >
                <div className="question">
                  <p className="text-xl font-semibold opacity-50 ">
                    {item.number}
                  </p>
                  <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                    {item.question}
                  </p>
                  <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                    <FaChevronRight className="hidden md:block" />
                    <FaChevronDown className="block md:hidden" />
                  </span>
                </div>
              </button>

              <div
                className={
                  accordionOpen
                    ? ""
                    : "answer leading-snug text-gray-700 top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md"
                }
              >
                <p
                  className={
                    accordionOpen ? "hidden" : "leading-snug text-gray-700"
                  }
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}

          {/* <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">02</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                How can you make sure our payment is secure?
              </p>
              <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                <FaChevronRight className="hidden md:block" />
                <FaChevronDown className="block md:hidden" />
              </span>
            </div>
            <div className="answer hidden top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                Our online donation transaction is a secure SSL encrypted
                payment using Stripe payment processor with the best-in-class
                security tools and practices to maintain a high level of
                security.
              </p>
            </div>
          </div>
          <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">03</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                Can I update my card number using your website?
              </p>
              <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                <FaChevronRight className="hidden md:block" />
                <FaChevronDown className="block md:hidden" />
              </span>
            </div>
            <div className="answer hidden  top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                Yes. You can change it on your account settings. Login to your
                donor console.
              </p>
            </div>
          </div>
          <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">04</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                Will I receive personal updates from FTC and the child I pledge
                to on a regular basis?
              </p>
              <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                <FaChevronRight className="hidden md:block" />
                <FaChevronDown className="block md:hidden" />
              </span>
            </div>
            <div className="answer hidden  top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                Yes, you will receive regular updates about the progress and
                developments of our program. Additionally, from time to time you
                will receive communications directly from the child you sponsor.
              </p>
            </div>
          </div>
          <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">05</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                Can I make a pledge to more than one FTC Child?
              </p>
              <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                <FaChevronRight className="hidden md:block" />
                <FaChevronDown className="block md:hidden" />
              </span>
            </div>
            <div className="answer hidden  top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                Yes. We welcome your pledges to as many children as possible!
              </p>
            </div>
          </div>
          <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">07</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                How much does an FTC Child Partner Pledge Cost?
              </p>
              <span className="md:absolute top-4 left-[48%] text-md flex-grow ">
                <FaChevronRight className="hidden md:block" />
                <FaChevronDown className="block md:hidden" />
              </span>
            </div>
            <div className="answer hidden  top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                You can partner with us by sponsoring a child for as little as
                $20 monthly. You can also select higher sponsorship amounts if
                the child has remaining full-care needs. Please see the options
                presented for a selected child on the sponsorship page.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Questions;
