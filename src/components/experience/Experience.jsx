import React from "react"
import Arrow from "../images/Arrow.png"
import Expcard from "../utilities/expcard"


const Experience = () => {
  return (
    <>
    {/* md screen and up */}
      <div className="hidden md:flex md:md:max-lg:h-screen lg:max-xl:h-[100vh] xl:h-[70vh] w-screen bg-white">
        <div className="h-full md:max-lg:w-4/5 lg:max-xl:w-[68%] xl:w-[72%] bg-white mx-auto relative z-10 
        before:content-[''] before:absolute before:bg-gray before:left-[50%] before:bottom-[70px] 
        before:translate-x-[-50%] before:w-[80%] before:h-0.5">
            <div className="w-1/2 h-[90%] float-left">
              <p className="text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl mt-8 reveal relative transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100">Past work experience</p>
              <div className="md:max-lg:w-[58%] lg:w-[40%] h-10 mt-20 sticky flex top-[30px] reveal transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100 hover:scale-[1.3]">
                <a className="text-md md:max-lg:text-lg lg:text-xl xl:text-2xl text-black float-left" 
                href="https://drive.google.com/file/d/1-DuJ6-kqdfWJnUkPyQ9pCFKiX1qEW_JR/view?usp=drive_link" 
                target="_blank" rel="noreferrer">Browse full résumé
                <img className="w-5 h-5 lg:w-6 lg:h-6 float-right md:max-lg:mt-[0.2rem] lg:mt-0 xl:mt-[0.1rem] 
                md:ml-4 lg:ml-2 xl:ml-3" src={Arrow} alt="Arrow"></img>
                </a>
              </div>
            </div>
            <div className="w-1/2 h-full float-right">
              <Expcard mt="mt-8"
                       h="h-64" 
                       company="foodpanda"
                       period="Oct 2023 / Current" 
                       role="Software Engineer Trainee (backend)"
                       description="I gained proficiency in Golang, Redis, MySQL, and other tech services. I actively 
                       contributed to developing robust endpoints for new features, bug fixes, and addressing 
                       technical debt. Collaborating seamlessly with my team, I participated in discussions and 
                       played a role in formulating long-term solutions."
                       />                   
            </div>
          </div>
      </div>
      
      {/* Mobile screens */}
      <div className="h-[80vh] w-screen md:hidden relative before:content-[''] before:absolute before:bg-gray 
      before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5">
        <p className="text-2xl pl-5 reveal relative transform translate-y-[100px] opacity-0 transition-all 
        duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100">Past work experience</p>
        <div className="w-full h-[60%]">
          <Expcard  mt="mt-12"
                    h="h-[90%]"
                    company="foodpanda"
                    period="Oct 2023 / Current"
                    role="Software Engineer Trainee (backend)"
                    description="I gained proficiency in Golang, Redis, MySQL, and other tech services. I actively 
                    contributed to developing robust endpoints for new features, bug fixes, and addressing 
                    technical debt. Collaborating seamlessly with my team, I participated in discussions and 
                    played a role in formulating long-term solutions."
                    />  
        </div>
        <div className="h-24 w-[11rem] mt-12 sticky top-[30px] mx-auto reveal transform translate-y-[100px] 
        opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100 
        hover:scale-[1.3]">
          <a className="text-md text-black float-left" href="https://drive.google.com/file/d/1-DuJ6-kqdfWJnUkPyQ9pCFKiX1qEW_JR/view?usp=drive_link" 
          target="_blank" rel="noreferrer">Browse full résumé</a>
          <img className="w-5 h-auto float-right" src={Arrow} alt="Arrow"></img>
        </div>
      </div>
    </>
  )
}

export default Experience