import React from "react";
import "./FooterNewsLetter.css";
import { NavLink } from "react-router-dom";
import Button from "../../../GlobalComponents/Button/Button";

export const FooterNewsLetter = () => {
  return (
    <div className="FooterNewsLetterMain">
      <div className="FooterNewsLetter container px-20">
        <div className="FooterNewsLetter-Body">
          <div className="FooterNewsLetterBody-Title">
            Lets Boost Your Business
          </div>
          <h1 className="FooterNewsLetterBody-Head">
            Book a Free <span>Consultancy</span> Today
          </h1>
        </div>
        <div className="FooterNewsLetter-Button">
          <NavLink to="/ContactUs">
            <Button
              buttonText="Get A Call"
              backgroundColor="#f4f4f4"
              color="#1e1e1e"
              border="none"
              fontWeight="500"
              borderRadius="0.8rem"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsLetter;

// background-color: $ThirdColor;
//                 border: none;
//                 font-weight: 500;
//                 width: 15rem;
//                 height: 3.5rem;
//                 border-radius: $Secon
