import React from 'react'
import "./LandingPage.css"
import HomeLandingSec from './HomeLandingSec/HomeLandingSec'
import HomeAboutSec from './HomeAboutSec/HomeAboutSec'
import QualityStrip from './QualityStrip/QualityStrip'
import FeaturedServiceSec from './FeaturedServiceSec/FeaturedServiceSec'
import HomeServiceStepsSec from './HomeServiceStepsSec/HomeServiceStepsSec'
import HomeGallerySec from './HomeGallerySec/HomeGallerySec'
import AboutTestimonial from '../AboutUsPage/AboutTestimonial/AboutTestimonial'


export const LandingPage = () => {
  return (
    <div>
    {/* <HeaderSec/> */}
        <HomeLandingSec/>
        <HomeAboutSec/>
        <QualityStrip/>
        <FeaturedServiceSec/>
        <AboutTestimonial/>
        <HomeServiceStepsSec/>
        
        <HomeGallerySec/>
      {/* <FooterSec/> */}
      
    
    </div>
  )
}

export default LandingPage;