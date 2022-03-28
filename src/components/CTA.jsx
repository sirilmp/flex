import React from 'react'

const CTA = () => {
    return (
        <>
            <img src="../assets/images/bg_wave.svg" className='w-full transform rotate-180 translate-y-1' alt="" />
           <div className='bg-gray-900 px-5 pt-14 pb-10'>
           <h1 className='font-bold text-4xl text-center text-gray-400'>Gain more insight into how people use your</h1>
            <p className='max-w-2xl text-center font-medium mx-auto mt-2 text-gray-600'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
           </div>
            <div className='bg-gray-900 mx-auto pt-8 pb-14 px-5 lg:px-36 flex flex-col md:flex-row justify-center items-center'>
                <div className='md:w-1/2 w-full mr-3 z-20'>
                    <h2 className='md:max-w-xs w-full text-center md:text-left leading-snug text-4xl text-gray-700 font-thin'>Join 6,000+ startups growing with Flex</h2>
                    <div className='flex items-center mt-8'>
                        <img src="../assets/images/checkbox.svg" alt="" />
                        <p className='text-gray-500 font-medium ml-2'>Mauris pellentesque congue libero nec</p>
                    </div>
                    <div className='flex items-center my-4'>
                        <img src="../assets/images/checkbox.svg" alt="" />
                        <p className='text-gray-500 font-medium ml-2'>Suspendisse mollis tincidunt</p>
                    </div>
                    <div className='flex items-center my-4'>
                        <img src="../assets/images/checkbox.svg" alt="" />
                        <p className='text-gray-500 font-medium ml-2'>Praesent varius justo vel justo pulvinar</p>
                    </div>
                </div>
                <div className='w-auto relative ml-3 mt-5 md:mt-0 cta-shape-1-before'>
                    <div className='relative cta-shape-2-before'>
                        <img src="../assets/images/cta_img.png" className='' alt="cta_img" />
                    </div>

                </div>
            </div> 
            <img src="../assets/images/bg_wave.svg" className='w-full transform -translate-y-1' alt="" />
        </>
    )
}

export default CTA