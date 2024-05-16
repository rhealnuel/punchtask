import React from 'react'
import card1 from '../assets/card1.svg'


export const Card1 = () => {
  return (
        <div className="  absolute top-[-100px] right-[300px] hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#C8EFC4] rounded-bl-3xl'>
                    <img src={card1} alt="card1" />
                </div>
                <div className='flex flex-col gap-4 px-4 py-4'>
                    <p className='text-[18px] '>Ruby Developer</p>
                    <p className='text-[12px]'>Redwood City, California 7 years experience</p>
                </div>
            </div>        
        </div>  
    )
}
