import React from 'react';
import { motion } from "framer-motion";


import { BsStars } from "react-icons/bs";


const About = () => {
    return (
        <>
            <div id="aboutme" className='font-syne flex flex-col pt-[10vh]'>

                <motion.div
                    className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] bg-[#E6EBF4] dark:bg-[#111111] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <BsStars />
                    <p>About Me</p>
                </motion.div>

                <motion.div
                    className='md:pt-5 pt-2'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Creating user-focused solutions for complex challenges
                    </p>
                </motion.div>

                <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between pt-10 '>
                    <motion.div
                        className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>08+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Months of Experience</p>
                    </motion.div>
                    <motion.div
                        className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>07+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Project Completed</p>
                    </motion.div>
                    <motion.div
                        className='md:w-[30%] w-full flex flex-col items-center justify-center px-5 py-7 rounded-3xl border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className='text-[60px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>03+</p>
                        <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Happy Clients</p>
                    </motion.div>
                </div>

                {/* about part */}
                <div className='pt-10 flex flex-col gap-10 md:gap-0 md:flex-row flex-wrap justify-between'>
                    {/* left */}
                    <motion.div
                        className='md:w-[60%] w-full'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px]'>This is Imane El Ouannane, A creative and passionate web developer who loves turning ideas into responsive and user-friendly websites. With a focus on clean code and sleek design.</p>
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px] pt-2'>I have been working with web technologies for more than 2 years.</p>
                        <p className='text-[#424550] dark:text-[#C7C6D3] text-[20px]'>Over these years, I've gained valuable experience in creating full websites and applications from scratch.</p>
                    </motion.div>

                    {/* right */}
                    <motion.div
                        className='md:w-[30%] w-full flex flex-col gap-4'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Name</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Imane El Ouannane</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Phone</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>0633149429</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Email</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>imaneelouannane@gmail.com</p>
                        </div>
                        <div>
                            <p className='text-[#424550] dark:text-[#C7C6D3] text-[13px]'>Location</p>
                            <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Casablanca, Morocco</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default About;