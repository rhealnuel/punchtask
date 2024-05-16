import React from 'react'
import { Card1 } from '../assets/Card1'
import { Card2 } from '../assets/Card2'
import { Card3 } from '../assets/Card3'
import { Card4 } from '../assets/Card4'
import one from '../assets/one.svg'
import two from '../assets/two.svg'
import three from '../assets/3.svg'
import next from "../assets/blackmore.svg"
import { Form1 } from '../assets/Form1'
import { Formtwo } from '../assets/Formtwo'
import { Formthree } from '../assets/Formthree'
import image1 from '../assets/leelar.svg'
import image2 from '../assets/allison.svg'
import image3 from '../assets/10x.svg'



const Journey = () => {
  return (
    <div className='flex flex-col '>
        <div className="lg:px-10 px-4 py-36">

              <div className='text-center pb-20'>
                  <p className='font-[700] text-[36px] lg:text-[54px] '>Start your journey today.</p>
              </div>
{/* first section */}

          <div >
                  <div className=' bg-[#EDEFFF] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg]'>
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={one} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10'>
                              <p className='text-[34px] leading-[44px] font-[600]'>Find your next star performer.</p>
                              <p className='text-[16px] text-[#202229] opacity-[80%]'>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>

                              <div className='flex items-center gap-4'>
                                  <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                  <p className='text-[14px]'>Join Now</p>
                              </div>
                          </div>

                          <Card1 />
                          <Card2 />
                          <Card3 />
                          <Card4 />
                    </div>
                  </div>
 
{/* second section */}
                  <div className=' bg-[#FFF7E1] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg] mt-8'>
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={two} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10'>
                            <p className='text-[34px] leading-[44px] font-[600]'>Evaluate to your heart’s content.</p>
                            <p className='text-[16px] text-[#202229] opacity-[80%]'>Assess the candidate through work history, transparent tests and video interviews.</p>

                            <div className='flex items-center gap-4'>
                                <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                <p className='text-[14px]'>Browse More</p>
                            </div>
                          </div>

                          <Form1 />
                          <Formtwo />
                          <Formthree />

                    </div>
                  </div>
            
{/* third section */}
              

                  <div className=' bg-[#F3F3F3] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg] mt-8'>
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={three} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10'>
                              <p className='text-[34px] leading-[44px] font-[600]'>Start building your team.</p>
                              <p className='text-[16px] text-[#202229] opacity-[80%]'>Onboard your candidate right away and start creating the next big thing.</p>

                              <div className='flex items-center gap-4'>
                                  <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                  <p className='text-[14px]'>Join Now</p>
                              </div>
                          </div>

                        <img src={image1} alt="leelar" className='absolute right-4 top-[-110px] hidden lg:block' />
                        <img src={image2} alt="allison" className='absolute right-[160px] top-[-110px] hidden lg:block' />
                        <img src={image3} alt="10x" className='absolute right-[-20px] bottom-[-100px] hidden lg:block' />

                          
                    </div>
                  </div>


          </div>

        </div >
    </div>
  )
}

export default Journey