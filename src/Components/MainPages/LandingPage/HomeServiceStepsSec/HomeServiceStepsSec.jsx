import React from 'react'
import "./HomeServiceStepsSec.css"

export const HomeServiceStepsSec = () => {
  return (
    <div className='HomeSSSMain'>
        <div className='HomeSSS container p-20' data-aos="fade-up">
            <div className='HomeSSS-HeadContainer'><h1 className='HomeSSS-Head'>3 <span>Steps</span> to Build Brand <span>Presence</span></h1></div>
            <div className='HomeSSS-Steps'>
                <div className='HomeSSSSteps-Up'>
                    <div className='HomeSSSSteps-1'>
                        <div className='HomeSSSSteps-Heading'>
                            <h1 className='HomeSSSStepsHead-Number'>01</h1>
                            <h2 className='HomeSSSStepsHead-Step'>Brand Essence</h2>
                        </div>
                        <p className='HomeSSSStepsHead-Content'>Clarify your brand's core <b>values</b>, <b>mission</b> and <b>vision</b> to lay a strong foundation for <b>identity building.</b></p>

                    </div>
                    <div className='HomeSSSSteps-1 HomeSSSSteps-3'>
                        <div className='HomeSSSSteps-Heading'>
                            <h1 className='HomeSSSStepsHead-Number'>03</h1>
                            <h2 className='HomeSSSStepsHead-Step'>Brand Connector</h2>
                        </div>
                        <p className='HomeSSSStepsHead-Content'>Connect with audiences using your <b>brand's Amplifiers</b> and its compelling story by sharing your <b>brand's essence</b></p>

                    </div>
                </div>
                <svg className='HomeSSSSteps-LeftLine' width="360" height="240" viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0.5V238H360" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>
<svg className='HomeSSSSteps-RightLine' width="360" height="240" viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M358 0.5V238H0" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>
<svg className='HomeSSSSteps-UpLine' width="710" height="4" viewBox="0 0 784 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M784 2L464.689 2L2.09808e-05 2" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>
<svg className='HomeSSSSteps-CenterLine' width="4" height="230" viewBox="0 0 4 238" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 238V0.5" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>







                <div className='HomeSSSSteps-Down'>
                <div className='HomeSSSSteps-1 HomeSSSSteps-2'>
                        <div className='HomeSSSSteps-Heading'>
                            <h1 className='HomeSSSStepsHead-Number'>02</h1>
                            <h2 className='HomeSSSStepsHead-Step'>Brand Amplifiers</h2>
                        </div>
                        <p className='HomeSSSStepsHead-Content'>Get an distinct <b>visual elements</b> to be a unique brand and to amplify your brand's presence.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeServiceStepsSec;