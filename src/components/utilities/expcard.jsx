import React from "react"
import foodpanda from "../images/foodpanda.png"


const Expcard = ({ className, company, period, role, description }) => {
  return (
    <>
    <div className={`${className} flex w-[90%] mx-auto md:w-full h-56 border-solid border-y-2 
    border-gray reveal relative transform translate-y-[100px] opacity-0 transition-all 
    duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100`}>
        <div className="flex float-left w-[20%] mt-10 justify-left">
            <img className="w-12 h-12 lg:w-16 lg:h-16 just"src={foodpanda} alt="foodpanda"></img>
        </div>
        <div className="float-right w-[80%] mt-5">
            <p className="text-md lg:text-xl text-darkgray">{company} — {period}</p>
            <p className="text-lg lg:text-2xl font-bold mt-2">{role}</p>
            <p className="lg:text-sm text-charcoal mt-2 text-justify">{description}</p>
        </div>
    </div>
    </>
  )
}

export default Expcard