import React from 'react'
import card3 from '../assets/card3.svg'


export const Card3 = () => {
  return (
        <div className="absolute bottom-[-90px] right-[300px] hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#D8D2FF] rounded-t-3xl'>
                    <img src={card3} alt="card1" />
                </div>
              
            </div>        
        </div>  
    )
}
