import Blogcard from "@/cards/blogcard";
import Prism from "/src/images/Prism.jpg";
import ErrorHandling from "/src/images/ErrorHandling.jpg"

const Blogs = () => {
    return (
      <>
        <div className="flex bg-transparent z-10">
          <div className="h-full md:max-lg:w-4/5 lg:w-[68%] xl:w-[72%] mx-auto relative z-10 bg-transparent
          before-divider">
            <p className="mt-0 md:mb-8 pl-5 text-2xl md:max-lg:text-3xl lg:text-4xl xl:text-5xl md:mt-8 
            reveal relative transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out 
            [&.active]:translate-y-0 [&.active]:opacity-100 dark:text-white">Blogs</p>
            <div className="h-1/3 md:h-64 lg:h-[40%] reveal transform translate-y-[100px] opacity-0 transition-all duration-1000 ease-out 
            [&.active]:translate-y-0 [&.active]:opacity-100">
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
                title={"How to handle errors properly: A developer's guide"}
                />
            </div>
            {/* <div className="h-1/3 md:h-64 lg:h-80">
              <Blogcard 
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
                />
            </div> */}
          </div>
        </div>
      </>
    )
}

export default Blogs