import { getAsset } from "../data";
import { Link } from "react-router-dom";

const HeaderSection = ({ data }) => {
  return (
    <section className="bg-[#FFF6FD] relative overflow-hidden rounded-xl">
      <div className="relative">
        <img
          src={getAsset("logo")}
          alt="Backdrop"
          className="absolute w-full h-auto object-cover rounded-t-xl scale-[2.0] md:scale-0 opacity-[.07] top-[75%] md:top-[54%] left-[10%]"
        />
        <div className="py-16 px-2 md:py-20 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 md:text-center lg:text-left relative z-10">
            <div className="block md:flex">
              <h1
                className={`text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal`}
              >
                {data?.title}
              </h1>
              <img
                src={getAsset("arrow-up")}
                alt="Arrow up"
                className="hidden md:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 pl-2 sm:pl-4"
              />
            </div>
            <h1
              className={`pt-2 pl-0 md:pl-24 sm:pl-28 md:pl-36 xl:pl-56 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6`}
            >
              {data?.title_secondary}
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl xl:text-2xl max-w-md md:max-w-lg text-gray-600 font-thin mb-6 sm:mb-8`}
            >
              {data?.subtitle ||
                "Discover amazing products at unbeatable prices"}
            </p>
            <div className="block md:flex md:flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {data?.cta?.primary && (
                <Link
                  to={data.cta.primary.link}
                  className={`flex items-center bg-black text-white py-0.5 px-4 rounded-full transition-colors w-full md:w-max justify-center md:justify-start`}
                >
                  <span className="font-thin text-xl">
                    {data.cta.primary.text}
                  </span>
                  <img
                    src={getAsset("arrow-right")}
                    alt="Shop now"
                    className="w-10 h-10 pl-1"
                  />
                </Link>
              )}
            </div>
          </div>

          <div className="absolute top-[18%] right-0 lg:block hidden md:block">
            <img
              src={getAsset("header-img")}
              alt="Header Image"
              className="w-[400px] xl:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
