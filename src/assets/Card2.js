import React from 'react'
import card2 from '../assets/card2.svg'


export const Card2 = () => {
  return (
        <div className=" absolute top-[-120px] right-4 hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#C8EFC4] rounded-bl-3xl'>
                    <img src={card2} alt="card1" />
                </div>
                <div className='flex flex-col gap-4 px-4 py-4'>
                    <p className='text-[18px] '>System ops Engineer</p>
                    <p className='text-[12px]'>Abu Dhabi, UAE 5 years experience</p>
                </div>
            </div>        
        </div>  
    )
}
