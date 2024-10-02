import React, { useState } from 'react'
import styled, {keyframes, css} from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImgData from "./Our_Clients/ImgData" 


function Banner() {

    console.log(ImgData)
    const [data, setData] = useState(ImgData) 
    console.log(data)

  return (
    <div>
        {
            data.map(({id, image, name}) => {
                <div key={id}>
                    <img src={image} alt=""/>
                    <p>{name}</p>
                </div>

            })
        }
    </div>
  )
}

export default Banner
