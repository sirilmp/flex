import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white px-5 py-32 pb-2 lg:px-28'>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 '>
                <div className='flex flex-col md:max-w-xs mb-10 lg:mb-0'>
                    <img src="../assets/images/logo-dark.svg" alt="logo" className='w-24' />
                    <p className='text-sm mt-2 text-gray-500 font-normal'>Launch your own Software As A Service Application with Flex Solutions.</p>
                </div>
                <div className='lg:mx-5 mb-10 lg:mb-0 w-full'>
                    <h5 className='font-bold text-gray-900 mb-2'>Product</h5>
                    <div className='text-sm w-full h-full font-medium leading-7 flex lg:flex-col flex-wrap justify-between items-center lg:items-start'>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Features</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Solutions</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Pricing</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Tutorials</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Updates</p>
                    </div>
                </div>
                <div className='px-2 lg:mx-5 mb-10 lg:mb-0'>
                    <h5 className='font-bold text-gray-900 mb-2'>Remaining</h5>
                    <div className='text-sm w-full h-full font-medium leading-7 flex lg:flex-col flex-wrap justify-between items-center lg:items-start'>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Blog</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Newsletter</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Help Center</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Careers</p>
                        <p className='cursor-pointer hover:text-green-500 hover:font-semibold duration-200'>Support</p>
                    </div>
                </div>
                <div className='mb-10 lg:mb-0'>
                    <h5 className='font-bold text-gray-900'>Newsletter</h5>
                  <div className='flex flex-wrap lg:flex-col w-full justify-center items-center'>
                  <input className='pl-2 w-1/2 lg:w-56 h-12 mt-2 focus:outline-none rounded-md bg-gray-50 focus:shadow-md focus:border-gray-400 border placeholder:text-gray-900 placeholder:font-medium font-medium' type="text" placeholder='pat@shuffle.dev' />
                    <button className='w-28 h-11 mt-2 bg-green-500 text-white ml-4 rounded-md duration-200 hover:bg-green-600'>Subscribe</button>
                  </div>
                </div>
            </div>
            <div className='border-t border-gray-900'>
                <p className='text-xs text-center mt-7 mb-2'>© 2021 Flex. All rights reserved.</p>
                <p className='text-xs text-center'>Design from <a className='font-bold hover:text-green-500' target={'_blank'}  href="https://www.figma.com/file/CPdfh9y3529Wca4WwMd9AI/Flex-UI-library-for-Tailwind-CSS-(Community)?node-id=628%3A22200">Figma</a> & developed by <a className='font-bold hover:text-green-500' target={'_blank'}  href="https://sirilmphilip.online">Sirilmp</a></p>
            </div>
        </div>
    )
}

export default Footer