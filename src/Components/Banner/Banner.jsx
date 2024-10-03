import React, { useState } from 'react'
import "./Banner.css"
import bannerData from "./Our_Clients/ImgData" 

function Banner() {

    const [data, setData] = useState(bannerData)
    console.log(data)

  return (
    <div className='banner h-[60vh] w-[100%] m-auto p-[10px] flex items-center justify-between bg-[#1e1e1e]'>
        <div className=' px-16 heading py-2 bg-[#1e1e1e]'>
                <h2 className='text-white w-32 text-xl'>Trusted by</h2>
        </div>
        <div className='wrappeer flex justify-center w-[100%] h-[fit-content]'>
            
            <div className="marquee w-[90%] flex overflow-hidden select-none">

                <div className="marqueeGrp shrink-0 flex items-center justify-around w-[100%] whitespace-nowrap">
                    {
                        data.map(({ id, img }) => (
                            <div className="img-grp grid place-items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] m-0" key={id}>
                                <img src={img} alt="" className='img object-contain text-2xl w-[100%] rounded-md aspect-video' />
                            </div>
                        ))
                    }
                </div>

                <div className="marqueeGrp shrink-0 flex items-center justify-around w-[100%] whitespace-nowrap">
                    {
                        data.map(({ id, img }) => (
                            <div className="img-grp grid place-items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] m-0" key={id}>
                                <img src={img} alt="" className='img object-contain text-2xl w-[100%] rounded-md aspect-video' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
