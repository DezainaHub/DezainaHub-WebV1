import React, { useEffect } from "react";
import "./FeaturedServiceSec.css";
import FeaturedServiceSecBody from "./FeaturedServiceSecBody/FeaturedServiceSecBody";
import { NavLink } from "react-router-dom";
import { setLoading, setProduct } from "../../../../Redux/productDetailReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Button from "../../../GlobalComponents/Button/Button";

export const FeaturedServiceSec = () => {
  //*************** */ Api Calling to the Featured Section starts here***************

  //   const dispatch = useDispatch();

  //   let featureProducts = useSelector((state) => state.productDetailReducer?.products);
  //   useEffect(async() => {
  //     let token = localStorage.getItem("token");
  //     const config = {
  //       headers: { authorization: token }
  //     }
  //     const ProductDataAPI = "http://localhost:5050/api/item/get?categoryId=650437af7623e86332589260";
  //     console.log(ProductDataAPI, "Item API")
  //     const res = await axios.get(ProductDataAPI, config);
  //     const products = await res.data;
  //     if(products.length){
  //         dispatch(setProduct(products))
  //     }
  // },[])

  // ***************Api Calling to the Featured Section ends here***************

  return (
    <div className="FeaturedSSMain">
      <div className="FeaturedSS container px:2 sm:px-20" data-aos="fade-up">
        <div className="FeaturedSS-Head">
          <h6 className="FeaturedSSHead-Title">Services</h6>
          <h1 className="FeaturedSSHead-Heading">
            Explore <span>Featured</span> Services
          </h1>
          <p className="FeaturedSSHead-Body">
            Discover Our Spotlighted Solutions: Tailored Solutions for Your
            Brand's Unique Journey. Elevate Your Brand with Our Creative
            Expertise.
          </p>
        </div>
        {/* ***************Api Calling to the Featured Section ends here*************** */}

        {/* <FeaturedServiceSecBody featureProducts={featureProducts}/> */}

        {/* ***************Api Calling to the Featured Section ends here*************** */}

        <FeaturedServiceSecBody />
        <NavLink to="/Service">
          <Button
            buttonText="View All"
            border="none"
            fontFamily="Martel Sans"
            fontWeight="600"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedServiceSec;
