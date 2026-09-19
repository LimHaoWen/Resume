import { withCardWidth } from "@/utilities/cardWidth"

const BlogCard = ({ href, src, alt, customWidth, leftRightMargin, title }) => {
    const cardWidth = withCardWidth(customWidth);

    return(
        <>
        <div className="tile w-1/2 h-32 md:h-64 lg:h-80 hover:scale-[1.1] ease-out transition-transform duration-300">
            <a href={ href } target="_blank" rel="noreferrer" className={`relative h-[90%] ${leftRightMargin} ${cardWidth}`}>
                <img className={`w-full h-4/5 max-md:mt-7 object-cover`} src={ src } alt={ alt } />
                <div className="absolute inset-0 h-4/5 max-md:mt-7 md:invisible bg-black/40"></div>
                <p className="text-glass absolute bottom-0 left-0 w-full max-md:mt-12 bg-opacity-50 text-justify text-white md:text-black dark:text-white font-semibold p-2 text-xs md:text-sm">
                { title }</p>
            </a>
        </div>
        </>
    )
}

export default BlogCard