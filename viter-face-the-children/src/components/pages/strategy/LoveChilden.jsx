import React from "react";
import SectionTitle from "../../partials/SectionTitle";

const LoveChilden = () => {
  return (
    <section className="py-20 bg-lightGray">
      <div className="max-w-[1100px] mx-auto px-3">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          <div className="">
            <img
              className="w-full md:w-96 "
              src="./img/s-love.webp"
              alt="strategy-img"
            />
          </div>
          <div className="">
            <SectionTitle
              title={"Prevails Forever"}
              desc={"Love Never Fails"}
            />
            <p className="my-5 text-gray-700 text-balance md:max-w-lg">
              Many children we serve come to us with psychological, behavioral
              problems, and even chemical or mental addictions; some at very
              young ages. Many are not ready to trust or commit to others due to
              various forms of abuse or levels of neglect. Needless to say, many
              children have good reasons for hesitation to trust or commit to
              others; and in some cases fail to do so. Knowing that not all
              children respond as we hope does not deter us. We are committed to
              the welfare of children regardless of the outcomes of our
              interventions with all children.
            </p>
            <p className=" text-gray-700 text-balance md:max-w-lg">
              Many children we serve come to us with psychological, behavioral
              problems, and even chemical or mental addictions; some at very
              young ages. Many are not ready to trust or commit to others due to
              various forms of abuse or levels of neglect. Needless to say, many
              children have good reasons for hesitation to trust or commit to
              others; and in some cases fail to do so. Knowing that not all
              children respond as we hope does not deter us. We are committed to
              the welfare of children regardless of the outcomes of our
              interventions with all children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveChilden;
