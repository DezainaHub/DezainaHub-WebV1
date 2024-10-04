import React, { useState } from 'react';
import './Banner.css';
import bannerData from './Our_Clients/ImgData';

function Banner() {
  const [data, useData] = useState(bannerData);

  return (
    <div className="banner w-full h-[60vh] flex justify-center items-center bg-PrimaryColor">
      <div className="wrapper relative w-[90%] flex items-center overflow-hidden">
       
        {/* Image Container for scrolling */}

        <div className="img-div flex items-center justify-evenly gap-2 animate-scroll whitespace-nowrap">
          {data.map(({ id, img }) => (
            <div className="img-container" key={id}>
              <img
                src={img}
                alt={`client-${id}`}
                className=" h-[50px] mx-5 object-contain"
              />
            </div>
          ))}
          
          {/* Repeating the images to simulate continuous scroll */}

          {data.map(({ id, img }) => (
            <div className="img-container" key={`repeat-${id}`}>
              <img
                src={img}
                alt={`client-repeat-${id}`}
                className=" h-[50px] mx-5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;

