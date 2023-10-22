import "./App.css"
import React, { lazy, Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import HeaderSec from './Components/MainPages/Header/HeaderSec';
// import LandingPage from './Components/MainPages/LandingPage/LandingPage';
// import AboutUsPage from './Components/MainPages/AboutUsPage/AboutUsPage';
// import ServicePage from './Components/MainPages/ServicePage/ServicePage';
// import GalleryPage from './Components/MainPages/GalleryPage/GalleryPage';
// import ContactUsPage from './Components/MainPages/ContactUsPage/ContactUsPage';
import  LazyLoader from "./Components/LazyLoader/LazyLoader";
import LoginSignupPage from "./Components/MainPages/LoginSignupPage/LoginSignupPage";
import FooterNewsLetter from "./Components/MainPages/Footer/FooterNewsLetter/FooterNewsLetter";
import FooterFoot from "./Components/MainPages/Footer/FooterFoot/FooterFoot";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const LandingPage = lazy(() => import("./Components/MainPages/LandingPage/LandingPage"));
const AboutUsPage = lazy(() => import("./Components/MainPages/AboutUsPage/AboutUsPage"));
const ServicePage = lazy(() => import("./Components/MainPages/ServicePage/ServicePage"));
const GalleryPage = lazy(() => import("./Components/MainPages/GalleryPage/GalleryPage"));
const ContactUsPage = lazy(() => import("./Components/MainPages/ContactUsPage/ContactUsPage"));
const CartPage = lazy(() => import("./Components/MainPages/CartPage/CartPage"));
const LoginPage = lazy(() => import("./Components/MainPages/LoginSignupPage/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("./Components/MainPages/LoginSignupPage/SignupPage/SignupPage"));
const VerifyPage = lazy(() => import("./Components/MainPages/LoginSignupPage/VerifyPage/VerifyPage"));
const PDPage = lazy(()=> import("./Components/MainPages/ProductDescriptionPage/ProductDescriptionPage"))


function App() {
  const renderHeaderFooter = () => {
    const path = window.location.pathname;
    return (path === "/ContactUs") || (path === "/Login") || (path === "/Signup") || (path === "/Verify") || (path === "*");
    // return (path === "/Login" || "/Signup" || "/Verify" || "*");
  }
  const ContactFooter = () => {
    const path = window.location.pathname;
    return (path === "/ContactUs") ;
    // return (path === "/Login" || "/Signup" || "/Verify" || "*");
  }
  return (
    <div className="App">
    <Suspense fallback={<div><LazyLoader/></div>}>
    <BrowserRouter>
        {!renderHeaderFooter() || ContactFooter() ? <HeaderSec/> : <></> } 
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/AboutUs' element={<AboutUsPage/>} />
          <Route path='/Service' element={<ServicePage/>} />
          <Route path='/Service/:id' element={<PDPage/>} />
          <Route path='/Gallery' element={<GalleryPage/>} />
          <Route path='/ContactUs' element={<ContactUsPage/>} />
          {/* <Route path='/Cart' element={<CartPage/>} />
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Signup' element={<SignupPage/>} />
          <Route path='/Verify' element={<VerifyPage/>} /> */}
          <Route path='*' element={<div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', height:'100vh'  }}><h1 style={{ color: '#1e1e1e',  }}>Error Page</h1><NavLink to='/'><button>Return to Home</button></NavLink></div>} />
          </Routes>
        {!renderHeaderFooter()  ? <div><FooterNewsLetter/><FooterFoot/></div> : <></>}
        {ContactFooter() ? <FooterFoot/> : <></>}
      </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
