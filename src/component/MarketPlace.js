import React from 'react'
import earn1 from '../assets/skill.svg'
import earn2 from '../assets/sub.svg'
import earn3 from '../assets/profile.svg'
import more from '../assets/blackmore.svg'

import shopify from "../assets/shopify.svg"
import magento from "../assets/magento.svg"
import data from "../assets/datascientist.svg"
import webflow from "../assets/webflow.svg"
import dotnet from "../assets/dotnet.svg"
import next from "../assets/more.svg"


import prev from "../assets/prev.svg"
import figma from "../assets/figma.svg"
import ps from "../assets/ps.svg"
import ai from "../assets/ai.svg"
import unreal from "../assets/unreal.svg"
import cinema from "../assets/cinema.svg"




const MarketPlace = () => {
// rray this we have achieved
    const earns = [
        {
            id:1,
            image: earn1,
            text: "989 Skills"
        },
        {
            id:2,
            image: earn2,
            text: "45 Sub-Categories"
        },
        {
            id:3,
            image: earn3,
            text: "1011 Profiles"
        },
    ]
//array for IT
    const IT = [
        {
            image: shopify,
            text: "Shopify Developer"
        },
        {
            image: magento,
            text: "Magento Developer"
        },
        {
            image: data,
            text: "Data Scientist"
        },
        {
            image: webflow,
            text: "Webflow Developer"
        },
        {
            image: dotnet,
            text: "Dotnet Developer"
        },
    ]
    //array for designs
    const design = [
        {
            image: figma,
            text: "UX Designer"
        },
        {
            image: ps,
            text: "Graphics Designer"
        },
        {
            image: ai,
            text: "Illustration Artist"
        },
        {
            image: unreal,
            text: "Unreal Engine"
        },
        {
            image: cinema,
            text: "Cinema 4D"
        },
    ]


  return (
    <div className='  mt-20  '>


    <div className=' bg-[#EDEFFF] transform rotate-[-1deg] scale-110 w-screen h-fit '>
        <div className=' lg:w-screen h-fit flex flex-col pt-10 lg:pt-40 pb-20 items-center gap-20  rotate-[1deg] '>


            <div className=' w-[88%] lg:w-[67%]'>
                <p className='text-[28px] lg:text-[54px] font-[600] lg:font-[700] text-center leading-tight lg:leading-[64px]'>Your one-stop marketplace for finding the talent your business needs.</p>
            </div>
            
            <div className=' grid lg:grid-cols-2 w-[85%] justify-center  items-center  lg:pr-20 gap-y-10 '>

{/* achievements */}
                <div className='flex flex-col gap-4 w-[100%] lg:w-[380px]'>
                    <p className='text-[18px] lg:text-[24px]  leading-tight font-[500]'>Find Dev and IT professionals to scale your business.</p>
                    <div className='grid grid-cols-2 text-[16px] font-[400] text-[#202229] gap-y-3'>
                        {
                            earns.map((earn) => (
                                <div key={earn.id} className='flex gap-2'>
                                    <img src={earn.image} alt="earn" />
                                    <p className='text-[14px] lg:text-[16px]'>{earn.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
{/* IT and development */}

                <div className='flex flex-col  gap-4 bg-[#FFFFFF] p-4 rounded-[7px] w-[100%] lg:w-fit '>
                    <p className='text-[16px] font-[500] '>IT & Development</p>
                    <div className='grid grid-cols-2  lg:grid-cols-6 gap-6 '>
                        {
                            IT.map((it) => (
                                <div key={it.text} className='flex flex-col items-center '>
                                    <div className='h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center '>
                                        <img src={it.image} alt="it" />
                                    </div>
                                    <p className='text-[14px] font-[600] w-[81px] text-center'>{it.text}</p>
                                </div>
                            ))
                        }
                        <div className='flex flex-col items-center '>
                                    <div className='h-[96px] w-[96px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center '>
                                        <img src={next} alt="it" />
                                    </div>
                                   
                        </div>

                    </div>
                </div>
{/* achievements */}

                <div className='flex flex-col gap-4 w-[100%] lg:w-[380px]'>
                    <p className='text-[18px] lg:text-[24px]  leading-tight font-[500]'>Explore Creative individuals with a keen eye for detail.  </p>
                    <div className='grid grid-cols-2 text-[16px] font-[400] text-[#202229] gap-y-3'>
                        {
                            earns.map((earn) => (
                                <div key={earn.id} className='flex gap-2'>
                                    <img src={earn.image} alt="earn" />
                                    <p className='text-[14px] lg:text-[16px]'>{earn.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className='flex flex-col gap-4 bg-[#FFFFFF] p-4 rounded-[7px] w-[100%] lg:w-fit'>
                    <p className='text-[16px] font-[500] '>IT & Development</p>
                    <div className='grid grid-cols-2  lg:grid-cols-6 gap-6 '>
                        <div className='flex flex-col items-center '>
                            <div className='h-[96px] w-[96px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center '>
                                <img src={prev} alt="it" />
                            </div>
                                   
                        </div>
                        {
                            design.map((design) => (
                                <div key={design.text} className='flex flex-col items-center '>
                                    <div className='h-[96px] w-[96px] rounded-full bg-[#F6F6F6] flex items-center justify-center '>
                                        <img src={design.image} alt="it" />
                                    </div>
                                    <p className='text-[14px] font-[600] w-[81px] text-center'>{design.text}</p>
                                </div>
                            ))
                        }
                        

                    </div>
                </div>

                <div className='flex  gap-4 items-center'>
                    <img src={more} alt="more" className='w-[54px] lg:w-[74px]' /> 
                    <p className='lg:text-[22px] font-[500]'>Explore More</p>
                </div>

                <div>
                    <p className='lg:text-[22px] text-[#202229]'><span className='font-bold'>30 More</span> to explore</p>
                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default MarketPlace