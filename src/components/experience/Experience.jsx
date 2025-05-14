import React from "react"
import foodpanda from "../images/foodpanda.png"
import { GoArrowUpRight } from "react-icons/go"
import Expcard from "../utilities/expcard"


const Experience = () => {
  return (
    <>
    {/* md screen and up */}
      <div className="hidden md:flex md:max-lg:h-screen lg:max-xl:h-[100vh] xl:h-[70vh] w-screen bg-white dark:bg-black">
        <div className="h-full md:max-lg:w-4/5 lg:max-xl:w-[68%] xl:w-[72%] bg-white mx-auto relative z-10 
        before:content-[''] before:absolute before:bg-gray before:left-[50%] before:bottom-[70px] 
        before:translate-x-[-50%] before:w-[80%] before:h-0.5 dark:bg-black">
            <div className="w-1/2 h-[90%] float-left">
              <p className="text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl mt-8 reveal relative transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100 dark:text-white">Past work experience</p>
              <div className="md:max-lg:w-58%] lg:w-[40%] h-10 mt-20 sticky flex top-[30px] reveal transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100 hover:scale-[1.3]">
                <a className="text-md md:max-lg:text-lg lg:text-xl xl:text-2xl text-black float-left dark:text-white" 
                href="https://docs.google.com/document/d/1unwNV2UpejiQb4n4H2GuV9bn7rUnABp_mf81GhEZy1A/edit?usp=sharing" 
                target="_blank" rel="noreferrer">Browse full résumé
                <GoArrowUpRight className="w-5 h-5 lg:w-7 lg:h-7 float-right md:max-lg:mt-[0.2rem] lg:mt-0 xl:mt-[0.1rem] 
                md:ml-4 lg:ml-1 xl:ml-3 dark:fill-white dark:stroke-white"/>
                </a>
              </div>
            </div>
            <div className="w-1/2 h-full float-right">
              <Expcard mt="mt-8"
                       company="foodpanda"
                       period="Oct 2023 / Mar 2024" 
                       role="Backend Software Engineer (Contract)"
                       description="I gained proficiency in Golang, MySQL, Redis, and other tech services. I actively 
                       contributed to developing robust endpoints for new features, continous improvements, bug fixes, and addressing 
                       technical debt. Collaborating seamlessly with my team, I participated in discussions and 
                       played a role in formulating long-term solutions."
                      src={foodpanda}
                       />
              {/* <Expcard mt="mt-[-2px]"/> */}
            </div>
          </div>
      </div>
      
      {/* Mobile screens */}
      <div className="h-[90vh] w-screen md:hidden relative before:content-[''] before:absolute before:bg-gray 
      before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5 dark:bg-black">
        <p className="text-2xl pl-5 reveal relative transform translate-y-[100px] opacity-0 transition-all 
        duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Past work experience</p>
        <div className="w-full h-[65%]">
          <Expcard  mt="mt-12"
                    h="h-[88%]"
                    company="foodpanda"
                    period="Oct 2023 / Mar 2024"
                    role="Software Engineer Trainee (backend)"
                    description="I gained proficiency in Golang, MySQL, Redis, and other tech services. I actively 
                    contributed to developing robust endpoints for new features, continous improvements, bug fixes, and addressing 
                    technical debt. Collaborating seamlessly with my team, I participated in discussions and 
                    played a role in formulating long-term solutions."
                    src={foodpanda}
                    />  
        </div>
        <div className="h-40 w-[11rem] mt-3 sticky top-[30px] mx-auto reveal transform translate-y-[100px] 
        opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100 
        hover:scale-[1.3]">
          <a className="text-md text-black float-left dark:text-white" href="https://docs.google.com/document/d/1M2Xypin3QxIH1XFZ2_OkJw-5-BcSrklrKyol5Vm7GKA/edit?usp=sharing" 
          target="_blank" rel="noreferrer">Browse full résumé</a>
          <GoArrowUpRight className="w-6 h-6 float-right dark:fill-white dark:stroke-white"/>
        </div>
      </div>
    </>
  )
}

export default Experience