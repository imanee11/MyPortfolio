import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import { DarkModeContext } from '../../context/DarkModeContext';
import { projects } from '../../constants';
import { BsArrowLeft } from 'react-icons/bs';
import SkeletonLoader from '../home/animation/SkeletonLoader';
import image from '../../constants/image';
import { FiMoon, FiSun } from 'react-icons/fi';


const Main = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const { id } = useParams();
  const navigate = useNavigate();
  // const { darkMode } = useContext(DarkModeContext);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projects.find((p) => p.id === parseInt(id || '0'));

  const handleImageLoad = useCallback((imageIndex: number) => {
    setTimeout(() => {
      setLoadedImages(prev => new Set(prev).add(imageIndex));
    }, 800);
  }, []);

  const isImageLoaded = useCallback((imageIndex: number) => {
    return loadedImages.has(imageIndex);
  }, [loadedImages]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-[#111111]');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#111111]');
    }
  }, [darkMode]);

  if (!project) {
    return (
      <div className="flex items-center justify-center font-syne">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#424550] dark:text-[#C7C6D3] mb-4">
            Project not found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300"
          >
            <BsArrowLeft size={16} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-syne">

      {/* Header */}
      <nav className="md:flex fixed top-[5vh] left-[30vw] right-[5vw] z-50 justify-between items-center font-syne">
        <div className=''>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer transition duration-300 bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold text-[#717586] hover:text-[#22232c] dark:hover:text-[#E9E9F1]">
            <IoArrowBack size={20} />
            <span className="font-semibold">Back to Portfolio</span>
          </button>
        </div>

        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:text-[#E9E9F1]'
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>

      <div className="md:pt-[20vh]">
        {/* Project Title & Info */}
        <div>
          <h1 className="md:text-[55px] text-[38px] font-syne font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mt-4 mb-8">
            <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
              <FaCalendarAlt />
              <p>{project.date}</p>
            </div>

            <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
              <FaUser />
              <p>{project.for}</p>
            </div>

            <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
              <FaTag />
              <p>Web Development</p>
            </div>
          </div>

          <p className="text-[#424550] dark:text-[#C7C6D3] leading-relaxed max-w-3xl">
            This project showcases modern web development techniques with a focus on user experience and performance. Built with cutting-edge technologies to deliver a seamless and engaging interface.
          </p>
        </div>

        {/* Main Image Gallery */}
 

        {/* All Images Grid */}
        <div className="mb-12">
          <p className='pt-10 pb-5 md:text-[22px] text-[20px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Project Gallery</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-64">
                  {!isImageLoaded(index + 100) && (
                    <div className="absolute inset-0 z-10">
                      <SkeletonLoader />
                    </div>
                  )}

                  <img
                    src={image[img]}
                    alt={`${project.title} - Gallery ${index + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${!isImageLoaded(index + 100) ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(index + 100)}
                    onError={() => handleImageLoad(index + 100)}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <HiExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Technologies */}


          {/* Project Links */}

        </div>

        {/* Project Features */}

        {/* Navigation to Other Projects */}

      </div>
    </div>
  );
};

export default Main;