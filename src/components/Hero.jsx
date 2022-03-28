import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='bg-gray-900 p-5 pt-20 md:p-20'>
                <div className='relative'>
                    <div className='hero-shape-after'></div>
                    <div className='bg-white w-full h-full p-5 md:p-14 rounded-2xl relative'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold text-center max-w-2xl mx-auto leading-snug text-gray-800 mb-7'>A small business is only as good as its tools. </h1>
                        <p className='text-xs sm:text-sm md:text-base text-center max-w-2xl mx-auto mt-2 font-medium text-gray-500 mb-3'>We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center mt-4'>
                            <div className='w-72 mb-3 md:mb-0 md:w-80 sm:text-sm md:text-base flex justify-start pl-4 items-center bg-gray-400 py-3 text-white rounded-lg font-medium mr-3 cursor-pointer transform duration-200 hover:bg-gray-500'>
                               <img className='mr-2 mt-1' src="../assets/images/mail.svg" alt="mail" />
                                <p>Enter your work email</p>
                            </div>
                            <div className='w-48 md:w-52 text-sm md:text-base bg-green-500 py-3 rounded-lg flex justify-center ml-3 font-medium text-gray-200 cursor-pointer transform duration-200 hover:bg-green-600'>
                                <p>Get early access</p>
                            </div>
                        </div>
                        <p className='text-xs md:text-sm text-center mt-2 md:mt-1 text-gray-600 font-medium'>Start your free 14-day trial today, no credit card required.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero