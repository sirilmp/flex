import React from 'react'

const LogoCloud = () => {
  return (
       <div className='mx-auto py-24 px-5 lg:px-20 bg-gray-900 line-bg-dark'>
            <h1 className='font-bold text-4xl text-center text-gray-100'>Trusted by the top companies in this industry</h1>
            <p className='max-w-2xl md:text-center font-medium mx-auto mt-2 text-gray-600 text-sm md:text-base'>The only SaaS business platform that combines CRM, marketing automation & commerce.</p>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-10 mt-20'>
              <img className='sm:w-40 w-full max-w-fit ' src="../assets/images/logo_1.svg" alt="logo" />
              <img className='sm:w-40 w-full max-w-fit' src="../assets/images/logo_2.svg" alt="logo" />
              <img className='sm:w-40 w-full max-w-fit ' src="../assets/images/logo_3.svg" alt="logo" />
              <img className='sm:w-40 w-full max-w-fit' src="../assets/images/logo_4.svg" alt="logo" />
            </div>
      </div>
  )
}

export default LogoCloud