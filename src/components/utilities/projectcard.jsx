import React from "react"


const Projectcard = ({ src }) => {
    return (
        <>
        <div className="card w-[55vmin] h-[75vmin] lg:w-[55vmin] lg:h-[65vmin] xl:w-[35vmin] xl:h-[50vmin] hover:bg-darkgray">
            <img className="image w-[55vmin] h-[75vmin] lg:w-[55vmin] lg:h-[65vmin] xl:w-[35vmin] xl:h-[50vmin] object-cover object-right 
            hover:opacity-50" draggable="false" src={ src } alt="project" />
            <a className="project relative invisible bottom-1/2 left-[30%] md:left-[35.5%] lg:left-[34.5%] xl:left-[35.5%]
            text-white font-medium md:text-2xl" 
            href="https://www.google.com.sg/" target="_blank" rel="noreferrer" draggable="false">View Project</a>
        </div>
        </>
    )
}

export default Projectcard