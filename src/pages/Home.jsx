import React, { useContext } from 'react';
import SideBar from '../components/home/SideBar';
import NavBar from '../components/home/NavBar';
// import Hero from '../components/home/Hero';
// import { DarkModeContext } from '../context/DarkModeContext';
// import About from '../components/home/About';
// import Portfolio from '../components/home/Portfolio';
// import Resume from '../components/home/Resume';

const Home = () => {

    // const { darkMode, setDarkMode } = useContext(DarkModeContext);


    return (
        <div className="relative md:min-h-screen overflow-hidden">
            <div className="absolute w-[400px] h-[400px] bg-[#8F56CC]/50 dark:bg-[#E1BAC5]/50 rounded-full top-[-150px] left-[-150px] z-0 opacity-50 blur-2xl"></div>
            <div className="absolute w-[500px] h-[500px] bg-[#8F56CC]/50 dark:bg-[#E1BAC5]/50 rounded-full top-[10%] right-[-100px] z-0 opacity-50 blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-[10vh] md:gap-0 px-[5vw] py-[5vh] md:py-0">
                <SideBar />
                <div className="md:flex-1 md:ml-[26vw]">
                    <NavBar />
                    {/* <Hero /> */}
                    {/* <Portfolio /> */}
                    {/* <About /> */}
                    {/* <Resume/> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
