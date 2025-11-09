const Expcard = ({ mt, h, company, period, role, description, src }) => {
  return (
    <>
    <div className={`${mt} ${h} pb-4 md:h-[25%] lg:h-[34%] xl:h-[25%] flex w-[90%] mx-auto md:w-full border-solid border-y-2 
    border-gray relative`}>
        <div className="flex float-left w-[20%] mt-10 justify-left">
            <img className="w-12 h-12 lg:w-16 lg:h-16 just" src={src} alt="image"></img>
        </div>
        <div className="float-right w-[80%] mt-5">
            <p className="text-md text-darkgray dark:text-gray">{company} — {period}</p>
            <p className="text-lg lg:text-2xl font-bold mt-2 dark:text-lightgray">{role}</p>
            <p className="lg:text-sm text-charcoal mt-2 text-justify dark:text-gray">{description}</p>
        </div>
    </div>
    </>
  )
}

export default Expcard