import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ContactForm from "../../partials/ContactForm";

const ContactInfo = () => {
  return (
    <section className="bg-white md:pt-[13rem] py-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-5 max-w-[1100px] mx-auto">
          <div className="  px-4">
            <div className="md:max-w-96">
              <SectionTitle title={"Let's Talk"} desc={"We're Here for You"} />
            </div>

            <p className="my-5 text-gray-700 md:max-w-lg  ">
              We believe in building strong relationships and fostering a sense
              of community. Your feedback and inquiries are important to us, and
              we strive to respond as quickly and thoroughly as possible.
            </p>
            <div className="mt-10">
              <p className="text-gray-700 my-3 md:my-4">
                Feel free to get in touch with us via phone
              </p>
              <ul className="flex flex-wrap md:gap-10 text-primary font-semibold mb-10 tracking-tighter">
                <li>Philippines: +63 927 420 3409</li>
                <li>USA +815 797 9177</li>
              </ul>
            </div>
            <div className="">
              <p className="text-gray-700 my-3 md:my-4">
                Visit us here in the Philippines
              </p>
              <p className="text-primary font-semibold leading-snug tracking-tighter">
                Frontline Mission Center, Sitio Subac, <br /> Brgy. Sto Nino,
                San Pablo City, 4000 Laguna
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
