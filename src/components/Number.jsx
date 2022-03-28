import React from 'react'

const Number = () => {
    return (
        <div className='mx-auto py-32 px-5 lg:px-20'>
            <h1 className='font-bold text-4xl text-center text-gray-900'>We believe in the power of data</h1>
            <p className='max-w-2xl text-center font-medium mx-auto mt-2 text-gray-600'> Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
            <div className='mx-auto pt-16 px-5 lg:px-36 flex flex-wrap flex-row md:justify-between justify-center items-center line-bg'>
                <div className='ml-7 mr-7 mb-10'>
                    <h3 className='text-4xl text-green-500 font-black'>235.000</h3>
                    <p className='mt-0.5 font-medium text-gray-600 text-sm'>Projects completed</p>
                </div>
                <div className='ml-7 mr-7 mb-10'>
                    <h3 className='text-4xl text-green-500 font-black'>$10ma</h3>
                    <p className='mt-0.5 font-medium text-gray-600 text-sm'>APR</p></div>
                <div className='ml-7 mr-7 mb-10'>
                    <h3 className='text-4xl text-green-500 font-black'>+50.000</h3>
                    <p className='mt-0.5 font-medium text-gray-600 text-sm'>Hours Saved Annually</p></div>
                <div className='ml-7 mr-7 mb-10'>
                    <h3 className='text-4xl text-green-500 font-black'>3.500</h3>
                    <p className='mt-0.5 font-medium text-gray-600 text-sm'>Unique Users</p></div>
            </div>
        </div>
    )
}

export default Number