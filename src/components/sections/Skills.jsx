import Mongologo from "/src/images/Mongologo.png"
import Reactlogo from "/src/images/Reactlogo.png"
import Nodelogo from "/src/images/Nodelogo.png"
import Nextlogo from "/src/images/NextLogo.webp"
import MySQL from "/src/images/MySQLLogo.png"
import Tailwindlogo from "/src/images/Tailwindlogo.png"
import Skillcard from '@/cards/skillcard'

const Skills = () => {
  return (
    <>
      <div className="h-[60vh] md:h-[60vh] lg:h-screen xl:h-[70vh] w-screen flex bg-transparent z-10 dark:bg-black">
        <div className="h-full md:max-lg:w-4/5 lg:w-[68%] xl:w-[72%] mx-auto relative z-10 bg-transparent dark:bg-black
        before:content-[''] before:absolute before:bg-darkgray before:left-[50%] before:bottom-[70px] 
        before:translate-x-[-50%] before:w-[80%] before:h-0.5">
          <p className="mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Current Skills</p>
          <div className="h-1/3 md:h-64 lg:h-80">
            <Skillcard src={Nextlogo} alt={"Nextjs"}/>
            <Skillcard customWidth="w-2/3" src={Tailwindlogo} alt={"TailwindCSS"}/>
            <Skillcard src={MySQL} alt={"MySQL"}/>
          </div>
          <div className="h-1/3 md:h-64 lg:h-80">
            <Skillcard src={Nodelogo} alt={"Node.js"}/>
            <Skillcard src={Reactlogo} alt={"React"}/>
            <Skillcard src={Mongologo} alt={"MongoDB"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills