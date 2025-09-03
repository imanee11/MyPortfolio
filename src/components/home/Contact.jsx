import React from 'react';

import { BsStars } from "react-icons/bs";
import { TbSend } from "react-icons/tb";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div id="contact" className='font-syne flex flex-col pt-[10vh]'>
                <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                    <BsStars />
                    <p>Contact</p>
                </div>
                <div className='pt-5'>
                    <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Let's make something awesome together!
                    </p>
                </div>

                {/* form */}
                <div className='md:py-16 py-10 flex flex-col gap-10'>
                    {/* 1 */}
                    <div className='flex flex-col md:flex-row md:gap-0 gap-y-10 justify-between'>
                        <div className='md:w-[48%] w-[100%]'>
                            <input type="text" placeholder='Your First Name*' className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]' />
                        </div>
                        <div className='md:w-[48%] w-[100%]'>
                            <input type="text" placeholder='Your Last Name*' className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]' />
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='flex flex-col md:flex-row md:gap-0 gap-y-10 justify-between '>
                        <div className='md:w-[48%] w-[100%]'>
                            <input type="text" placeholder='Email Adress*' className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]' />
                        </div>
                        <div className='md:w-[48%] w-[100%]'>
                            <input type="text" placeholder='Phone Number*' className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]' />
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='w-[100%]'>
                        <textarea name="" id="" placeholder='A Few Words*' rows={4} className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'></textarea>
                    </div>

                    {/* btn */}
                    <div>
                        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                            Send Message <TbSend />
                        </button>
                    </div>
                </div>

                {/* social */}
                <div className='flex gap-x-4'>
                    <div className="hover:scale-105 flex items-center justify-center bg-transparent border-[1px] md:w-[11vw] w-[43vw] h-[19vh] p-6 rounded-3xl border-[#d1d5e0] hover:border-[#abb1c4] dark:border-[#303033] transition duration-300 cursor-pointer group">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaLinkedinIn className="md:text-[50px] text-[40px] text-[#abb1c4] dark:text-[#7a7a80] group-hover:text-[#424550] dark:group-hover:text-[#C7C6D3] transition duration-300" />
                        </div>
                    </div>

                    <div className="hover:scale-105 flex items-center justify-center bg-transparent border-[1px] md:w-[11vw] w-[43vw] h-[19vh] p-6 rounded-3xl border-[#d1d5e0] hover:border-[#abb1c4] dark:border-[#303033] transition duration-300 cursor-pointer group">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaGithub className="md:text-[50px] text-[40px] text-[#abb1c4] dark:text-[#7a7a80] group-hover:text-[#424550] dark:group-hover:text-[#C7C6D3] transition duration-300" />
                        </div>
                    </div>
                </div>

                <div className='py-10 md:w-[80%]'>
                    <p className='md:text-[27px] text-[25px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.
                    </p>
                </div>

                {/* info */}
                <div className='border-t border-[#d1d5e0] dark:border-[#303033]'>
                    <div className='py-10 flex flex-col md:flex-row gap-x-[10vw] gap-y-5'>
                        <div>
                            <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Location</p>
                            <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>Casablanca, Morocco</p>
                        </div>

                        <div>
                            <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Phone</p>
                            <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>06 33 14 94 29</p>
                        </div>

                        <div>
                            <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Email</p>
                            <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>imaneelouannane@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;