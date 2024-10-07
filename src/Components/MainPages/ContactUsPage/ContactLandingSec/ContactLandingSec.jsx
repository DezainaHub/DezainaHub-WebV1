import React from "react";
import "./ContactLandingSec.css";
import ContactForm1 from "./ContactFormStages/ContactForm1";
import ContactFormFinal from "./ContactFormStages/ContactFinalStage/ContactFormFinal";

export const ContactLandingSec = () => {
  return (
    <div className="ContactLSMain">
      <div className="ContactLS container px-[75px] " data-aos="zoom-in-up">
        <div className="ContactLS-Head">
          <h1 className="ContactLSHead-Heading">
            Looking To Find And <span>Hire</span> Great <span>Designers</span>?
          </h1>
          <p className="ContactLSHead-Body">
            Have a project in mind? Nurture your ideas with us. Connect today to
            find exceptional designers for your projects. Whether it's a custom
            request or enhancing your brand, let's create something amazing
            together!
          </p>
        </div>
        <div className="ContactLS-FormContainer">
          <div className="ContactLS-FormBox" data-aos="fade-up">
            <ContactForm1 />
            {/* <ContactFormFinal/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLandingSec;
