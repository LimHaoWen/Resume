import BlogCard from "@/cards/BlogCard";
import { blogPosts } from "@/data/blog";

const Blogs = () => {
    return (
      <>
        <div className="flex bg-transparent z-10">
          <div className="h-full section-container relative z-10 bg-transparent
          before-divider">
            <p className="section-heading text-glass reveal reveal-slide mt-0 pl-5 md:mt-8 md:mb-8">Blogs</p>
            <div className="h-1/3 md:h-64 lg:h-[40%] reveal reveal-slide">
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