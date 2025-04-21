import React from "react";
import { FaChevronRight } from "react-icons/fa";

const QuestionAndAnswer = ({ number, question, answer }) => {
  return (
    <div className="faqItem relative mb-8 ">
      <div className="question">
        <p className="text-xl font-semibold opacity-50 ">{number}</p>

        <p className="mb-0 text-sm lg:max-w-[85%] question-hover:text-white">
          {question}
        </p>
        <span className="md:absolute top-3 left-[46%] text-xl flex-grow ">
          <FaChevronRight />
        </span>
      </div>
      <div className="answer top-0 right-0 p-3 border-primary border max-w-[400px] rounded-md">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
