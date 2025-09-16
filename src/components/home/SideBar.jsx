import React, { useContext, useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { DarkModeContext } from '../../context/DarkModeContext';
import image from '../../constants/image';



const SideBar = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);


    return (
        // EBF0F7
        <nav className="bg-[#EBF0F7] dark:bg-[#161616] border border-[#d2d6e1] dark:border-[#303033] rounded-3xl min-h-[90vh]  md:w-[23vw] w-full  p-5 md:fixed md:top-1/2 md:transform md:-translate-y-1/2 flex flex-col justify-center font-syne">
            {/* logo */}
            <div className="mb-4">
                <p className="font-bold text-center text-[#22232c] dark:text-[#E9E9F1]">Imane El Ouannane</p>
            </div>

            {/* img part */}
            <div className="mb-4">
                <img
                    src={image.pfp}
                    alt=""
                    className="rounded-3xl object-cover"
                />
            </div>

            {/* info */}
            <div className="">
                <p className="text-[#424550] dark:text-[#C7C6D3] text-[13px]">Specialization:</p>
                <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold pb-1'>Full-Stack Developer</p>
                <p className="text-[#424550] dark:text-[#C7C6D3] text-[13px]">Based in:</p>
                <p className='text-[#22232c] dark:text-[#E9E9F1] font-bold'>Casablanca, Morocco</p>
            </div>
            <div className='flex gap-2 pt-2 mb-4'>
                <div className='text-[#424550] dark:text-[#C7C6D3] border border-[#abb3c3] dark:border-[#4b4b51] w-10 h-10 flex items-center justify-center rounded-2xl hover:scale-105 transition-transform duration-300'>
                    <a href="https://www.linkedin.com/in/imane-el-ouannane/"><FaLinkedinIn /></a>
                </div>
                <div className='text-[#424550] dark:text-[#C7C6D3] border border-[#abb3c3] dark:border-[#4b4b51] w-10 h-10 flex items-center justify-center rounded-2xl hover:scale-105 transition-transform duration-300'>
                    <a href="https://github.com/imanee11"><FaGithub /></a>
                </div>
            </div>
            <a href="/#contact" >
                <button className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:bg-gradient-to-r dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-[#E9E9F1] dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                    Let's Work Together!
                </button>
            </a>
        </nav>
    );
};

export default SideBar;
