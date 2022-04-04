import React from 'react'
import Slider from 'react-slick/lib/slider'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {

    const data = [
        {
            id: 1,
            name: 'Macauley Herring',
            profile: '../assets/images/team_1.png',
            position: 'CEO & Founder',
            para: 'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.'
        },
        {
            id: 2,
            name: 'Ivan Mathews',
            profile: '../assets/images/team_2.png',
            position: 'CTO',
            para: `I just can't get enough of Flex. I want to get a T-Shirt with Flex on it so I can show it off to everyone.`
        },
        {
            id: 3,
            name: 'Elen Benitez',
            profile: '../assets/images/team_3.png',
            position: 'CPO',
            para: `You won't regret it. We've seen amazing results already. Thanks guys, keep up the good work!`
        },
        {
            id: 4,
            name: ' Kacy Wade',
            profile: '../assets/images/team_4.png',
            position: 'Customer Success',
            para: 'Flex impressed me on multiple levels. I use Flex often. I would be lost without Flex. Flex is the real deal!'
        },
        {
            id: 5,
            name: 'Alya Levine',
            profile: '../assets/images/team_5.png',
            position: 'Backend Developer',
            para: `Flex was worth a fortune to my company. I couldn't have asked for more than this.`
        },
        {
            id: 6,
            name: 'Rose Hernandez',
            profile: '../assets/images/team_6.png',
            position: 'iOS Developer',
            para: 'Thanks for the great service. Flex did exactly what you said it does. Just what I was looking for.'
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <>
            <img src="../assets/images/bg_wave.svg" className='w-full transform rotate-180 translate-y-1' alt="" />
            <div className='bg-gray-900 w-full px-10 md:px-20 testimonial py-10'>
                <h1 className='font-bold text-2xl md:text-4xl text-center text-gray-100'>Testimonial from Flex app users</h1>
                <p className='max-w-2xl md:text-base text-sm text-center font-medium mx-auto mt-2 text-gray-600 mb-6'>With Flex, you can build websites without writing code.</p>
                <Slider {...settings}>
                    {
                        data.map(({ para, profile, name, position, id }) => (
                            <div key={id} className='w-full testimonial'>
                                <TestimonialCard para={para} profile={profile} name={name} position={position} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <img src="../assets/images/bg_wave.svg" className='w-full transform -translate-y-1' alt="" />
        </>
    )
}

export default Testimonial