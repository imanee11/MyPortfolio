import React, { useContext, useState, useCallback } from "react";
import { BsStars } from "react-icons/bs";
import { DarkModeContext } from "../../context/DarkModeContext";
import SkeletonLoader from "./animation/SkeletonLoader";
import { useNavigate } from "react-router-dom";
import { projects } from "../../constants";
import ProjectModal from "./ProjectModal";
import image from "../../constants/image";
import { motion } from "framer-motion";


const Portfolio = () => {
  const navigate = useNavigate();

  const { darkMode } = useContext(DarkModeContext);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageLoad = useCallback((projectId: number) => {
    setTimeout(() => {
      setLoadedImages(prev => new Set(prev).add(projectId));
    }, 1200);
  }, []);

  const isImageLoaded = useCallback((projectId: number) => {
    return loadedImages.has(projectId);
  }, [loadedImages]);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const nextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div id="projects" className="font-syne flex flex-col pt-[10vh]">
      <>
        <motion.div
          className="flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] bg-[#E6EBF4] dark:bg-[#111111] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <BsStars />
          <p>Projects</p>
        </motion.div>

        <motion.div
          className="md:pt-5 pt-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark">
            Check out my featured projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="pt-6 flex flex-wrap gap-4 justify-between">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rounded-3xl overflow-hidden w-full md:w-[48%] mb-6 transform-gpu cursor-pointer group hover:scale-[1.02] transition-all duration-300"
              // onClick={() => openModal(project)}
              onClick={() => navigate(`/details/${project.id}`)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <div className="relative w-full h-[370px]">
                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-20 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        View Project
                      </span>
                    </div>
                  </div> */}

                {!isImageLoaded(project.id) && (
                  <div className="absolute inset-0 z-10">
                    <SkeletonLoader />
                  </div>
                )}

                <img
                  src={image[project.images[0]]}
                  alt={project.title}
                  className={`w-full object-top transition-opacity duration-500 ${!isImageLoaded(project.id) ? 'opacity-0' : 'opacity-100'}`}
                  // className={`w-full h-full object-cover transition-all duration-500 ${!isImageLoaded(project.id) ? 'opacity-0' : 'opacity-100'}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageLoad(project.id)}
                />

                {/* Tools */}
                <div className="absolute bottom-3 w-full px-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-3 py-2 rounded-full text-[#22232c] bg-[#e6ebf4]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={nextProject}
          onPrev={prevProject}
        />
      </>
    </div>

  );
};

export default Portfolio;
