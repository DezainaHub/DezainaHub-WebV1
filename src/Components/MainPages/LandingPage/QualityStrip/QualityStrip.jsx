import React from 'react'
import "./QualityStrip.css"

export const QualityStrip = () => {
  return (
    <div className='QualityStripMain'>
        <div className='QualityStrip container px-20'>
            <h1 className='QualityStripContent' data-aos="fade-up">Elegant</h1>
            <h1 className='QualityStripContent' data-aos="fade-up"><span>Professional</span></h1>
            <h1 className='QualityStripContent' data-aos="fade-up">Impactful</h1>
        </div>
    </div>
  )
}
export default QualityStrip;