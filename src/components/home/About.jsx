import React from 'react';

import { BsStars } from "react-icons/bs";


const About = () => {
    return (
        <>
            <div id="aboutme" className='font-syne flex flex-col pt-[10vh]'>
                <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                    <BsStars />
                    <p>About Me</p>
                </div>
                <div className='pt-5'>
                    <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Creating user-focused solutions for complex challenges
                    </p>
                </div>

                <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between pt-10 '>
                    <div className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'>
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>06+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Months of Experience</p>
                    </div>
                    <div className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'>
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>06+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Project Completed</p>
                    </div>
                    <div className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'>
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>03+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Happy Clients</p>
                    </div>
                </div>

                {/* about part */}
                <div className='pt-10 flex flex-col gap-10 md:gap-0 md:flex-row flex-wrap justify-between'>
                    {/* left */}
                    <div className='md:w-[60%] w-full'>
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px]'>This is Imane El Ouannane, A creative and passionate web developer who loves turning ideas into responsive and user-friendly websites. With a focus on clean code and sleek design.</p>
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px] pt-2'>I have been working with web technologies for more than 2 years.</p>
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px]'>Over these years, I've gained valuable experience in creating full websites and applications from scratch.</p>
                    </div>

                    {/* right */}
                    <div className='md:w-[30%] w-full flex flex-col gap-4'>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Name</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Imane El Ouannane</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Phone</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>123456789</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Email</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>imaneelouannane@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Location</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Casablanca, Morocco</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;