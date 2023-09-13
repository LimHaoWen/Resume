import React from "react"
import Track from "../images/Tracksample.jpeg"

const Projectcard = () => {
    return (
        <>
        <div className="card w-[45vmin] h-[65vmin] hover:bg-lightgray">
            <img className="image w-[45vmin] h-[65vmin] object-cover object-right hover:opacity-50" draggable="false" src={Track} alt="project" />
            <a className="project relative invisible -top-1/2 left-1/3 text-darkgray opacity-50" href="https://www.google.com.sg/" 
            target="_blank" rel="noreferrer" draggable="false">View project</a>
        </div>
        </>
    )
}
export default Projectcard