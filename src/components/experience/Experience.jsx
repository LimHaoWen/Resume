import React from "react"
import Arrow from "../images/Arrow.png"

const Experience = () => {
  return (
    <>
      <div className="hidden md:flex md:md:max-lg:h-screen lg:max-xl:h-[100vh] xl:h-[70vh] bg-white">
        <div className="h-full md:max-lg:w-4/5 lg:max-xl:w-[68%] xl:w-[72%] bg-white mx-auto relative z-10 
        before:content-[''] before:absolute before:bg-gray before:left-[50%] before:bottom-[70px] 
        before:translate-x-[-50%] before:w-[80%] before:h-0.5">
            <div className="w-1/2 h-[90%] float-left">
              <p className="text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl mt-8 reveal relative transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100">Past work experience</p>
              <div className="md:max-lg:w-[58%] lg:w-[40%] h-10 mt-20 sticky top-[30px] reveal transform 
              translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
              [&.active]:opacity-100 hover:scale-[1.3]">
                <a className="text-md md:max-lg:text-lg lg:text-xl xl:text-2xl text-black float-left" 
                href="https://drive.google.com/file/d/1r2sA4xA_E9d_5p0yevSHIzVf7KO5JnOD/view?usp=drive_link" 
                target="_blank" rel="noreferrer">Browse full résumé</a>
                <img className="w-5 h-auto float-right md:max-lg:mt-[0.35rem] lg:mt-[0.4rem] xl:mt-[0.45rem] 
                lg:mr-1 xl:mr-2" src={Arrow} alt="Arrow"></img>
              </div>
            </div>
            <div className="w-1/2 h-full float-right">
              <p className="mt-80 text-justify">I have yet to gain real industry experience and am looking for 
              the opportunity to gain some. Please contact me if you feel that I am potentially cut out for a role!</p>
            </div>
          </div>
      </div>
      <div className="h-[50vh] w-screen md:hidden relative before:content-[''] before:absolute before:bg-gray 
      before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5">
        <p className="text-2xl mt-0 pl-5 reveal relative transform translate-y-[100px] opacity-0 transition-all 
        duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100">Past work experience</p>
        <div className="w-full h-[45%] float-right">
          <p className="mt-20 px-5 text-justify reveal relative transform translate-y-[100px] opacity-0 
          transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100">
          I have yet to gain real industry experience and am looking for the opportunity to gain some. 
          Please contact me if you feel that I am potentially cut out for a role!</p>
        </div>
        <div className="h-[30%] w-full mt-60 sticky top-[30px] px-28 reveal transform translate-y-[100px] 
        opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100 
        hover:scale-[1.3]">
          <a className="text-md text-black float-left" href="https://drive.google.com/file/d/1r2sA4xA_E9d_5p0yevSHIzVf7KO5JnOD/view?usp=drive_link" 
          target="_blank" rel="noreferrer">Browse full résumé</a>
          <img className="w-5 h-auto float-right" src={Arrow} alt="Arrow"></img>
        </div>
      </div>
    </>
  )
}

export default Experience