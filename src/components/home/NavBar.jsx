import React, { useContext, useEffect, useState } from 'react';
import {
    BiMessageDots,
    BiHomeAlt,
    BiBriefcase,
    BiUser,
    BiFile,
    BiPhone,
} from "react-icons/bi";
import { FiSun, FiMoon } from 'react-icons/fi';
import { DarkModeContext } from '../../context/DarkModeContext';

const NavBar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark', 'bg-[#111111]');
        } else {
            document.body.classList.remove('dark', 'bg-[#111111]');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'portfolio', 'aboutme', 'resume', 'contact'];
            const scrollY = window.scrollY;

            for (let id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop - 150;
                    const bottom = top + section.offsetHeight;
                    if (scrollY >= top && scrollY < bottom) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* ✅ Desktop NavBar */}
            <nav className='hidden lg:flex fixed top-[5vh] left-[30vw] right-[5vw] z-50 justify-between items-center font-syne'>
                <ul className="flex gap-3 font-semibold">
                    {['Home', 'Portfolio', 'About Me', 'Resume', 'Contact'].map((item, index) => {
                        const id = item.toLowerCase().replace(/\s+/g, '');
                        const isActive = activeSection === id;

                        return (
                            <li
                                key={index}
                                onClick={() => scrollToSection(id)}
                                className={`cursor-pointer transition duration-300 bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold
                                    ${isActive
                                        ? 'text-[#22232c] dark:text-[#E9E9F1] border border-[#0000004d] dark:border-[#fffffe4d]'
                                        : 'text-[#717586] hover:text-[#22232c] dark:hover:text-[#E9E9F1]'}
                                `}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <div className='flex items-center gap-5'>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className='bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:text-[#E9E9F1]'
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    <a href="mailto:imaneelouannane@gmail.com">
                        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                            Let's Talk! <BiMessageDots />
                        </button>
                    </a>
                </div>
            </nav>

            {/* ✅ Mobile Bottom NavBar */}
            <div className="lg:hidden fixed bottom-4 left-5 right-5 bg-transparent backdrop-blur-[20px] dark:bg-[#1a1a1a]/60 rounded-full flex justify-around items-center z-40 px-2 py-2">
                {[
                    { icon: BiHomeAlt, id: 'home' },
                    { icon: BiBriefcase, id: 'portfolio' },
                    { icon: BiUser, id: 'aboutme' },
                    { icon: BiFile, id: 'resume' },
                    { icon: BiPhone, id: 'contact' }
                ].map(({ icon: Icon, id }, i) => {
                    const isActive = activeSection === id;
                    return (
                        <button
                            key={i}
                            onClick={() => scrollToSection(id)}
                            className={`p-3 rounded-2xl transition-all duration-300
                                ${isActive
                                    ? 'text-[#E9E9F1] dark:text-[#111111] bg-[#111111] dark:bg-[#E9E9F1]'
                                    : 'text-[#717586] hover:bg-[#e0e0e0]/20 dark:hover:bg-[#ffffff1a]'}
                            `}
                        >
                            <Icon size={16} />
                        </button>
                    );
                })}

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 rounded-2xl text-[#717586] dark:text-[#E9E9F1] hover:bg-[#e0e0e0]/20 dark:hover:bg-[#ffffff1a] transition"
                >
                    {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
                </button>

                {/* Let's Talk Button */}
                <button className="p-3 rounded-2xl bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c]">
                    <BiMessageDots size={16} />
                </button>
            </div>
        </>
    );
};

export default NavBar;
