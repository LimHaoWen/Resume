import {useState, useEffect} from "react"
import Profile from "/src/images/Profile.jpeg"

const About = () => {
  const intro = `A tinkering software engineer based in Singapore. As a self-taught engineer with 1 year of professional 
                experience, I have worked on some projects along the way. Stick around and have a look.`
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <>
      <div className="relative flex h-screen md:h-[125vh] lg:h-screen xl:h-[80vh] w-full bg-transparent z-10 mt-[150px] before-divider">
        <div className="flex flex-col lg:flex-row lg:w-[68%] xl:w-[72%] lg:flex mx-auto bg-transparent">
          <div className="lg:w-1/2 lg:float-left">
            <img className="lg:w-10/12 lg:mt-10" src={Profile} alt="ProfilePicture"/>
          </div>
          <div className={`relative lg:w-1/2 lg:float-right max-lg:mt-10 transform transition-all duration-1000 ease-out ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
            <p className="w-11/12 text-3xl md:text-6xl mx-auto text-center lg:text-left lg:float-right mb-2 lg:mb-8 lg:mt-72 dark:text-white">Hi, I'm Hao Wen</p>
            <p className="w-11/12 text-md md:text-2xl lg:text-lg mx-auto 
            text-center lg:text-left lg:float-right text-darkgray dark:text-gray">{intro}</p>
          </div>
        </div>
      </div>
    </> 
  )
}

export default About