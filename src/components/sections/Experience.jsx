import { GoArrowUpRight } from "react-icons/go"
import ExpCard from "@/cards/ExpCard"
import { useMediaQuery } from "@/utilities/useMediaQuery"
import { desktopExperience, mobileExperience, resumeLinks } from "@/data/experience"

const ResumeLink = ({ href, isDesktop }) => (
  <a
    className={isDesktop
      ? "inline-flex items-center gap-1 lg:gap-2 xl:gap-3 text-base md:text-lg lg:text-xl xl:text-2xl text-black dark:text-white"
      : "inline-flex items-center gap-2 text-base text-black dark:text-white"}
    href={href} target="_blank" rel="noreferrer"
  >
    Browse full résumé
    <GoArrowUpRight className={isDesktop
      ? "w-5 h-5 lg:w-7 lg:h-7 shrink-0 dark:fill-white dark:stroke-white"
      : "w-6 h-6 shrink-0 dark:fill-white dark:stroke-white"} />
  </a>
)

const Experience = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const experience = isDesktop ? desktopExperience : mobileExperience

  return (
    <div className="experience-grid grid md:grid-cols-2 w-full section-container before-divider z-10">
      <p className={`[grid-area:heading] section-heading text-glass reveal reveal-slide ${isDesktop ? "mt-8" : "pl-5"}`}>
        Past work experience
      </p>

      <div className="[grid-area:cards] reveal reveal-slide">
        {experience.map((exp) => (
          <ExpCard key={exp.company} {...exp} />
        ))}
      </div>

      <div className={isDesktop
        ? "[grid-area:link] text-glass w-2/5 h-10 mt-20 sticky top-[30px] reveal reveal-slide hover:scale-[1.3]"
        : "[grid-area:link] text-glass w-44 pt-10 sticky mx-auto reveal reveal-slide hover:scale-[1.3]"}>
        <ResumeLink href={isDesktop ? resumeLinks.desktop : resumeLinks.mobile} isDesktop={isDesktop} />
      </div>
    </div>
  )
}

export default Experience