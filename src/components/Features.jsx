import React from 'react'

const Features = () => {
    return (
        <div className='mx-auto py-32 px-5 lg:px-20'>
            <h1 className='font-bold text-4xl text-center text-gray-900'>Gain more insight into how people use your</h1>
            <p className='max-w-2xl text-center font-medium mx-auto mt-2 text-gray-600'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
            <div className='flex justify-center items-center md:items-stretch flex-col md:flex-row pt-16 line-bg'>
                {/* left side */}
                <div className='flex flex-col justify-around'>
                    <div className='flex justify-center flex-col w-full max-w-xs items-center'>
                        <div className='bg-green-500 w-12 h-12 flex justify-center items-center rounded-md text-white'>
                            <img src="../assets/images/mail.svg" alt="mail" />
                        </div>
                        <h3 className='mt-2 font-medium text-base '>Measure your performance</h3>
                        <p className='text-center'>Stay connected with your team and make quick decisions wherever you are. </p>
                    </div>
                    <div className='flex justify-center flex-col w-full max-w-xs items-center my-10 md:my-0'>
                        <div className='bg-green-500 w-12 h-12 flex justify-center items-center rounded-md text-white'>
                            <img src="../assets/images/edit.svg" alt="edit" />
                        </div>
                        <h3 className='mt-2 font-medium text-base '>Measure your performance</h3>
                        <p className='text-center'>Stay connected with your team and make quick decisions wherever you are. </p>
                    </div>
                </div>
                {/* center image */}
                <div className='mx-5'>
                    <img className='h-96 w-80 md:w-full md:h-full' src="../assets/images/features_image.png" alt="features" />
                </div>
                {/* right side */}
                <div className='flex flex-col justify-around'>
                    <div className='flex justify-center flex-col w-full max-w-xs items-center my-10 md:my-0'>
                        <div className='bg-green-500 w-12 h-12 flex justify-center items-center rounded-md text-white'>
                            <img src="../assets/images/chart.svg" alt="chart" />

                        </div>
                        <h3 className='mt-2 font-medium text-base '>Measure your performance</h3>
                        <p className='text-center'>Stay connected with your team and make quick decisions wherever you are. </p>
                    </div>
                    <div className='flex justify-center flex-col w-full max-w-xs items-center'>
                        <div className='bg-green-500 w-12 h-12 flex justify-center items-center rounded-md text-white'>
                            <img src="../assets/images/menu.svg" alt="menu" />
                        </div>
                        <h3 className='mt-2 font-medium text-base '>Measure your performance</h3>
                        <p className='text-center'>Stay connected with your team and make quick decisions wherever you are. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features