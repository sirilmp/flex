import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='bg-gray-900 w-full h-full flex flex-col items-center pb-20 sm:pb-28 md:pb-20 lg:pb-44'>
                <div className='max-w-3xl w-full pt-5 pb-2 px-6 md:px-0'>
                    <h2 className='text-center text-white text-4xl md:text-6xl font-bold my-8 leading-snug'>A small business is only as good as its tools.</h2>
                    <p className='text-gray-400 font-semibold px-5 text-xs md:text-base'>We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                    <div className='justify-center flex w-full mt-6'>
                        <button className='mr-2 text-white bg-gray-700 px-3 py-2 rounded-md font-thin transform duration-200 hover:bg-gray-600'>Request a Demo</button>
                        <button className='ml-2 text-white bg-green-500 px-3 py-2 rounded-md font-thin transform duration-200 hover:bg-green-600'>Sign Up</button>
                    </div>
                </div>
            </div>
            <img className='text-green-500 w-full transform -translate-y-1' src="../assets/images/bg_wave.svg" alt="wave" />
            <div className='w-full px-10'>
                <div className='hero-bg-image flex justify-center items-center mx-auto transform -translate-y-60 sm:-translate-y-56 md:-translate-y-40 lg:-translate-y-64'>
                    <img className='w-14 md:w-16 transform duration-300 hover:rotate-90 hover:scale-110 hover:shadow-md rounded-full hover:shadow-green-400 cursor-pointer' src="../assets/images/Play.svg" alt="play btn" />
                </div>
            </div>

        </>
    )
}

export default Hero