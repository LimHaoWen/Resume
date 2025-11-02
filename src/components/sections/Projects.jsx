import { useEffect } from "react"
import Projectcard from "@/cards/projectcard"
import Attendance from "/src/images/Attendance.png"
import Cat from "/src/images/Ragdoll.jpeg"
import Corgi from "/src/images/Corgi.jpeg"
import Street from "/src/images/Street.jpeg"
import Laksa from "/src/images/Laksa.webp"

const Projects = () => {

  /* Project track */
  useEffect(() => {
    const track = document.getElementById("projectTrack");
    
    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
    
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }
    
    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage;
      
      track.animate({
        transform: `translate(${nextPercentage}%, 0%)`  
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }

  // Add event listeners
  window.addEventListener('mousedown', handleOnDown);
  window.addEventListener('mouseup', handleOnUp);
  window.addEventListener('mousemove', handleOnMove);
  
  window.addEventListener('touchstart', e => handleOnDown(e.touches[0]));
  window.addEventListener('touchend', e => handleOnUp(e.changedTouches[0]));
  window.addEventListener('touchmove', e => handleOnMove(e.touches[0]));

  // Cleanup function to remove event listeners
  return () => {
    window.removeEventListener('mousedown', handleOnDown);
    window.removeEventListener('mouseup', handleOnUp);
    window.removeEventListener('mousemove', handleOnMove);
    
    window.removeEventListener('touchstart', e => handleOnDown(e.touches[0]));
    window.removeEventListener('touchend', e => handleOnUp(e.changedTouches[0]));
    window.removeEventListener('touchmove', e => handleOnMove(e.touches[0]));
  };

  }, []);

  return (
      <>
      <div className="h-[70vh] md:max-lg:h-[80vh] lg:max-xl:h-screen xl:h-[80vh] w-full bg-transparent relative 
      z-10 overflow-hidden dark:bg-black">
        <div className="h-full w-full md:max-lg:w-4/5 lg:max-xl:w-[68%] xl:w-[72%] bg-transparent dark:bg-black inline-block 
        md:flex mx-auto relative before:content-[''] before:absolute before:bg-darkgray 
        before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5 ">
          <p className="h-10 mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Projects</p>
          <div id="projectTrack" className="flex lg:w-[150vw] absolute gap-5 lg:gap-8 top-[15%] left-5 lg:left-[2%] 
          -transform-y-1/2 reveal opacity-0 transition-all duration-1000 ease-out [&.active]:opacity-100" 
          data-mouse-down-at="0" data-prev-percentage="0">
              <Projectcard src={ Laksa } link="https://github.com/LimHaoWen/JLW" description={"Family business app for selling laksa, featuring a loyalty points system"}/>
              <Projectcard src={ Attendance } link="https://github.com/LimHaoWen/attendance-app" description={"Attendance app that supports export/import of attendance lists"}/>
              <Projectcard src={ Cat } link="https://www.google.com.sg/?safe=active&ssui=on" description={"To be filled"}/>
              <Projectcard src={ Street } link="https://www.google.com.sg/?safe=active&ssui=on" description={"To be filled"}/>
              <Projectcard src={ Corgi } link="https://www.google.com.sg/?safe=active&ssui=on" description={"To be filled"}/>
              
          </div>
        </div>
      </div>
    </> 
  )
}

export default Projects