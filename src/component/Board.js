import React from 'react'
import image from '../assets/onboard.svg'

const Board = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-4 px-4 lg:px-10 py-20 text-center lg:text-start '>
            <div>
                <p className='font-[700] text-[36px] lg:text-[54px] lg:leading-[64px] pb-4 lg:pb-10'>Why choose Zwilt?</p>
                <p className='font-[400] lg:text-[22px]'>
                    We take complex hiring processes - 
                    and simplify them. Connecting you to 
                    the world’s highly qualified talent pool.
                </p>
            </div>

            <div className=' lg:col-span-3 pt-20 lg:pt-0 pb-10 lg:pb-0'>
                <img src={image} alt="board" />
            </div>
        </div>
    </div>
  )
}

export default Board