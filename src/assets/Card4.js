import React from 'react'
import card4 from '../assets/card4.svg'


export const Card4 = () => {
  return (
        <div className=" absolute bottom-[-100px] right-4 hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#FDDD8B] rounded-t-3xl'>
                    <img src={card4} alt="card1" />
                </div>
                
            </div>        
        </div>  
    )
}
