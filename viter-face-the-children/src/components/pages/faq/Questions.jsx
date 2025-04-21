import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import { FaChevronRight } from "react-icons/fa";
import QuestionAndAnswer from "../../partials/QuestionAndAnswer";

const dropdowns = document.querySelectorAll(".question");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    // event.preventDefault();
    // select the sibling - answer
    const answer = dropdown.nextElementSibling;
    if (!answer) return;
    // one at a time - if the answer is not hidden add the hidden class
    if (!answer.classList.contains("hidden")) {
      answer.classList.add("hidden");
      return;
    }
    document.querySelectorAll(".question").forEach(function (q) {
      q.classList.remove("active");
    });
    // close all other answers
    document.querySelectorAll(".answer").forEach((a) => {
      a.classList.add("hidden");
    });
    // open the clicked one
    answer.classList.remove("hidden");
    dropdown.classList.add("active");
  });
});

const Questions = () => {
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
          <div className="faqItem relative mb-8 ">
            <div className="question active">
              <p className="text-xl font-semibold opacity-50 ">01</p>

              <p className="mb-0 text-sm lg:max-w-[85%]   question-hover:text-white">
                Can I communicate with the child I have made a Pledge to?
              </p>
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
              </span>
            </div>
            <div className="answer hidde top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
              <p className="leading-snug text-gray-700">
                Yes. You can email them, but all communication is monitored by
                FTC management.
              </p>
            </div>
          </div>
          <div className="faqItem relative mb-8 ">
            <div className="question">
              <p className="text-xl font-semibold opacity-50 ">02</p>
              <p className="mb-0 text-sm  lg:max-w-[85%] question-hover:text-white">
                How can you make sure our payment is secure?
              </p>
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
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
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
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
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
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
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
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
              <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
                <FaChevronRight />
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
          </div>
        </div>
        {/* <div className="">
          <QuestionAndAnswer
            number={"01"}
            question={
              "Can I communicate with the child I have made a Pledge to?"
            }
            answer={
              "Yes. You can email them, but all communication is monitored by FTC management."
            }
          />
          <QuestionAndAnswer
            number={"02"}
            question={
              "Can I communicate with the child I have made a Pledge to?"
            }
            answer={
              "Our online donation transaction is a secure SSL encrypted payment using Stripe payment processor with the best-in-class security tools and practices to maintain a high level of security."
            }
          />
          <QuestionAndAnswer
            number={"03"}
            question={
              "Can I communicate with the child I have made a Pledge to?"
            }
            answer={
              "Our online donation transaction is a secure SSL encrypted payment using Stripe payment processor with the best-in-class security tools and practices to maintain a high level of security."
            }
          />
          <QuestionAndAnswer
            number={"04"}
            question={
              "Will I receive personal updates from FTC and the child I pledge to on a regular basis?"
            }
            answer={
              "Yes, you will receive regular updates about the progress and developments of our program. Additionally, from time to time you will receive communications directly from the child you sponsor."
            }
          />
          <QuestionAndAnswer
            number={"05"}
            question={"Can I make a pledge to more than one FTC Child?"}
            answer={
              "Yes. We welcome your pledges to as many children as possible!"
            }
          />
          <QuestionAndAnswer
            number={"06"}
            question={
              "Can I make a Partner Pledge for the entire monthly care of a child in the FTC program?"
            }
            answer={
              "Yes. But the full-care sponsorship of a child in our program is limited to $200 monthly. Therefore, if a child has current sponsorship pledges, the website will allow only the remaining balance necessary for full-care coverage."
            }
          />
          <QuestionAndAnswer
            number={"07"}
            question={"How much does an FTC Child Partner Pledge Cost?"}
            answer={
              "You can partner with us by sponsoring a child for as little as $20 monthly. You can also select higher sponsorship amounts if the child has remaining full-care needs. Please see the options presented for a selected child on the sponsorship page."
            }
          />
        </div> */}
      </div>
    </section>
  );
};

export default Questions;
