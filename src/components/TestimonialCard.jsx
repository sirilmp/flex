import React from 'react'

function TestimonialCard({ name, profile, position, para }) {
    return (
        <div className='w-full flex justify-center items-center flex-col px-1 md:px-7 relative pt-12 pb-10 md:pt-20'>
           <div className=' lg:max-w-2xl bg--500 relative'>
           <div className='para'>
           <p className='text-center font-semibold  text-xs md:text-lg mb-7 text-gray-600 relative'>{para}</p>
           </div>
           </div>
            <img className='w-20' src={profile} alt={name} />
            <p className='text-white font-thin tracking-wide text-sm mt-2'>{name}</p>
            <p className='text-green-500 text-xs font-normal tracking-wider'>{position}</p>
        </div>
    )
}

export default TestimonialCard