import ProjectCard from "@/cards/ProjectCard"
import { useDragCarousel } from "@/utilities/useDragCarousel"
import { projects, carouselClamps } from "@/data/projects"

const Projects = () => {
  useDragCarousel("projectTrack", carouselClamps);

  return (
      <>
      <div className="w-full bg-transparent before-divider z-10 overflow-hidden">
        <div className="section-container bg-transparent">
          <p className="section-heading text-glass reveal reveal-slide mt-0 pl-5 md:mt-8">Projects</p>
          <div id="projectTrack" className="flex lg:w-[150vw] gap-5 lg:gap-8 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6 md:ml-5 md:mr-0 lg:ml-[2%] mt-8
          reveal"
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