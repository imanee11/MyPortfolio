import React from 'react';
import Main from '../components/details/Main';
import SideBar from '../components/home/SideBar';
import Footer from '../components/home/Footer';

const Details = () => {
    return (
        <>
            <div className="relative md:min-h-screen overflow-hidden">
                <div className="absolute w-[400px] h-[400px] bg-[#8F56CC]/50 dark:bg-[#E1BAC5]/50 rounded-full top-[-150px] left-[-150px] z-0 opacity-50 blur-2xl"></div>
                <div className="absolute w-[500px] h-[500px] bg-[#8F56CC]/50 dark:bg-[#E1BAC5]/50 rounded-full top-[5%] right-[-100px] z-0 opacity-50 blur-2xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-[10vh] md:gap-0 px-[5vw] py-[5vh] md:py-0">
                    <SideBar />
                    <div className="md:flex-1 md:ml-[26vw]">
                        <Main />
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;