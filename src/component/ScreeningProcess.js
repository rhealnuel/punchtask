import React, { useState } from 'react'
import img1 from '../assets/screenimg1.svg'
import img2 from '../assets/screenimg2.svg'

const ScreeningProcess = () => {

    const [active, setActive] = useState("")

    const screen = [
        "Resume Screening", "Video Interview", "Technical Evaluation", "Application Review", "Lets get to work"
    ]


  return (
    <div className=' rotate-[-1deg] h-full bg-white  lg:w-screen mt-[-20px]' data-aos="fade-up">
        <div className=' py-36 lg:px-10 px-4 flex flex-col gap-8 rotate-[1deg]'>
            <div className='lg:w-[646px] flex flex-col gap-4 lg:gap-8 text-center lg:text-start'>
                <p className='text-[36px] lg:text-[54px] leading-tight lg:leading-[64px] font-[700]'>How we ensure you’re in good hands.</p>
                <p className=' lg:text-[22px] font-[400] '>
                    With our comprehensive screening process, 
                    we hand-pick highly skilled candidates so you can onboard them in a matter of days.
                </p>
            </div>
           



            <div className='flex flex-col gap-4' data-aos="fade-up">
                {
                    screen.map((screen, index) => (

                            <div  >
                                <div onClick={() => setActive(screen)}  className={` ${active === screen ?  "hidden" : "flex"}   gap-6 items-center lg:w-[635px] border border-[#F0F0F0] p-4 rounded-[7px] shadow-md cursor-pointer`}>
                                    <img src={img1} alt="screen1" />
                                    <p className='text-[16px]'> <span className='font-bold'>Step {index + 1}:</span> {screen}</p>
                                </div>


                                <div onClick={() => setActive("")}  className={` ${active === screen ? "flex" : "hidden"} flex-col gap-6 lg:w-[635px] border border-[#F0F0F0] p-4 rounded-[7px] shadow-md cursor-pointer`}>
                                    <div className='flex gap-6  items-center'>
                                        <img src={img2} alt="screen1" />
                                        <p className='text-[16px]'> <span className='font-bold'>Step {index + 1}:</span> {screen}</p>
                                    </div>
                                    <p className='text-[16px] lg:w-[531px]  '>
                                        Candidates are assessed through skill based questions in a virtual setting. 
                                        Allowing you to gauge personality and cultural fit.
                                    </p>

                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ScreeningProcess