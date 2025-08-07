import { Link } from "react-router-dom";
import { getAsset } from "../data";

const WhyChooseSection = ({ data }) => {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-lightGray mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal text-black mb-2 sm:mb-3 md:mb-6">
        {data?.title}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        <img src={getAsset("acne-women")} alt="Acne Women" className="w-full" />
        <div className="flex flex-col justify-between py-2 sm:py-3 md:py-4">
          <div>
            <h4 className="text-black font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {data?.subtitle}
            </h4>
            {data?.description && (
              <p className="text-gray-600 mt-1 sm:mt-2 font-thin text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-6 sm:leading-8 md:leading-10 xl:leading-10">
                {data.description}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
            {data?.cta?.link && (
              <Link
                to={data.cta.link}
                className={`flex items-center bg-white text-black py-1 sm:py-2 px-3 sm:px-4 rounded-full transition-colors mt-4 w-max`}
              >
                <span className="font-thin text-base sm:text-lg md:text-xl">
                  {data?.explore}
                </span>
                <img
                  src={getAsset("arrow-right-white")}
                  alt="Explore Our Range"
                  className="w-8 h-8 sm:w-10 sm:h-10 pl-1"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
