import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import SideBar from '../components/home/SideBar';
import NavBar from '../components/home/NavBar';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Portfolio from '../components/home/Portfolio';
import Resume from '../components/home/Resume';


import { DarkModeContext } from '../context/DarkModeContext';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

const Home = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const blobVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 0.5,
            transition: {
                duration: 2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="relative md:min-h-screen overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={blobVariants} className="absolute w-[400px] h-[400px] bg-[#8F56CC]/50 dark:bg-[#bfb6dd] rounded-full top-[-150px] left-[-150px] z-0 opacity-50 blur-2xl"></motion.div>
            <motion.div variants={blobVariants} className="absolute w-[500px] h-[500px] bg-[#8F56CC]/50 dark:bg-[#bfb6dd] rounded-full top-[5%] right-[-100px] z-0 opacity-50 blur-2xl"></motion.div>

            <motion.div variants={containerVariants} className="relative z-10 flex flex-col md:flex-row gap-[10vh] md:gap-0 px-[5vw] py-[5vh] md:py-0">
                {/* <motion.div variants={sectionVariants}> */}
                <SideBar />
                {/* </motion.div> */}
                <div className="md:flex-1 md:ml-[26vw]">
                    {/* <motion.div variants={sectionVariants}> */}
                    <NavBar />
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    <Hero />
                    <About />
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    <Portfolio />
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    <Resume />
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    <Contact />
                    {/* </motion.div> */}
                    {/* <motion.div variants={sectionVariants}> */}
                    <Footer />
                    {/* // </motion.div> */}
        </div>
            </motion.div >
        </motion.div >
    );
};

export default Home;
