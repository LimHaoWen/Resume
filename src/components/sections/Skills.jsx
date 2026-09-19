import SkillCard from '@/cards/SkillCard'
import { skillGroups } from '@/data/skills'

const Skills = () => {
  return (
    <>
      <div className="w-screen flex bg-transparent before-divider z-10">
        <div className="section-container relative z-10 bg-transparent">
          <p className="section-heading text-glass reveal reveal-slide mt-0 pl-5 md:mt-8">Current Skills</p>
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
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