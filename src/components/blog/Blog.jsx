import Blogcard from "../utilities/blogcard";
import Prism from "../images/Prism.jpg";
import ErrorHandling from "../images/ErrorHandling.jpg"

const Blogs = () => {
    return (
      <>
        <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] xl:h-[70vh] w-screen flex bg-white z-10 dark:bg-black">
          <div className="h-full md:max-lg:w-4/5 lg:w-[68%] xl:w-[72%] mx-auto relative z-10 bg-white dark:bg-black
          before:content-[''] before:absolute before:bg-gray before:left-[50%] before:bottom-[2rem] 
          before:translate-x-[-50%] before:w-[80%] before:h-0.5">
            <p className="mt-0 md:mb-8 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
            reveal relative transform translate-y-[100px] opacity-0 transition-all duration-[1500ms] ease-out 
            [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Blogs</p>
            <div className="h-1/3 md:h-64 lg:h-[40%]">
              <Blogcard 
                href={"https://medium.com/@limhaowen097/how-i-learned-to-stop-worrying-and-use-prisma-transactions-right-d9fa609bbc97"} 
                src={ Prism } 
                alt={"MediumArticle"}
                customWidth={"w-[65%]"}
                leftRightMargin={"ml-10"}
                title={"How I learned to stop worring and use prisma transactions right"}
                />
              <Blogcard 
                href={"https://medium.com/@lim.haowen/why-error-handling-deserves-more-love-251556b583c7"} 
                src={ ErrorHandling } 
                alt={"MediumArticle"}
                customWidth={"w-[65%]"}
                leftRightMargin={"mr-10"}
                title={"Why error handling deserves more love"}
                />
            </div>
            <div className="h-1/3 md:h-64 lg:h-80">
              {/* <Blogcard 
                href={"https://medium.com/@limhaowen097/how-i-learned-to-stop-worrying-and-use-prisma-transactions-right-d9fa609bbc97"} 
                src={ Prism } 
                alt={"MediumArticle"}
                customWidth={"w-[65%]"}
                leftRightMargin={"ml-10"}
                title={"How I Learned to Stop Worring and Use Prisma Transactions Right"}
                />
              <Blogcard 
                href={"https://medium.com/@limhaowen097/how-i-learned-to-stop-worrying-and-use-prisma-transactions-right-d9fa609bbc97"} 
                src={ Prism } 
                alt={"MediumArticle"}
                customWidth={"w-[65%]"}
                leftRightMargin={"mr-10"}
                title={"How I Learned to Stop Worring and Use Prisma Transactions Right"} 
                /> */}
            </div>
          </div>
        </div>
      </>
    )
}

export default Blogs