import React, { useState } from 'react'

const Nav = () => {


    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='bg-gray-900 w-full px-5 md:px-2 py-5 shadow-md flex justify-between md:justify-around font-medium text-gray-300'>
            <div>
                <img src="../assets/images/Logo.svg" alt="" />
            </div>
            <div className='hidden md:block'>
                <a href="#">Product</a>
                <a className='mx-5' href="#">Features</a>
                <a className='mx-5' href="#">Price</a>
                <a href="#">Resources</a>
            </div>
            <div className='hidden md:block'>
                <button className='mr-5 capitalize text-gray-400 font-medium'>log in</button>
                <button className='ml-5 capitalize bg-green-500 text-white rounded-md px-2 py-1 transform duration-200 hover:bg-green-600'>sign in</button>
            </div>
            <div className='block md:hidden'>
                {
                    !menuOpen && <svg onClick={() => { setMenuOpen(true) }} className="cursor-pointer duration-200" width="38" height="30" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="20" fill=""></rect><rect width="37" height="2.5" rx="1.5" fill="#22C55E"></rect><rect y="16" width="25" height="2.5" rx="1.5" fill="#22C55E"></rect><rect y="8" width="31" height="2.5" rx="1.5" fill="#22C55E"></rect></svg>
                }
            </div>
            {
                menuOpen && <div className={`overflow-y-scroll min-h-min md:hidden absolute h-full bg-gray-900 px-3 py-6 left-0 top-0 transform duration-1000 w-72 ${!menuOpen && '-translate-y-60 transform duration-1000'}`}>
                    <div className='flex flex-col h-full justify-between'>
                        <div className='flex justify-between mb-5'>
                            <img src="../assets/images/Logo.svg" alt="" />
                            <svg onClick={() => { setMenuOpen(false) }} className="cursor-pointer text-right" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="18" width="25" height="2.5" rx="1.25" transform="rotate(-45 1 18)" fill="#22C55E"></rect><path d="M1.11612 0.883883C1.60427 0.395728 2.39573 0.395728 2.88388 0.883883L18.7938 16.7938C19.2819 17.2819 19.2819 18.0734 18.7938 18.5616V18.5616C18.3056 19.0497 17.5142 19.0497 17.026 18.5616L1.11612 2.65165C0.627961 2.1635 0.627961 1.37204 1.11612 0.883883V0.883883Z" fill="#22C55E"></path></svg>
                        </div>
                        <div className='flex flex-col'>
                            <a className=' hover:bg-gray-700 px-2 py-3 rounded-md' href="#">Product</a>
                            <a className='my-2 hover:bg-gray-700 px-2 py-3 rounded-md' href="#">Features</a>
                            <a className='my-2 hover:bg-gray-700 px-2 py-3 rounded-md' href="#">Price</a>
                            <a className=' hover:bg-gray-700 px-2 py-3 rounded-md' href="#">Resources</a>
                        </div>
                        <div className='flex flex-col px-3 '>
                            <button className='capitalize text-gray-400 font-medium'>log in</button>
                            <button className='my-5 capitalize bg-green-500 text-white rounded-md px-2 py-1 transform duration-200 hover:bg-green-600'>sign in</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Nav