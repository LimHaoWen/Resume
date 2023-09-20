import React from "react"


const Skillcard = ({ src, alt, customWidth }) => {
    const cardWidth = `w-1/2 ${customWidth || ''}`;

    return(
        <>
        <div className="w-1/3 md:h-64 lg:h-80 inline-block">
            <img className={` ${cardWidth} h-auto mt-20 mb-0 mx-auto hover:scale-[1.3] reveal relative transform 
            translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out [&.active]:translate-y-0 
            [&.active]:opacity-100`} src={ src } alt={ alt } />
        </div>
        </>
    )
}

export default Skillcard