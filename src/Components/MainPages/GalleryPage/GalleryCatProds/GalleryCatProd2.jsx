import React, { useState, useCallback } from "react";
import "./GalleryCatProds.css";
import PosterImgData from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import { GalleryImgProd3 } from "../GalleryImgSec/GalleryImgProd";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ImgCat3Prod1, {
  ImgCat3Prod2,
  ImgCat3Prod3,
  ImgCat3Prod4,
  ImgCat3Prod5,
} from "../GalleryImgSec/GalleryCardData/ImgDataCat3";
import { ProductDataC2 } from "../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData";

export const GalleryCatProd2 = () => {
  const [activeProd, setActiveProd] = useState(2);
  const [clickedImg, setClickedImg] = useState(null);
  const [currIndex, setCurrIndex] = useState(null);

  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return ProductDataC2[0].gallery;
      case 2:
        return ProductDataC2[1].gallery;
      case 3:
        return ProductDataC2[2].gallery;
      case 4:
        return ProductDataC2[3].gallery;
      case 5:
        return ProductDataC2[4].gallery;
    }
  };


  const handelClick = (ImgData, i) => {
    setCurrIndex(i);
    setClickedImg(ImgData);
  };

  const handleRotationRight = () => {
    const totalLength = ShowProd(activeProd).length;
    if (currIndex + 1 >= totalLength) {
      setCurrIndex(0);
      const newUrl = ShowProd(activeProd)[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currIndex + 1;
    const newUrl = ShowProd(activeProd).filter((item) => {
      return ShowProd(activeProd).indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = ShowProd(activeProd).length;
    if (currIndex === 0) {
      setCurrIndex(totalLength - 1);
      const newUrl = ShowProd(activeProd)[totalLength - 1];
      setClickedImg(newUrl);
    }
    const newIndex = currIndex - 1;
    const newUrl = ShowProd(activeProd).filter((item) => {
      return ShowProd(activeProd).indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrIndex(newIndex);
  };

  const handelClickClose = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  
  const MobileStyle = {
    backgroundColor: "rgba(30, 30, 30, 0.9)",
    transition: "300ms ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    zIndex: "200000000000000",
    top: "0%",
    left: "0%",
 
    // Adding media query..
    '@media (max-width: 500px)': {
      // display: 'none',
      border: '2px solid red',
      backgroundColor: 'red',
    },
  }
  
  const handle = useFullScreenHandle();
  return (
    <div className="GalleryISMain" data-aos="fade-up">
      <div className="GalleryIS">
        <div className="GalleryIS-ProductStrip">
          <div className="GalleryIS-ProductList container">
            {GalleryImgProd3.map((ProdData, i) => (
              <h6
                key={i}
                onClick={() => setActiveProd(ProdData.id)}
                className={
                  activeProd === ProdData.id
                    ? "GalleryISStrip-ProductActive"
                    : "GalleryISStrip-Product"
                }
              >
                {ProdData.ProdName}
              </h6>
            ))}

            {/* <h6 className='GalleryISStrip-ProductActive'>Business Card</h6> */}
          </div>
        </div>
        <div className="GalleryIS-Gallery container">
          <div className="GalleryIS-GalleryContainer">
            {/* {PosterImgData.map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </div>
              </div>
            ))} */}
            
            {ShowProd(activeProd).map((ImgData, i) => (
              <div key={i} className="GalleryIS-ImgContainer" data-aos="fade-up">
                <button
                  className="GalleryIS-ImgBox"
                  // className={
                  //   ImgOpen === "Open"
                  //     ? "GalleryISImgBox-Open"
                  //     : "GalleryIS-ImgBox"
                  // }
                  onClick={() => handelClick(ImgData, i)}
                >
                  {/* <button className={ImgOpen==="Open"? "V-Cross-Button" : "H-Cross-Button"} onClick={()=>setImgOpen("close")}>X</button> */}
                  <img className="GalleryIS-Img" src={ImgData} 
                  onClick={handle.enter} />
                </button>
              </div>
            ))}
            {clickedImg && (
            <FullScreen handle={handle}>
              <div
                className="overlay dismiss"
                onClick={handelClickClose}
                style={MobileStyle}
                
              >
                {/* <div className="GalleryISImgBox-Open"> */}
                <img
                  src={clickedImg}
                  alt="Bigger Image"
                  style={{
                    maxWidth: "70vw",
                    maxHeight: "70%",
                    border: "20px solid whitesmoke",
                  }}
                  // className="GalleryISImgBox-OpenImg"
                />
                {/* </div> */}
                <span
                  className="dismiss"
                  onClick={handelClickClose}
                  style={{
                    position: "absolute",
                    top: "1.5vh",
                    right: "1vw",
                    color: "whitesmoke",
                    cursor: "pointer",
                    padding: "2rem",
                  }}
                >
                {/* Cross Button - X */}
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8236 9.29858L18.1106 4.0116C18.7593 3.36281 18.7593 2.31091 18.1106 1.66159L16.9356 0.48659C16.2868 -0.162197 15.2349 -0.162197 14.5856 0.48659L9.29858 5.77357L4.0116 0.48659C3.36281 -0.162197 2.31091 -0.162197 1.66159 0.48659L0.48659 1.66159C-0.162197 2.31038 -0.162197 3.36228 0.48659 4.0116L5.77357 9.29858L0.48659 14.5856C-0.162197 15.2343 -0.162197 16.2862 0.48659 16.9356L1.66159 18.1106C2.31038 18.7593 3.36281 18.7593 4.0116 18.1106L9.29858 12.8236L14.5856 18.1106C15.2343 18.7593 16.2868 18.7593 16.9356 18.1106L18.1106 16.9356C18.7593 16.2868 18.7593 15.2349 18.1106 14.5856L12.8236 9.29858Z"
                      fill="#EDEDED"
                    />
                  </svg>
                </span>
                <div
                  onClick={() => handleRotationLeft()}
                  className="overlay-arrows__left"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "1vw",
                    color: "whitesmoke",
                    cursor: "pointer",
                    padding: "2rem",
                  zIndex: "200000000000010",
                  }}
                >
                {/* Previous Button */}
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0C8.50403 0 -7.15256e-07 8.50403 -7.15256e-07 19C-7.15256e-07 29.496 8.50403 38 19 38C29.496 38 38 29.496 38 19C38 8.50403 29.496 0 19 0ZM10.2738 17.6976L20.6548 7.31653C21.375 6.59637 22.5395 6.59637 23.252 7.31653L24.5544 8.61895C25.2746 9.33911 25.2746 10.5036 24.5544 11.2161L16.7706 19L24.5544 26.7839C25.2746 27.504 25.2746 28.6685 24.5544 29.381L23.252 30.6835C22.5319 31.4036 21.3673 31.4036 20.6548 30.6835L10.2738 20.3024C9.55363 19.5823 9.55363 18.4177 10.2738 17.6976Z"
                      fill="#EDEDED"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => handleRotationRight()}
                  className="overlay-arrows__left"
                  style={{
                    position: "absolute",
                    top: "45%",
                    right: "1vw",
                    color: "whitesmoke",
                    cursor: "pointer",
                    padding: "2rem",
                  }}
                >
                {/* Next Button */}
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0C29.496 0 38 8.50403 38 19C38 29.496 29.496 38 19 38C8.50403 38 0 29.496 0 19C0 8.50403 8.50403 0 19 0ZM27.7262 17.6976L17.3452 7.31653C16.625 6.59637 15.4605 6.59637 14.748 7.31653L13.4456 8.61895C12.7254 9.33911 12.7254 10.5036 13.4456 11.2161L21.2294 19L13.4456 26.7839C12.7254 27.504 12.7254 28.6685 13.4456 29.381L14.748 30.6835C15.4681 31.4036 16.6327 31.4036 17.3452 30.6835L27.7262 20.3024C28.4464 19.5823 28.4464 18.4177 27.7262 17.6976Z"
                      fill="#EDEDED"
                    />
                  </svg>
                </div>
              </div>
            </FullScreen>
            )}

          </div>
          {/* <button className="GalleryIS-ImgButton">Load More</button> */}
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd2;
