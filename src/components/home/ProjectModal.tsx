import React, { useEffect, useContext } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { DarkModeContext } from '../../context/DarkModeContext';
import image from '../../constants/image';

interface Project {
    id: number;
    title: string;
    date: number;
    for: string;
    description: string;
    live: string;
    github: string;
    images: string[];
    tools: string[];
    features: string[];
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    project,
    isOpen,
    onClose,
    onNext,
    onPrev
}) => {
    const { darkMode } = useContext(DarkModeContext);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Close on ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    // Auto-scroll images
    useEffect(() => {
        if (!project || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prev =>
                prev === project.images.length - 1 ? 0 : prev + 1
            );
        }, 3000); // 3 seconds per image

        return () => clearInterval(interval);
    }, [project]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#212121] backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Next/Prev Projects */}
            <div className="px-4 sm:px-6 absolute flex justify-between items-center right-0 left-0 z-50 top-1/2 -translate-y-1/2">
                <button
                    onClick={onPrev}
                    className="p-[12px] sm:p-[15px] rounded-[45%] bg-[#aa70e0] dark:bg-[#E4B8BF] transition-colors"
                >
                    <IoChevronBack size={16} />
                </button>
                <button
                    onClick={onNext}
                    className="p-[12px] sm:p-[15px] rounded-[45%] bg-[#aa70e0] dark:bg-[#E4B8BF] transition-colors"
                >
                    <IoChevronForward size={16} />
                </button>
            </div>

            {/* Close Button */}
            <div className="absolute top-4 right-0 px-4 sm:px-6 cursor-pointer z-50">
                <button
                    onClick={onClose}
                    className="p-[12px] sm:p-[15px] rounded-[45%] bg-[#aa70e0] dark:bg-[#E4B8BF] transition-colors"
                >
                    <IoClose size={16} />
                </button>
            </div>

            {/* Modal */}
            <div className="relative bg-transparent w-full h-full flex md:items-center animate-in fade-in zoom-in-95 duration-300">
                {/* Content */}
                <div className="flex flex-col gap-3 justify-center items-center w-full md:px-4">

                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative h-[50vh] w-[95vw] sm:h-[50vh] sm:w-[25vw]">
                            <img
                                src={image[project.images[currentImageIndex]]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover object-top rounded-none"
                            />

                            {/* Image Indicators */}
                            {project.images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex
                                                ? 'bg-white'
                                                : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="bg-[#141414] w-[90vw] sm:w-[50vw] p-4 sm:p-5 rounded-2xl sm:rounded-3xl">
                        <div className="space-y-3">
                            <div className='flex flex-wrap gap-2 items-center md:gap-4 text-[#FFFFFF]'>
                                <p className="text-[#FFFFFF] text-[20px] sm:text-[24px] font-bold">{project.title}</p>
                                <div className='text-[12px] flex gap-2 bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                                    (
                                    <span>{project.for}</span>
                                    <span>•</span>
                                    <span>{project.date}</span>
                                    )
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-[13px] sm:text-[15px] font-medium text-[#FFFFFF] border border-[#FFFFFF66] rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-[#FFFFFF] text-[13px] sm:text-[14px]">{project.description}</p>

                            {/* Links */}
                            <div className="flex flex-wrap gap-3">
                                {project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:bg-gradient-to-r dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-[#E9E9F1] dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90 rounded-lg text-sm sm:text-base"
                                    >
                                        <FiExternalLink />
                                        Live Demo
                                    </a>
                                )}
                                {project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 border border-[#FFFFFF66] hover:bg-[#FFFFFF] text-[#FFFFFF]/50 hover:text-[#141414] rounded-lg transition-colors font-semibold text-sm sm:text-base"
                                    >
                                        <FiGithub />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
