import SkillCard from '@/cards/SkillCard'
import { skillGroups } from '@/data/skills'

const Skills = () => {
  return (
    <>
      <div className="h-[60vh] md:h-[60vh] lg:h-screen xl:h-[70vh] w-screen flex bg-transparent before-divider z-10">
        <div className="h-full md:max-lg:w-4/5 lg:w-[68%] xl:w-[72%] mx-auto relative z-10 bg-transparent">
          <p className="mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out
          [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Current Skills</p>
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="h-1/3 md:h-64 lg:h-80">
              {group.map((skill) => (
                <SkillCard key={skill.src} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills