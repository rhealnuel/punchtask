import React from 'react'
import groovetext from '../assets/groovetext.svg'
import head2 from '../assets/secondhead.svg'
import next from '../assets/nextwhite.svg'
import prev from '../assets/prevwhite.svg'
import groove from '../assets/groovewithbg.svg'

const HowItWorked = () => {
  return (
    <div className='' >
        <div className=' mt-[40px] h-fit py-[190px] bg-[#202229] text-white flex flex-col lg:flex-row items-center justify-between  lg:pl-10 lg:pr-[229px]   '>
            
            <div className='flex flex-col gap-6 lg:gap-16 items-center lg:items-start  pb-28 '>

                <div className=' lg:w-[379px] w-[90%] text-center lg:text-start'>
                    <p className='inline-block text-[34px] lg:text-[54px] font-[700] leading-tight'>
                        how it worked for Jason 
                        <img src={head2} alt="groovy" className='inline-block px-4' />
                         at 
                        <img src={groovetext} alt="groovy" className='inline-block px-4 lg:px-0' />
                    </p>
                </div>

                <p className='  lg:text-[22px] font-[400] w-[90%] lg:w-[461px] leading-[32px] text-center lg:text-start '>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>
                


                <div className=' flex gap-6'>
                    <img src={prev} alt="prev" />
                    <img src={next} alt="next" />
                </div> 
            </div>


             
            <div className='flex flex-col gap-8 lg:gap-12 items-center lg:items-start'>
                <div className='flex lg:flex-row flex-col text-center lg:text-start lg:gap-4 items-center lg:items-start'>
                    <img src={groove} alt="groove" className='lg:w-[98px] w-[84px] ' />
                    <div>
                        <p className=' text-[28px] lg:text-[34px] font-[600]'>Jason Makki</p>
                        <p className='font-[500] text-[16px] text-[#C6C4C4] opacity-[40%]'>Engineer at GROOVE</p>
                        <p className='font-[500] text-[16px] text-[#C6C4C4] opacity-[40%]'>San Francisco</p>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[499px] text-center lg:text-start'>
                    <p className=' lg:text-[22px] font-[400] opacity-[80%] lg:leading-[32px]'>
                        Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on 
                        time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HowItWorked