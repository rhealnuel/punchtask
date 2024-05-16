import React from 'react'
import next from "../assets/blackmore.svg"
import logo from '../assets/footlogo.svg'

const Footer = () => {

    const links = [
        {
            head: "PLATFORM",
            text: ["Find Work", "Find Talent", "Categories", "About Us"]
        },
        {
            head: "CATEGORIES",
            text: ["Data Science", "IT & Networking", "Web & Mobile"]
        },
        {
            head: "HELP",
            text: ["FAQ’s", "Contact Us"]
        },
        {
            head: "GET IN TOUCH @",
            text: ["Instagram", "LinkedIn", "Twitter"]
        },
    ]
  return (
    <div className='bg-[#0C0C0C] ' >
        <div className='w-screen h-full py-20 flex flex-col items-center'>

            <div className='bg-[#525AA0] w-[90%] rounded-2xl  lg:w-[80%] h-[460px] flex flex-col items-center justify-center text-center gap-8 rotate-[-3deg] skew-x-[-3deg]'>
                <p className='font-[600] text-[36px] lg:text-[54px] text-white lg:w-[680px] leading-[64px] rotate-[3deg]'>Need a job done, and done well? Get started</p>
                <img src={next} alt="more" className=' rotate-[93deg] ' />
            </div>


            <div className='pt-52 pb-36 grid lg:grid-cols-3 lg:px-10 gap-x-10 lg:items-start items-center'>
                <div className='flex flex-col items-center lg:items-start gap-10 w-screen'>
                    <div className='flex flex-col gap-6 items-center lg:items-start'>
                        <img src={logo} alt="logo" className='w-[120px]' />
                        <p className='text-white opacity-[80%] font-[400] w-[284px]'>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                    </div>

                    <div className='flex flex-col gap-6 items-center lg:items-start pb-20 lg:pb-0'>
                        <p className='text-white opacity-[20%]'>LINKS AND REDIRECTS</p>
                        <div className='flex gap-4'>
                            <button className='h-[50px] px-10 text-14px bg-[#292B34] opacity-[70%] text-white rounded-[20px]'>Hire now</button>
                            <button className='h-[50px] px-10 text-14px bg-[#292B34] opacity-[70%] text-white rounded-[20px]'>Apply now</button>
                        </div>
                    </div>
                </div>


                <div className=' lg:col-span-2 flex flex-col gap-20'>
                    <div >
                        <p className='font-[600] text-[36px] lg:text-[54px] lg:leading-[64px] text-center lg:text-start text-white lg:w-[770px]'>Connecting the right people to the right businesses.</p>
                    </div>

                    <div className='flex lg:flex-row flex-col items-center lg:justify-between lg:pr-10'>
                        {
                            links.map((link, index) =>(
                                <div key={index} className='flex flex-col gap-2 lg:gap-6 text-center lg:text-start pb-6 lg:pb-0'>
                                    <p className='text-[14px] font-[600] text-white opacity-[20%]'>{link.head}</p>
                                    <p className='text-[18px] text-white'>{link.text[0]}</p>
                                    <p className='text-[18px] text-white'>{link.text[1]}</p>
                                    <p className='text-[18px] text-white'  >{link.text[2]}</p>
                                    <p className='text-[18px] text-white'>{link.text[3]}</p>

                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
        <div className='flex justify-between text-white px-2 text-[12px] lg:text-[18px] lg:px-20 py-4 border-t border-[#202229]'>
            <p >All rights reserved  by Zwilt</p>
            <div className='flex gap-6  opacity-[20%]'>
                <p className='underline' >Privacy Policy</p>
                <p className='underline'>Terms and Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer