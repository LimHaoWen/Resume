const CARD_SIZE = "shrink-0 aspect-[7/10] w-screen md:w-[50vmin] lg:w-[40vmin] xl:w-[35vmin]"

const ProjectCard = ({ src, link, description }) => {
    return (
        <>
        <div className={`card group relative flex justify-center ${CARD_SIZE} max-lg:bg-darkgray hover:bg-darkgray`}>
            <img className={`image ${CARD_SIZE} object-cover object-right max-lg:opacity-50 group-hover:opacity-50`} draggable="false" src={ src } alt="project" />
            <p className="text-glass absolute px-8 bottom-[70%] md:bottom-3/4 invisible max-lg:visible text-lightgray text-center font-medium text-sm md:text-xl group-hover:visible">{description}</p>
            <a className="project text-glass absolute bottom-1/2 left-1/2 -translate-x-1/2 invisible max-lg:visible xl:translate-x-0 xl:left-[35.5%]
            text-lightgray font-medium md:text-2xl transition-transform hover:transform hover:scale-150 group-hover:visible"
            href={link} target="_blank" rel="noreferrer" draggable="false">View Project</a>
        </div>
        </>
    )
}

export default ProjectCard