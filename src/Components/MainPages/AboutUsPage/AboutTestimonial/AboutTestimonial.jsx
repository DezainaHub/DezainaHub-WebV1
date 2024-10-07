import React from 'react'
import "./AboutTestimonial.css"
import TestimonialData from './TestimonialData'
import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules'

export const AboutTestimonial = () => {
  return (
    <div className='AboutTSMain flex justify-center items-center' data-aos="fade-up">
        <div className='AboutTS container px-10'>
            <div className='AboutTS-Body px-8'>
                <h6 className='AboutTSBody-Title'>Testimonial</h6>
                <h1 className='AboutTSBody-Heading'>What Our <span>Clients</span> Say About Us</h1>
                <p className='AboutTSBody-Content'>Discover what our satisfied clients have to say about their experience working with DezainaHub. We take pride in delivering exceptional branding and design solutions that leave a lasting impact. Your success story could be next!</p>
                <button className='AboutTSBody-ButtonPrev'><svg  viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 46.4264H31.25C41.6666 46.4264 45.8333 42.2598 45.8333 31.8431V19.3431C45.8333 8.92643 41.6666 4.75977 31.25 4.75977H18.75C8.33329 4.75977 4.16663 8.92643 4.16663 19.3431V31.8431C4.16663 42.2598 8.33329 46.4264 18.75 46.4264Z" fill="#1F2F54"/>
<path d="M27.625 32.9486L20.2916 25.5944L27.625 18.2402" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                <button className='AboutTSBody-ButtonNext'><svg viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 46.4264H31.25C41.6666 46.4264 45.8333 42.2598 45.8333 31.8431V19.3431C45.8333 8.92643 41.6666 4.75977 31.25 4.75977H18.75C8.33329 4.75977 4.16663 8.92643 4.16663 19.3431V31.8431C4.16663 42.2598 8.33329 46.4264 18.75 46.4264Z" fill="#1F2F54"/>
<path d="M22.375 32.9486L29.7083 25.5944L22.375 18.2402" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
<div className='swiper-pagination'>

</div>
            </div>
            
            {/* <div className='AboutTS-ImgContainer'>
                <div className='AboutTSImgContainer-FloatBox'>
                    <p className='AboutTSImgFloatBox-Content'>DezainaHub exceeded all our expectations with their graphic design work. Their attention to detail and creative expertise shine through. They perfectly captured our brand essence, and our audience engagement has noticeably improved. I wholeheartedly recommend their services.</p>
                    <div className='AboutTSImgFloatBox-ReviewFrom'>
                        <h5 className='AboutTSImgFloatBox-Name'>Geetartha Gogoi</h5>
                        <div className='AboutTSImgFloatBox-Ratings'>
                            <div className='AboutTSImgFloatBoxRate-SVG'>

                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                </svg>
                            </div>
                            <div className='AboutTSImgFloatBoxRate-SVG'>

                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                </svg>
                            </div>
                            <div className='AboutTSImgFloatBoxRate-SVG'>

                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                </svg>
                            </div>
                            <div className='AboutTSImgFloatBoxRate-SVG'>

                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                </svg>
                            </div>
                            <div className='AboutTSImgFloatBoxRate-SVG'>

                                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                </svg>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='AboutTSImgContainer-ImgBox'>
                    <img className='AboutTSImgContainer-Img' src={TestimonialImg1} />
                </div>
            </div> */}
            {/* <div className='AboutTS-ReviewBox'> */}
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidePerView={'auto'}
                spaceBetween= {100}
                coverflowEffect={
                    {
                        rotate:0,
                        strech:10,
                        depth: 500,
                        modifier:1,
                        slideShadows: false,
                    }
                }
                autoplay= {{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                }}
                // pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{
                    nextEl:'.AboutTSBody-ButtonNext',
                    prevEl:'.AboutTSBody-ButtonPrev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel]}
                className="AboutTS-ReviewBox" 
                >

                    {TestimonialData.map((data, i)=>(
                    <SwiperSlide style={{overflow:"visible"}}>
                    <div className='AboutTS-ImgContainer'>
                        <div className='AboutTSImgContainer-Head' style={{backgroundColor: `${data.brandColor}`}}>
                            <div className='AboutTSImgContainer-HeadImgBox' style={{border: `1px solid ${data.brandColor}`}}>
                                <img style={{backgroundColor: `${data.brandColor}`}} className='AboutTSImgContainer-HeadImg' src={data.logoImg}/>
                            </div>
                        </div>
                        <div className='AboutTSImgContainer-Content'>
                            <div className='AboutTSImgContainer-ContentHead'>
                            <h3 className='AboutTSImgContainer-Brand'>
                                {data.BrandName}
                            </h3>
                            <h6 className='AboutTSImgContainer-BrandFeild'>
                                ( {data.BrandFeild} )
                            </h6>
                            <p className='AboutTSImgContainer-Review' >
                            {data.Review}
                            </p>
                            </div>
                            <div className='AboutTSImgContainer-ContentHeadFotter'>

                            <div className='AboutTSImgContainer-Person' style={{backgroundColor: `${data.brandColor}`}}>
                                <h6 className='AboutTSImgContainer-PersonName'>{data.PersonName}</h6>
                            </div>
                            <div className='AboutTSImgFloatBox-Ratings'>
                                <div className='AboutTSImgFloatBoxRate-SVG'>

                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                    </svg>
                                </div>
                                <div className='AboutTSImgFloatBoxRate-SVG'>

                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                    </svg>
                                </div>
                                <div className='AboutTSImgFloatBoxRate-SVG'>

                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                    </svg>
                                </div>
                                <div className='AboutTSImgFloatBoxRate-SVG'>

                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                    </svg>
                                </div>
                                <div className='AboutTSImgFloatBoxRate-SVG'>

                                    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#F9E10B"/>
                                    </svg>
                                </div>


                            </div>
                            </div>

                        </div>
                    </div>
                    </SwiperSlide>
                    ))}
                    {/* <div className='slider-controler'>
                        <div className='swiper-button-prev slider-arrow' > </div>
                        <div className='swiper-button-next slider-arrow'></div>
                        <div className='swiper-pagination'></div>
                    </div> */}
                </Swiper>
            {/* </div> */}
        </div>
    </div>
  )
}

export default AboutTestimonial;