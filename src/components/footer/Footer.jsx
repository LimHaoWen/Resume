import React from 'react'

const Footer = () => {
  return (
    <>
      <div id="contactme" className="w-full h-[40vh] relative mx-autos mb-24 md:mb-0 bg-white z-10">
          <div className="w-3/4 mt-10 lg:mt-36 mx-auto content-evenly">
            <div className="lg:w-1/3 block lg:inline-block font-thin text-center">
              <p className="lg:mb-6 text-xl md:text-3xl">Email</p>
              <p>Limhaowen097@gmail.com</p>
            </div>
            <div className="lg:w-1/3 block lg:inline-block mt-16 lg:mt-0 font-thin text-center ">
              <p className="lg:mb-6 text-xl md:text-3xl">LinkedIn</p>
              <p>in/lim-hao-wen/</p>
            </div>
            <div className="lg:w-1/3 block lg:inline-block mt-16 lg:mt-0 font-thin text-center ">
              <p className="lg:mb-6 text-xl md:text-3xl">Instagram</p>
              <p>@lin.haowen</p>
            </div>
          </div>
      </div>
    </>

  )
}

export default Footer