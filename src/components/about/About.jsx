import React from "react"
import Profile from "../images/Profile.JPG"

const About = () => {  
  return (
    <>
      <div className="h-[120vh] md:max-lg:h-[120vh] lg:max-xl:h-[100vh] xl:h-[80vh] w-screen bg-white relative 
      z-10 mt-[150px] ">
        <div className="h-full md:max-lg:w-screen lg:max-xl:w-[68%] xl:w-[72%] bg-white inline-block 
        md:max-lg:inline-block lg:flex mx-auto relative before:content-[''] before:absolute before:bg-gray 
        before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5">
          <div className="w-screen h-[65%] md:h-4/5 md:max-lg:w-screen lg:w-2/4 md:max-lg:h-[65%] lg:float-left">
            <img className="relative h-auto md:max-lg:w-auto md:max-lg:h-full md:max-lg:mx-auto lg:mt-10 
            lg:w-10/12 md:rounded-xl" src={Profile} alt="ProfilePicture"/>
          </div>
          <div className="h-[35%] md:h-4/5 md:max-lg:w-screen lg:w-2/4 md:max-lg:h-[35%] lg:float-right 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100">
            <p className="w-11/12 text-3xl md:text-[4rem] mx-auto text-center md:max-lg:text-center lg:text-left 
            lg:float-right mt-5 md:max-lg:mt-28 lg:mt-72">Hi, I'm Hao Wen</p>
            <p className="w-11/12 text-md md:max-xl:text-base text-darkgray md:pt-16 mx-auto md:max-lg:mx-auto 
            text-center md:max-lg:text-center lg:text-left lg:float-right leading-[1.5rem]">
            An aspiring software engineer based in Singapore. As a self-taught engineer, I have worked on some 
            projects along the way. Stick around and have a look.</p>
          </div>
        </div>
      </div>
    </> 
  )
}

export default About