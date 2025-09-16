import React, { useContext, useRef } from 'react';
import { BsStars } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiSquaresFourBold } from "react-icons/pi";
import CircularText from './animation/CircularText';
import { DarkModeContext } from '../../context/DarkModeContext';
import { motion, useInView } from 'framer-motion';


const Hero = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // const containerRef = useRef(null);
    // const isInView = useInView(containerRef, { once: true, margin: "-60px" });


    return (
        <>
            <div
                id="home"
                className='font-syne flex flex-col md:h-screen md:pt-[30vh]'
            >
                <motion.div
                    className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] bg-[#E6EBF4] dark:bg-[#111111] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <BsStars />
                    <p>Let's meet!</p>
                </motion.div>

                <div className='md:pt-5 pt-2' initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: false }}>
                    <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} viewport={{ once: false }} className="md:text-[55px] text-[38px] font-syne font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark">Hi, I'm Imane El Ouannane</motion.p>
                    <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} viewport={{ once: false }} className='md:text-[55px] text-[38px] font-syne font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>Full-Stack Developer.</motion.p>
                </div>

                <motion.div
                    className='pt-5 flex flex-col md:flex-row md:justify-between md:items-center'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <button onClick={() => { window.location.hash = ''; window.location.hash = '#portfolio'; }} className='w-full sm:w-auto flex items-center justify-center gap-2 md:border md:bg-none md:dark:bg-none md:border-[#c4cad8] md:text-[#22232C] text-[#E9E9F1] md:dark:text-[#E9E9F1] md:dark:border-[#4a4a4f] font-bold rounded-3xl px-4 py-3 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:bg-gradient-to-r dark:from-[#E4B8BF] dark:to-[#CEC4EF] dark:text-[#22232c]'>
                        My Works <PiSquaresFourBold />
                    </button>
                    <div className='hidden md:block'>
                        <CircularText
                            text="SCROLL*FOR*MORE*"
                            onHover="speedUp"
                            spinDuration={20}
                            className="custom-class"
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Hero;