import React from "react";
import SectionTitle from "../../partials/SectionTitle";

const Partners = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center">
          <SectionTitle
            title={"Trusted Affiliates"}
            desc={"Our Advocacy Associates"}
          />
          <ul className="flex flex-wrap justify-center items-center gap-4 lg:gap-16 mt-5">
            <li>
              <a href="#">
                <img src="./img/logo-fwc.png" alt="fwc-logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/logo-fbs.png" alt="fbs-logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/logo-fca.png" alt="fca-logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/logo-ftw.png" alt="ftw-logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./img/logo-pfm.png" alt="pfm-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
