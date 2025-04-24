import React from "react"


const Blogcard = ({ href, src, alt, customWidth, leftRightMargin, title }) => {
    const cardWidth = `w-1/2 ${customWidth || ''}`; // tailwind last item win approach

    return(
        <>
        <div className="w-1/2 h-auto md:h-64 lg:h-80 inline-flex items-center justify-center hover:scale-[1.1] ease-out transition-transform duration-300">
            <a href={ href } target="_blank" rel="noreferrer" className={`relative h-[90%] ${leftRightMargin} ${cardWidth}`}>
                <img className={`w-full h-[80%] max-md:mt-10 object-cover`} src={ src } alt={ alt } />
                <p className="absolute bottom-18 left-0 w-full bg-opacity-50 text-justify text-black dark:text-white font-semibold p-2 text-xs md:text-sm">
                { title }</p>
            </a>
        </div>
        </>
    )
}

export default Blogcard