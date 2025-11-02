const Projectcard = ({ src, link, description }) => {
    return (
        <>
        <div className="card group relative flex justify-center w-[55vmin] h-[75vmin] lg:w-[55vmin] lg:h-[65vmin] xl:w-[35vmin] xl:h-[50vmin] hover:bg-darkgray">
            <img className="image w-[55vmin] h-[75vmin] lg:w-[55vmin] lg:h-[65vmin] xl:w-[35vmin] xl:h-[50vmin] object-cover object-right 
            group-hover:opacity-50" draggable="false" src={ src } alt="project" />
            <p className="absolute px-8 bottom-[70%] md:bottom-3/4 invisible text-lightgray text-center font-medium text-sm md:text-xl group-hover:visible">{description}</p>
            <a className="project absolute bottom-1/2 left-[30%] invisible  md:left-[35.5%] lg:left-[34.5%] xl:left-[35.5%]
            text-lightgray font-medium md:text-2xl transition-transform hover:transform hover:scale-150 group-hover:visible" 
            href={link} target="_blank" rel="noreferrer" draggable="false">View Project</a>
        </div>
        </>
    )
}

export default Projectcard