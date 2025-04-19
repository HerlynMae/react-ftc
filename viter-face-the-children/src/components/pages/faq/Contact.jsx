import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";
import ContactForm from "../../partials/ContactForm";

const Contact = () => {
  return (
    <section className="bg-lightGray py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-5 max-w-[1100px] mx-auto">
          <div className="  px-4">
            <div className="md:max-w-96">
              <SectionTitle
                title={"Fequently Asked Question"}
                desc={"Can't find what you are looking for?"}
              />
            </div>

            <p className="my-5 text-gray-700 md:max-w-md">
              If your questions is not listed above, you can use the form to
              send directly to us your questions
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
