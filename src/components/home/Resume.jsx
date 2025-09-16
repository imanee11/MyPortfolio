import React from 'react';

import { BsStars } from "react-icons/bs";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNotion } from 'react-icons/si';

import { motion } from "framer-motion";


const Resume = () => {
    return (
        <>
            <div id="resume" className='font-syne flex flex-col pt-[10vh]'>
                <motion.div
                    className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] bg-[#E6EBF4] dark:bg-[#111111] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <BsStars />
                    <p>Resume</p>
                </motion.div>

                <motion.div
                    className='md:pt-5 pt-2'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Education and practical experience
                    </p>
                </motion.div>

                {/* education */}
                <motion.div
                    className='border-b-[1px] border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <p className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>My education</p>
                </motion.div>

                <div>
                    {/* 1 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">2020 - 2021</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Baccalauréat in Physical Sciences </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Abi Chouaib Doukkali </span>
                            High School
                        </p>
                    </motion.div>

                    {/* 2 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">2021 - 2023</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Specialized Technician Diploma on Web Development </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lalla Aicha </span>
                            Mixed Center
                        </p>
                    </motion.div>

                    {/* 3 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">May - Nov 2024</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>6 month training in web development </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lions Geek </span>
                        </p>
                    </motion.div>

                    {/* 4 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">Mai 2025 - Présent</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Full-stack web development bootcamp </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Geeks Institute </span>
                            {/* Mixed Center */}
                        </p>
                    </motion.div>
                </div>

                {/* experience */}
                <motion.div
                    className='border-b-[1px] border-[#d1d5e0] dark:border-[#303033] pb-10 pt-24'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <p className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Work experience</p>
                </motion.div>
                <div>
                    {/* 1 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">May - Nov 2024</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Working on projects during the training </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lions Geek </span>
                            throughout the 6 months
                        </p>
                    </motion.div>

                    {/* 2 */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} viewport={{ once: false }} className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">Mai 2025 - Présent</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Developing real projects during training </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Geeks Institute</span>
                        </p>
                    </motion.div>
                </div>

                {/* tools */}
                <motion.p
                    className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1] pb-10 pt-24'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >My favourite tools</motion.p>

                <div className='flex flex-wrap items-center justify-between gap-x-2 gap-y-4'>
                    {/* html */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoHtml5 className="lg:text-[70px] text-[60px] text-[#F16529]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>HTML5</p>
                        </div>
                    </motion.div>

                    {/* css */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoCss3 className="md:text-[70px] text-[60px] text-[#244bdc]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>CSS</p>
                        </div>
                    </motion.div>

                    {/* SASS */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaSass className="md:text-[70px] text-[60px] text-[#CD6799]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>SASS</p>
                        </div>
                    </motion.div>

                    {/* bootstrap */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaBootstrap className="md:text-[70px] text-[60px] text-[#8310f3]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Bootstrap</p>
                        </div>
                    </motion.div>

                    {/* react */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaReact className="md:text-[70px] text-[60px] text-[#61dbfb]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>React JS</p>
                        </div>
                    </motion.div>

                    {/* tailwind */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <RiTailwindCssFill className="md:text-[70px] text-[60px] text-[#02afc9]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Tailwind</p>
                        </div>
                    </motion.div>

                    {/* laravel */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaLaravel className="md:text-[70px] text-[60px] text-[#F05340]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Laravel</p>
                        </div>
                    </motion.div>

                    {/* JS */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoJavascript className="md:text-[70px] text-[60px] text-[#f0db4f]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>JavaScript</p>
                        </div>
                    </motion.div>

                    {/* gitHub */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaGithub className="md:text-[70px] text-[60px] text-[#111] dark:text-[#3e3e3e]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>GitHub</p>
                        </div>
                    </motion.div>

                    {/* mysql */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <GrMysql className="md:text-[70px] text-[60px] text-[#00618a]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>MySql</p>
                        </div>
                    </motion.div>

                    {/* Notion */}
                    <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: false }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <SiNotion className="md:text-[70px] text-[60px] text-[#000000] dark:text-[#3e3e3e]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Notion</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default Resume;