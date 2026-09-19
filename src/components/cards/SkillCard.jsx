import { withCardWidth } from "@/utilities/cardWidth"

const SkillCard = ({ src, alt, customWidth }) => {
    const cardWidth = withCardWidth(customWidth);

    return(
        <>
        <div className="tile reveal reveal-slide w-1/3 md:h-64 lg:h-80">
            <img className={`${cardWidth} h-auto mt-20 hover:scale-[1.3]`} src={ src } alt={ alt } />
        </div>
        </>
    )
}

export default SkillCard