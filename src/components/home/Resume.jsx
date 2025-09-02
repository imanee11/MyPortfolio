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




const Resume = () => {
    return (
        <>
            <div id="resume" className='font-syne flex flex-col pt-[10vh]'>
                <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                    <BsStars />
                    <p>Resume</p>
                </div>
                <div className='pt-5'>
                    <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                        Education and practical experience
                    </p>
                </div>
                {/* education */}
                <div className='border-b-[1px] border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8'>
                    <p className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>My education</p>
                </div>
                <div>
                    {/* 1 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">2020 - 2021</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Baccalauréat in Physical Sciences </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Abi Chouaib Doukkali </span>
                            High School
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">2021 - 2023</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Specialized Technician Diploma on Web Development </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lalla Aicha </span>
                            Mixed Center
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">May - Nov 2024</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>6 month training in web development </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lions Geek </span>
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">Mai 2025 - Présent</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Full-stack web development bootcamp </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Geeks Institute </span>
                            {/* Mixed Center */}
                        </p>
                    </div>
                </div>

                {/* experience */}
                <div className='border-b-[1px] border-[#d1d5e0] dark:border-[#303033] pb-10 pt-24'>
                    <p className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Work experience</p>
                </div>
                <div>
                    {/* 1 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">May - Nov 2024</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Working on projects during the training </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Lions Geek </span>
                            throughout the 6 months
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="grid md:grid-cols-[15vw_1fr] grid-rows-1 border-b border-[#d1d5e0] dark:border-[#303033] md:py-10 py-8 gap-x-4 gap-y-2">
                        <p className="md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]">Mai 2025 - Présent</p>
                        <p className='md:text-[15px] text-[15px] text-[#424550] dark:text-[#C7C6D3]'>
                            <span className='md:text-[18px] text-[22px] text-[#22232C] dark:text-[#E9E9F1] font-bold'>Developing real projects during training </span>
                            at
                            <span className='cursor-pointer md:text-[15px] text-[15px] text-[#22232C] dark:text-[#E9E9F1] font-bold'> Geeks Institute</span>
                        </p>
                    </div>
                </div>

                {/* tools */}
                <p className='md:text-[30px] text-[28px] font-bold text-[#22232C] dark:text-[#E9E9F1] pb-10 pt-24'>My favourite tools</p>
                <div className='flex flex-wrap items-center justify-between gap-x-2 gap-y-4'>
                    {/* html */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoHtml5 className="lg:text-[70px] text-[60px] text-[#F16529]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>HTML5</p>
                        </div>
                    </div>

                    {/* css */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoCss3 className="md:text-[70px] text-[60px] text-[#244bdc]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>CSS</p>
                        </div>
                    </div>

                    {/* SASS */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaSass className="md:text-[70px] text-[60px] text-[#CD6799]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>SASS</p>
                        </div>
                    </div>

                    {/* bootstrap */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaBootstrap className="md:text-[70px] text-[60px] text-[#8310f3]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Bootstrap</p>
                        </div>
                    </div>

                    {/* react */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaReact className="md:text-[70px] text-[60px] text-[#61dbfb]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>React JS</p>
                        </div>
                    </div>

                    {/* tailwind */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <RiTailwindCssFill className="md:text-[70px] text-[60px] text-[#02afc9]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Tailwind</p>
                        </div>
                    </div>

                    {/* laravel */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaLaravel className="md:text-[70px] text-[60px] text-[#F05340]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Laravel</p>
                        </div>
                    </div>

                    {/* JS */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoLogoJavascript className="md:text-[70px] text-[60px] text-[#f0db4f]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>JavaScript</p>
                        </div>
                    </div>

                    {/* gitHub */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <FaGithub className="md:text-[70px] text-[60px] text-[#111] dark:text-[#3e3e3e]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>GitHub</p>
                        </div>
                    </div>

                    {/* mysql */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <GrMysql className="md:text-[70px] text-[60px] text-[#00618a]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>MySql</p>
                        </div>
                    </div>

                    {/* Notion */}
                    <div className="flex items-center justify-center bg-transparent border-[1px] md:w-[11.5vw] w-[43vw] h-[24vh] p-6 rounded-3xl border-[#d1d5e0] dark:border-[#303033] transition duration-300 cursor-pointer">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <SiNotion className="md:text-[70px] text-[60px] text-[#000000] dark:text-[#3e3e3e]" />
                            <p className='text-[#22232C] dark:text-[#E9E9F1] text-[16px] font-bold'>Notion</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default Resume;