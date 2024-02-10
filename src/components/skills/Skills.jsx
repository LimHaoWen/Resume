import React from 'react'
import Mongologo from "../images/Mongologo.png"
import Reactlogo from "../images/Reactlogo.png"
import Nodelogo from "../images/Nodelogo.png"
import Gologo from "../images/Gologo.jpeg"
import MySQL from "../images/MySQLLogo.png"
import Tailwindlogo from "../images/Tailwindlogo.png"
import Skillcard from '../utilities/skillcard'



const Skills = () => {
  return (
    <>
      <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] xl:h-[70vh] w-screen flex bg-white z-10">
        <div className="h-full md:max-lg:w-4/5 lg:w-[68%] xl:w-[72%] mx-auto relative z-10 bg-white 
        before:content-[''] before:absolute before:bg-gray before:left-[50%] before:bottom-[70px] 
        before:translate-x-[-50%] before:w-[80%] before:h-0.5">
          <p className="mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100">Current Skills</p>
          <div className="h-1/3 md:h-64 lg:h-80">
            <Skillcard src={Gologo} alt={"GO"}/>
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