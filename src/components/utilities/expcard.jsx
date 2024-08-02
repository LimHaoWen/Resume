import React from "react"


const Expcard = ({ mt, h, company, period, role, description, src }) => {
  return (
    <>
    <div className={`${mt} ${h} lg:h-[34%] xl:h-[25%] flex w-[90%] mx-auto md:w-full border-solid border-y-2 
    border-gray reveal relative transform translate-y-[100px] opacity-0 transition-all 
    duration-[1500ms] ease-out [&.active]:translate-y-0 [&.active]:opacity-100`}>
        <div className="flex float-left w-[20%] mt-10 justify-left">
            <img className="w-12 h-12 lg:w-16 lg:h-16 just" src={src} alt="foodpanda"></img>
        </div>
        <div className="float-right w-[80%] mt-5">
            <p className="text-md lg:text-xl text-darkgray dark:text-gray">{company} — {period}</p>
            <p className="text-lg lg:text-2xl font-bold mt-2 dark:text-lightgray">{role}</p>
            <p className="lg:text-sm text-charcoal mt-2 text-justify dark:text-gray">{description}</p>
        </div>
    </div>
    </>
  )
}

export default Expcard