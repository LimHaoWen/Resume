import BlogCard from "@/cards/BlogCard";
import { blogPosts } from "@/data/blog";

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
              {blogPosts.map((post) => (
                <BlogCard key={post.href} {...post} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
}

export default Blogs