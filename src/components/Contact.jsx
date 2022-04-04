import React from 'react'

function Contact() {
    return (
        <>
            <div className='mx-auto pt-32 px-5 lg:px-20'>
                <h1 className='font-bold text-4xl text-center text-gray-900'>Let’s stay connected</h1>
                <p className='max-w-2xl text-center font-medium mx-auto mt-3 text-gray-500 mb-6'>It's never been easier to get in touch with Flex. Call us, use our live chat widget or email and we'll get back to you as soon as possible!</p>
                <div className='grid grid-cols-1 place-items-center w-full h-full sm:grid-cols-2 lg:grid-cols-3 p-10'>
                    {/* mail */}
                    <div className='flex flex-col justify-center items-center ml-3 mr-3 mt-5 lg:mt-0'>
                        <div className='w-10 h-10 mb-3 flex justify-center items-center bg-green-500 rounded-full'>
                            <img className='w-7' src="../assets/images/mail-contact.svg" alt="mail" />
                        </div>
                        <h2 className='text-lg font-extrabold text-gray-900'>Email</h2>
                        <p className='text-gray-500'>contact@flex.co</p>
                    </div>
                    {/* call */}
                    <div className='flex flex-col justify-center items-center ml-3 mr-3 mt-5 lg:mt-0'>
                        <div className='w-10 h-10 mb-3 flex justify-center items-center bg-green-500 rounded-full'>
                            <img className='w-7' src="../assets/images/call-contact.svg" alt="call" />
                        </div>
                        <h2 className='text-lg font-extrabold text-gray-900'>Phone</h2>
                        <p className='text-gray-500 whitespace-nowrap'>+7-843-672-431</p>
                    </div>
                    {/* social */}
                    <div className='flex flex-col justify-center items-center ml-3 mr-3 mt-5 lg:mt-0'>
                        <div className='w-10 h-10 mb-3 flex justify-center items-center bg-green-500 rounded-full'>
                            <img className='w-7' src="../assets/images/social-contact.svg" alt="social" />
                        </div>
                        <h2 className='text-lg font-extrabold text-gray-900'>Socials</h2>
                        <div>
                            <i className="text-green-500 ml-1 mr-1 cursor-pointer hover:-translate-y-0.5 duration-200 fa-brands fa-twitter"></i>
                            <i className="text-green-500 ml-1 mr-1 cursor-pointer hover:-translate-y-0.5 duration-200 fa-brands fa-facebook-f"></i>
                            <i className="text-green-500 ml-1 mr-1 cursor-pointer hover:-translate-y-0.5 duration-200 fa-brands fa-instagram"></i>
                            <i className="text-green-500 ml-1 mr-1 cursor-pointer hover:-translate-y-0.5 duration-200 fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-96 bg-white relative flex justify-center mt-16'>
                <div className='absolute h-56 bg-slate-900 w-full bottom-0 translate-y-1'></div>
                <div className='md:w-3/4 w-11/12 relative'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.601967237823!2d75.3404401242539!3d12.295506215207658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba45df42f6550ab%3A0xaa8ae0c49c4a98e5!2sKadumeni%2C%20Kerala%20670511!5e0!3m2!1sen!2sin!4v1649002588674!5m2!1sen!2sin" className='w-full h-513 absolute top-0 rounded-md border-none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='bg-gray-900 w-full md:h-40 h-10'></div>
            <img src="../assets/images/bg_wave.svg" className='w-full transform -translate-y-1' alt="" />
        </>
    )
}

export default Contact