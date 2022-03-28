import React from 'react'
import HowWorkCard from './HowWorkCard'
// import data from '../workCardData'

const HowWork = () => {

    const data = [
        {
            count: 1,
            title: 'Measure your performance',
            para: 'Stay connected with your team and make quick decisions wherever you are.'
        },
        {
            count: 2,
            title: 'Custom analytics',
            para: 'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.'
        },
        {
            count: 3,
            title: 'Team Management',
            para: 'Stay connected with your team and make quick decisions wherever you are.'
        },
        {
            count: 4,
            title: 'Build your website',
            para: 'A tool that lets you build a dream website even if you know nothing about web design or programming.'
        },
        {
            count: 5,
            title: 'Connect multiple apps',
            para: 'The first business platform to bring together all of your products from one place.'
        },
        {
            count: 6,
            title: 'Easy setup for your project',
            para: 'End to End Business Platform, Sales Management, Marketing Automation, Help Desk'
        },
    ]

    return (
        <>
            <img src="../assets/images/bg_wave.svg" className='w-full transform rotate-180 translate-y-1' alt="" />
            <div className='bg-gray-900 px-5 pt-14 pb-2 lg:px-28'>
                <div className='pb-10 flex items-center flex-col md:flex-row justify-center'>
                    <div className='md:w-1/2 w-full max-w-xl pr-3 md:max-w-lg mb-10 md:mb-0'>
                        <h1 className='font-bold text-4xl text-center md:text-left text-gray-400'>Gain more insight into how people use your</h1>
                        <p className='max-w-2xl text-center md:text-left font-medium mx-auto mt-3 text-gray-600'>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.</p>
                    </div>
                    <div className='w-full md:w-1/2 pl-3 how_work_bg flex justify-center items-center'>
                        <img className='w-12 md:w-16 hover:rotate-90 transform duration-200 cursor-pointer hover:scale-110 hover:shadow-md rounded-full' src="../assets/images/play.svg" alt="play" />
                    </div>
                    <div>
                    </div>
                </div>
                <div className='w-full h-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-16 pb-20 pt-10'>
                {
                    data.map(({title,count,para}) => (
                        <div className='even:place-self-end odd:place-self-start md:even:place-self-center md:odd:place-self-center' key={count} >
                        <HowWorkCard title={title} count={count} para={para}  />
                    </div>
                    ))
                }
                </div>
            </div>

            <img src="../assets/images/bg_wave.svg" className='w-full transform -translate-y-1' alt="" />
        </>
    )
}

export default HowWork