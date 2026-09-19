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
      <div className="relative flex w-full bg-transparent z-10 mt-[150px]">
        <div className="flex flex-col md:flex-row section-container bg-transparent">
          <div className="lg:w-1/2">
            <img className="lg:w-10/12 lg:mt-10" src={Profile} alt="ProfilePicture"/>
          </div>
          <div className={`text-glass lg:flex lg:w-1/2 lg:flex-col lg:items-end max-md:mt-10 max-lg:mt-64 transform transition-all duration-1000 ease-out ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
            <p className="w-11/12 text-3xl md:text-6xl mx-auto lg:mx-0 text-center lg:text-left mb-2 lg:mb-8 lg:mt-72 dark:text-white">Hi, I'm Hao Wen</p>
            <p className="w-11/12 text-base md:text-2xl lg:text-lg mx-auto lg:mx-0
            text-center lg:text-left text-muted">{intro}</p>
          </div>
        </div>
      </div>
    </> 
  )
}

export default About