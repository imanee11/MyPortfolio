import React, { useContext, useState, useCallback } from "react";
import { BsStars } from "react-icons/bs";
import { DarkModeContext } from "../../context/DarkModeContext";
import image from "../../constants/image"; // imported images
import { projects } from "../../constants";
import SkeletonLoader from "./animation/SkeletonLoader";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const { darkMode } = useContext(DarkModeContext);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((projectId: number) => {
    setTimeout(() => {
      setLoadedImages(prev => new Set(prev).add(projectId));
    }, 1200);
  }, []);

  const isImageLoaded = useCallback((projectId: number) => {
    return loadedImages.has(projectId);
  }, [loadedImages]);

  return (
    <div id="portfolio" className="font-syne flex flex-col pt-[10vh]">
      <div className="flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit">
        <BsStars />
        <p>Portfolio</p>
      </div>

      <div className="pt-5">
        <p className="md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark">
          Check out my featured projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="pt-6 flex flex-wrap gap-4 justify-between">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-3xl overflow-hidden w-full md:w-[48%] mb-6 transform-gpu"
            onClick={() => navigate(`/details/${project.id}`)}
          >
            <div className="relative w-full h-[370px]">
              {!isImageLoaded(project.id) && (
                <div className="absolute inset-0 z-10">
                  <SkeletonLoader />
                </div>
              )}

              <img
                src={image[project.images[0]]}
                alt={project.title}
                className={`w-full h-full object-cover object-top transition-opacity duration-500 ${!isImageLoaded(project.id) ? 'opacity-0' : 'opacity-100'}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;