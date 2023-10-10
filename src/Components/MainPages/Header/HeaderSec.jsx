import React, { useState } from "react";
import "./HeaderSec.css";
import LogoImg from "./Image/DezainahubNew.png";
import LogoImgName from "./Image/DezainaHub.png";
import { NavLink, useLocation } from "react-router-dom";

export const HeaderSec = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [navMV , setNavMV] = useState("MV")
  const url = window.location.href;
  const { pathname = "" } = useLocation();

  return (
    <div className="NavMainContainer">
      <nav className="NavBarStyle container">
      <div className="NavBarLogoStyle">

        <div className="Nav-Logo">
          <img src={LogoImg} />
          {/* <img src={LogoImgName} /> */}
        </div>
        <div onClick={()=>{if (navMV==='Responsive'){
        setNavMV('MV');
    }
    else {
        setNavMV('Responsive');
    }
    }} className="NavhamBurger">
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6C0 2.68629 2.68629 0 6 0H24C27.3137 0 30 2.68629 30 6V24C30 27.3137 27.3137 30 24 30H6C2.68629 30 0 27.3137 0 24V6Z" fill="white"/>
    <path d="M7.5 8.99902H22.5" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 14.999H22.5" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 20.999H22.5" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
      </div>
        <div className={navMV==="Responsive"? "NavBarList": "NavBarListMV"} >
          <div className="NavBarList-Items">
            <NavLink to="/" className="nav-item">
              <button
                onClick={() => setActiveTab("home")}
                className={
                  pathname === "/" ? "activeButton" : "NavBarListItem-Button"
                }
              >
                Home
              </button>
            </NavLink>
          </div>
          <div className="NavBarList-Items">
            <NavLink to="/AboutUs">
              <button
                onClick={() => setActiveTab("about")}
                className={
                  url.includes("AboutUs")
                    ? "activeButton"
                    : "NavBarListItem-Button"
                }
              >
                About Us
              </button>
            </NavLink>
          </div>
          <div className="NavBarList-Items">
            <NavLink to="/Gallery">
              <button
                onClick={() => setActiveTab("gallery")}
                className={
                  url.includes("Gallery")
                    ? "activeButton"
                    : "NavBarListItem-Button"
                }
              >
                Gallery
              </button>
            </NavLink>
          </div>
          <div className="NavBarList-Items">
            <NavLink to="/Service">
              <button
                onClick={() => setActiveTab("service")}
                className={
                  url.includes("Service")
                    ? "activeButton"
                    : "NavBarListItem-Button"
                }
              >
                Services
              </button>
            </NavLink>
          </div>
          <div className="NavBarList-Items">
            <NavLink to="/ContactUs">
              <button
                onClick={() => setActiveTab("contact")}
                className={
                  url.includes("ContactUs")
                    ? "activeButton"
                    : "NavBarListItem-Button"
                }
              >
                Contact Us
              </button>
            </NavLink>
          </div>


          {/* Will Release This In Next Version */}

          {/* <div className="NavBarList-Items">
            <NavLink to="/Cart">
              <button
                onClick={() => setActiveTab("cart")}
                className={
                  url.includes("Cart")
                    ? "activeButton"
                    : "NavBarListItem-Button"
                }
              >
                Cart
              </button>
            </NavLink>
          </div>
          <div className="NavBarList-ItemsLog">
            <div className="NavBarList-Items">
                <NavLink to="/">
                <button className="NavBarListItem-Button">LogOut</button>
                </NavLink>
                </div>
                    
                <div className="NavBarList-Items">
                <NavLink to="/Login">
                <button className="NavBarListItem-Button">Login</button>
                </NavLink>
            </div>
          </div> */}
          {/* <div className='NavBarList-Items'>
                    <NavLink to="/Article">
                    <button>Article</button>
                </NavLink>
                </div> */}
        </div>
      </nav>
    </div>
  );
};

export default HeaderSec;
