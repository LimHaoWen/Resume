import React, { useEffect } from "react"
import Projectcard from "../utilities/projectcard"


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

    /* For touch events */
    
    window.onmousedown = e => handleOnDown(e);
    
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    
    window.onmouseup = e => handleOnUp(e);
    
    window.ontouchend = e => handleOnUp(e.touches[0]);
    
    window.onmousemove = e => handleOnMove(e);
    
    window.ontouchmove = e => handleOnMove(e.touches[0]);

  }, []);

  /* Hovering effect for individual project */
  useEffect(() => {
      const cards = document.getElementsByClassName("card");
      const project = document.getElementsByClassName("project");
      console.log(project);
      console.log(cards); 
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", function mouseOver(){
            project[i].style.visibility = "visible";
        });
        cards[i].addEventListener("mouseout", function mouseOut(){
            project[i].style.visibility = "hidden";
        });
      }      
  }, []);

  return (
      <>
      <div className="h-[60vh] md:max-lg:h-[120vh] lg:max-xl:h-[100vh] xl:h-[80vh] w-full bg-white relative 
      z-10 overflow-hidden">
        <div className="h-full w-full md:max-lg:w-screen lg:max-xl:w-[68%] xl:w-[72%] bg-white inline-block 
        md:max-lg:inline-block lg:flex mx-auto relative before:content-[''] before:absolute before:bg-gray 
        before:left-[50%] before:bottom-[70px] before:translate-x-[-50%] before:w-[80%] before:h-0.5">
          <p className="h-10 mt-0 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
          reveal relative transform translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out 
          [&.active]:translate-y-0 [&.active]:opacity-100">Projects</p> 
          <div id="projectTrack" className="flex w-[110vw] absolute gap-5 top-[15%] left-[25%] transform-x-0 
          -transform-y-1/2" data-mouse-down-at="0" data-prev-percentage="0">
              <Projectcard />
              <Projectcard />
              <Projectcard />
              <Projectcard />
              <Projectcard />
          </div>
        </div>
      </div>
    </> 
  )
}

export default Projects