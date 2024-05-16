import React from 'react'

const FAQ = () => {
    const faq1 = [
        "How long are the average projects?",
        "How does the payment works?",
        "How much can I earn?"
    ];

    const faq2 = [
        "How long are the average projects?",
        "How long are the average projects?",
        "How much can I earn?"
    ]
  return (
    <div>
        <div className='py-20  bg-[#F3F3F3]'>
            <div className='flex justify-center pb-20 text-center lg:text-start ' >
                <p className='text-[36px] lg:text-[54px] font-[700]'>FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div>
                <div className='grid grid-cols-3  lg:grid-cols-6'>
                    <div className='cursor-pointer border h-[80px] flex items-center justify-center font-bold'>General</div>
                    <div className='cursor-pointer col-span-2 pl-2 lg:pl-0 lg:col-span-5 border h-[80px] flex items-center justify-center font-bold'>I want to work part-time, is that possible</div>
                </div>
                    {
                        faq1.map((item, index) => (
                            <div className='grid grid-cols-6'>
                                <div className='cursor-pointer border-y h-[80px] flex items-center justify-center'></div>
                                <div key={index} className='cursor-pointer border-y col-span-5  h-[80px] flex items-center justify-center'>{item}</div>
                            </div>
                        ))
                    }

            </div>

            
            <div >
                <div className='grid grid-cols-2 lg:grid-cols-6'>
                    <div className='border h-[80px] flex items-center justify-center font-bold'>General</div>
                    <div className='cursor-pointer col-span-1 border h-[80px] flex items-center justify-center font-bold'>Joining Process</div>
                    <div className='cursor-pointer col-span-4 border h-[80px] flex items-center justify-center font-bold'>I want to work part-time, is that possible</div>
                </div>
                {
                        faq2.map((item, index) => (
                            <div className='grid grid-cols-6'>
                                <div className='cursor-pointer border-y h-[80px] flex items-center justify-center'></div>
                                <div key={index} className=' cursor-pointer border-y col-span-5  h-[80px] flex items-center justify-center'>{item}</div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default FAQ