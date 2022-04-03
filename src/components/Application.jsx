import React from 'react'

const Application = () => {
    return (
      <>
        <div className='mx-auto pt-32 px-5 lg:px-20 line-bg'>
            <h1 className='font-bold text-4xl text-center text-gray-900'>Get our Free Mobile App</h1>
            <p className='max-w-2xl md:text-center font-medium mx-auto mt-2 text-gray-600 text-sm md:text-base'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
            <div className='w-full flex flex-wrap justify-center items-center mt-10'>
                <img className='mx-4 w-40 mt-6' src="../assets/images/apple_badge.svg" alt="apple badge" />
                <img className='w-40 mt-6' src="../assets/images/android.svg" alt="android badge" />
            </div>
            <div className='w-full flex justify-center items-start h-80 overflow-hidden mt-10 md:mt-32 z-50 relative'>
                <img className='' src="../assets/images/mobile_screen.svg" alt="mobile" />      
            </div>
            
        </div>
     </>
    )
}

export default Application