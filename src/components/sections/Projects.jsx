import ProjectCard from "@/cards/ProjectCard"
import { useDragCarousel } from "@/utilities/useDragCarousel"
import { projects, carouselClamps } from "@/data/projects"

const Projects = () => {
  useDragCarousel("projectTrack", carouselClamps);

  return (
      <>
      <div className="h-[50vh] md:h-[80vh] lg:h-screen xl:h-[80vh] w-full bg-transparent relative before-divider z-10 overflow-hidden">
        <div className="h-full w-full md:max-lg:w-4/5 lg:max-xl:w-[68%] xl:w-[72%] bg-transparent inline-block 
        md:flex mx-auto relative">
          <p className="h-10 mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Projects</p>
          <div id="projectTrack" className="absolute flex lg:w-[150vw] gap-5 lg:gap-8 top-[15%] left-5 lg:left-[2%] 
          -transform-y-1/2 reveal opacity-0 transition-all duration-1000 ease-out [&.active]:opacity-100" 
          data-mouse-down-at="0" data-prev-percentage="0">
              {projects.map((project) => (
                <ProjectCard key={project.src} {...project} />
              ))}
          </div>
        </div>
      </div>
    </> 
  )
}

export default Projects