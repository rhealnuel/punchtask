import React from 'react'
import form from '../assets/form1.jpg'
import line1 from '../assets/formline1.svg'
import line2 from '../assets/formline2.svg'

export const Form1 = () => {

    const lines = [
        {
            line1: line1,
            line2: line2
        },
        {
            line1: line1,
            line2: line2
        }, 
        {
            line1: line1,
            line2: line2
        },
    ]


  return (
    <div>
        <div className='hidden lg:flex absolute top-[-40px] right-[300px]  flex-col gap-6 bg-white h-[295px] shadow-lg p-6 w-fit rounded-2xl'>
            <div className='flex gap-4 items-center'>
                <img src={form} alt="form" />
                <div className='flex flex-col gap-2'>
                    <div className='h-[10px] w-[66px] bg-[#D8D2FF] rounded-md'></div>
                    <div className='h-[10px] w-[85px] bg-[#D8D2FF] rounded-md'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 '>
                {
                    lines.map((line, index) => (

                        <div key={index} className='flex flex-col gap-2'>
                            <img src={line.line1} alt="line" className='w-[152px] h-[10px]'/>
                            <img src={line.line2} alt="line" className='w-[171px] h-[10px]'/>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}
