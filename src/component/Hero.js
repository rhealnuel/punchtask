import React, { useState } from 'react'
import search from '../assets/searchicon.svg'
import head from '../assets/head.svg'

const Hero = () => {
  // using useState to track active department
  const [active, setActive] = useState("IT & Development")

  //Array of department
  const departments = ["IT & Development", "Design & Creative"]

  // Array of Skills
  const skills = [
                  "Python Developer", "Data Scientist", "Shopify Developer", "Shopify Developer",
                  "Front End Developer", "Python Developer", "MERN Stack Developer", "Shopify Developer",
                  "Full Stack Developer", "Full Stack Developer", "Python Developer"
                ]




  return (
    <div>
        <div className='flex flex-col items-center gap-6 py-10 lg:py-24'>
            <div className="inline-block text-center text-[36px] lg:text-[54px] font-[700] w-[80%] leading-tight">
                <p className=" inline-block">Finding the right fit
                <img src={head} alt="head" className="inline-block" />
                has never been easier</p>
            </div>
            <div className='w-[80%] lg:w-[38%] text-center text-[16px] lg:text-[22px]'>
              <p>With our rigorous pre-vetting process, you'll never have to worry
                about finding the ideal candidate ever again.</p>
            </div>
            <div className='flex justify-between items-center w-[90%] lg:w-[38%] h-fit border-[1.5px] border-[#F0F0F0] rounded-[15px] pl-6 '>
              <p className='text-[14px] lg:text-[16px]'>Looking for <span className='text-[#959595]'>design |</span></p>
              <img src={search} alt="search" className=' w-[50px] lg:w-[74px]'/>
            </div>

            <div className='lg:w-[67%] w-[90%] bg-[#F8F8F8] flex flex-col items-center justify-center gap-6 py-4 rounded-[15px]'>
                <div className='w-fit flex justify-center bg-[#D2D2D2] rounded-[15px]'>
                    {
                      departments.map((department) => (
                        <div className={`h-[44px] flex items-center px-6 rounded-[15px] text-[14px] lg:text-[16px] ${active === department ? "bg-[#C7F4C2] font-[600]" : "bg-none font-[500]"} cursor-pointer`} key={department} onClick={() => setActive(department)}>{department}</div>
                      ))
                    }
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 lg:gap-x-48 gap-y-2 px-2 lg:px-0'>
                  {
                    skills.map((skill) => (
                      <div key={skill} className='text-[#959595] text-[16px] cursor-pointer hover:text-black ' >
                          {skill}
                      </div>
                    ))
                  }
                  <p className='font-semibold cursor-pointer lg:text-[16px] '>Explore More </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero