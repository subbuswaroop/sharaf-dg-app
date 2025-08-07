import useContent from "../hooks/useContent";
import { Link } from "react-router-dom";
import { getAsset } from "../data";

const BlogPostSection = () => {
  const { getContent } = useContent();
  const blogPostSection = getContent("sections.blogs");

  return (
    <section className="bg-lightGray my-12 xl:h-[700px] relative">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4 px-2 pb-4 md:px-0 md:py-0">
        <div className="py-4 md:pl-6 md:py-12 lg:py-4 xl:py-12 flex flex-col justify-between">
          <div className="sm:pt-4 md:pt-0">
            <h4 className="text-xl md:text-2xl lg:text-2xl xl:text-5xl font-normal">
              {blogPostSection.title}
            </h4>
            <p className="text-md md:text-xl lg:text-xl xl:text-2xl mb-2 pt-4 md:pt-8 lg:pt-8 xl:pt-12">
              {blogPostSection.subtitle}
            </p>
            <p className="text-md md:text-xl lg:text-lg xl:text-2xl font-thin pt-4 md:py-0 pr-0 md:pr-16">
              {blogPostSection.description}
              <span className="font-semibold underline underline-offset-[6px]">
                {blogPostSection.continue}
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-4">
            {blogPostSection?.cta.text && (
              <Link
                className={`flex items-center bg-white text-black py-1 sm:py-2 md:py-2 px-1 sm:px-2 md:px-4 rounded-full transition-colors w-max`}
              >
                <span className="font-thin text-sm md:text-xl lg:text-xl">
                  {blogPostSection.cta.text}
                </span>
                <img
                  src={getAsset("arrow-right-white")}
                  alt="Go to Shop"
                  className="w-6 h-6 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 pl-1"
                />
              </Link>
            )}
          </div>
        </div>
        <img
          src={getAsset(blogPostSection.image)}
          alt={blogPostSection.title}
          className="object-cover w-full xl:h-[700px]"
        />
      </div>
    </section>
  );
};

export default BlogPostSection;
