const ExpCard = ({ mt, h, company, period, role, description, src }) => {
  return (
    <>
    <div className={`${mt} ${h} pb-4 flex w-[90%] mx-auto md:w-full border-solid border-y-2
    border-gray relative`}>
        <div className="flex w-1/5 mt-10 justify-left">
            <img className="w-12 h-12 lg:w-16 lg:h-16" src={src} alt="image"></img>
        </div>
        <div className="text-glass w-4/5 mt-5">
            <p className="text-base text-muted">{company} — {period}</p>
            <p className="text-lg lg:text-2xl font-bold mt-2 dark:text-lightgray">{role}</p>
            <p className="lg:text-sm text-charcoal mt-2 text-justify dark:text-gray">{description}</p>
        </div>
    </div>
    </>
  )
}

export default ExpCard