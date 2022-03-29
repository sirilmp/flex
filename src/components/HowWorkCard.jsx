import React from 'react'

function HowWorkCard({count,title,para}) {
  return (
    <div className='text-green-50 max-w-xs sm:w-72 bg-gray-700 flex justify-center items-center flex-col p-5 rounded-md'>
      <div className='bg-green-500 w-14 h-14 rounded-full flex justify-center items-center text-gray-900 font-black transform -translate-y-10 border-4 border-gray-900 -mb-4'>
      <p>{count}</p>
      </div>
   <div className='w-full flex justify-start'>
   <h3 className='text-lg font-bold max-w-xs text-left w-32 text-gray-100'>{title}</h3>
   </div>
      <p className='text-sm p- mt-2 font-medium text-gray-500'>{para}</p>
    </div>
  )
}

export default HowWorkCard