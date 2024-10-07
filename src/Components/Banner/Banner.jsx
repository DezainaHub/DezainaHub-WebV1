import React, { useState } from 'react';
import './Banner.css';
import bannerData from './Our_Clients/ImgData';

function Banner() {
  const [data, useData] = useState(bannerData);

  return (
    <div className="banner w-full h-[70vh] flex justify-center items-center bg-PrimaryColor">
       <div className='ml-10 px-2 w-[15%] flex justify-center items-center'>
          <h1 className='text-2xl text-white z-10 font-mono'> Trusted by </h1>
        </div>
      <div className="wrapper relative w-[80%] flex items-center justify-center overflow-hidden">
       
        {/* Image Container for scrolling */}

        <div className="img-div flex items-end justify-evenly animate-scroll whitespace-nowrap">
          {data.map(({ id, img }) => (
            <div className="img-container" key={id}>
              <img
                src={img}
                alt={`client-${id}`}
                className=" w-[70%] m-20 object-contain"
              />
            </div>
          ))}
          
          {/* Repeating the images to simulate continuous scroll */}

          {data.map(({ id, img }) => (
            <div className="img-container" key={`repeat-${id}`}>
              <img
                src={img}
                alt={`client-repeat-${id}`}
                className=" w-[70%] m-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;

