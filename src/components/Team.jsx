import React from 'react'
import TeamCard from './TeamCard'
import Slider from "react-slick";


const Team = () => {

    const data = [
        {
            id: 1,
            name: 'Macauley Herring',
            profile: '../assets/images/team_1.png',
            position: 'CEO & Founder',
            para: 'Dance is the hidden language of the soul.'
        },
        {
            id: 2,
            name: 'Ivan Mathews',
            profile: '../assets/images/team_2.png',
            position: 'CTO',
            para: 'Everything you’ve ever wanted is on the other side of fear.'
        },
        {
            id: 3,
            name: 'Elen Benitez',
            profile: '../assets/images/team_3.png',
            position: 'CPO',
            para: 'The only way to do great work is to love what you do.'
        },
        {
            id: 4,
            name: ' Kacy Wade',
            profile: '../assets/images/team_4.png',
            position: 'Customer Success',
            para: 'There are no traffic jams along the extra mile.'
        },
        {
            id: 5,
            name: 'Alya Levine',
            profile: '../assets/images/team_5.png',
            position: 'Backend Developer',
            para: 'The mind is everything. What you think you become.'
        },
        {
            id: 6,
            name: 'Rose Hernandez',
            profile: '../assets/images/team_6.png',
            position: 'iOS Developer',
            para: 'Whether you think you can or you think you can’t, you’re right.'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='mx-auto py-32 px-5 lg:px-20 team'>
                <h1 className='font-bold text-4xl text-center text-gray-900'>Our team is the best in the business.</h1>
                <p className='max-w-2xl text-center font-medium mx-auto mt-2 text-gray-600'>Highly professional and capable of running your business across all digital channels.</p>
                <div className='hidden lg:flex flex-row flex-wrap justify-start items-start md:justify-center md:items-center'>
                    {
                        data.map(({ name, id, profile, position, para }) => (
                            <div key={id} >
                                <TeamCard name={name} profile={profile} position={position} para={para} />
                            </div>
                        ))
                    }
                </div>
                <div className='p-10 block lg:hidden'>
                    <Slider {...settings}>
                        {
                            data.map(({ name, id, profile, position, para }) => (
                                <div key={id} className='w-64 mx-auto m-10'>
                                    <TeamCard name={name} profile={profile} position={position} para={para} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Team