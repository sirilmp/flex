import React from 'react'

const TeamCard = ({ name, position, profile,para }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-white rounded-md shadow-md border border-gray-100 w-64 pt-8 pb-4 lg:m-2'>
            <img src={profile} alt={name} />
            <h5 className='text-lg font-bold mt-3 text-gray-900'>{name}</h5>
            <p className='text-sm font-medium mt-1 text-green-500'>{position}</p>
            <p className='text-sm font-medium mt-2 text-gray-800 text-center p-3'>{para}</p>
            <div>
            <i className="ml-2 mr-2 text-gray-700 duration-300 hover:text-green-500 cursor-pointer hover:-translate-y-1 fa-brands fa-facebook-f"></i>
            <i className="ml-2 mr-2 text-gray-700 duration-300 hover:text-green-500 cursor-pointer hover:-translate-y-1 fa-brands fa-twitter"></i>
            </div>
        </div>
    )
}

export default TeamCard