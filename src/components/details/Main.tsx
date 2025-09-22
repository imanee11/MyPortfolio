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
import { IoMdClose } from 'react-icons/io';


const Main = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const project = projects.find((p) => p.id === parseInt(id || '0'));

  const handleImageLoad = useCallback((imageIndex: number) => {
    setTimeout(() => {
      setLoadedImages(prev => new Set(prev).add(imageIndex));
    }, 800);
  }, []);

  const isImageLoaded = useCallback((imageIndex: number) => {
    return loadedImages.has(imageIndex);
  }, [loadedImages]);

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

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
      <nav className="hidden lg:flex fixed top-[5vh] md:left-[30vw] left-[5vw] right-[5vw] z-50 justify-between items-center font-syne">
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

      {/* ✅ Mobile Bottom NavBar */}
      <div className="lg:hidden fixed bottom-4 left-5 right-5 bg-transparent backdrop-blur-[20px] dark:bg-[#1a1a1a]/60 rounded-full flex justify-around items-center z-40 px-2 py-2">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="p-3 rounded-2xl text-[#717586] dark:text-[#E9E9F1] hover:bg-[#e0e0e0]/20 dark:hover:bg-[#ffffff1a] transition"
        >
          <IoArrowBack size={16} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-2xl text-[#717586] dark:text-[#E9E9F1] hover:bg-[#e0e0e0]/20 dark:hover:bg-[#ffffff1a] transition"
        >
          {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>
      </div>


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
            {/* This project showcases modern web development techniques with a focus on user experience and performance. Built with cutting-edge technologies to deliver a seamless and engaging interface. */}
            {project.description}
          </p>
        </div>


        {/* All Images Grid */}
        <div className="mb-12">
          <p className='pt-10 pb-5 md:text-[22px] text-[20px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Project Gallery</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(image[img])}
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
                    className={`w-full object-top transition-opacity duration-500 ${!isImageLoaded(index + 100) ? 'opacity-0' : 'opacity-100'}`}
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
          <div>
            <p className='pt-10 pb-5 md:text-[22px] text-[20px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Technologies Used</p>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <div key={index} className='cursor-pointer flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                  <p>{tool}</p>
                </div>

              ))}
            </div>
          </div>

          {/* Project Links */}
          <div>
            <p className='pt-10 pb-5 md:text-[22px] text-[20px] font-bold text-[#22232C] dark:text-[#E9E9F1]'>Project Links</p>

            <div className="flex flex-col gap-4">
              {project.live !== '#' && (

                <a
                  href={project.live}
                  className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:bg-gradient-to-r dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-[#E9E9F1] dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90 w-fit"
                >
                  <HiExternalLink size={20} />
                  View Live Project
                </a>
              )}


              {project.github !== '#' && (
                <a
                  href={project.github}
                  className="flex items-center gap-3 px-8 py-3 rounded-full bg-transparent border-2 border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] font-semibold hover:scale-105 transition-transform duration-300 hover:opacity-90 w-fit"
                >
                  <FaGithub size={20} />
                  View Source Code
                </a>
              )}

            </div>
          </div>
        </div>

        {/* Project Features */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#424550] dark:text-[#C7C6D3] mb-6">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-[#1a1a1a] border border-[#d2d6e1] dark:border-[#303033] hover:border-[#8f56cc]/30 dark:hover:border-[#E1BAC5]/30 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] flex items-center justify-center mb-3">
                  <span className="text-white dark:text-[#22232c] font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                <p className="font-semibold text-[#424550] dark:text-[#C7C6D3]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Navigation to Other Projects */}
        <div className="border-t border-[#d2d6e1] dark:border-[#303033] py-12">
          <h3 className="text-2xl font-bold text-[#424550] dark:text-[#C7C6D3] mb-8 text-center">
            Explore More Projects
          </h3>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-transparent text-[#717586] hover:text-[#22232c] dark:hover:text-[#E9E9F1] font-semibold transition-transform duration-300"
            >
              <IoArrowBack size={20} />
              Back to Portfolio
            </button>
          </div>
        </div>

      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors duration-300"
            title="Close"
          >
            <IoMdClose size={40} />
          </button>
          <img
            src={modalImage}
            alt="Full-screen view"
            className="max-w-full max-h-full object-contain object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Main;