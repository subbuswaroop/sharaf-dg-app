import { Link } from "react-router-dom";
import { useCountDown } from "../hooks/useCountDown";
import { getAsset } from "../data";

const PromotionSection = ({ data }) => {
  const { days, hours, minutes, seconds, total } = useCountDown(
    "2025-08-12T08:00:00"
  );
  return (
    <section className="bg-gradient-to-r from-[#D1068C] via-[#1310A6] to-[#7E1B5C] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg py-4 sm:py-6 md:py-8 text-white my-8 sm:my-12 md:my-16">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1">
          {data?.title}
        </h2>
        <p className="text-white mb-6 sm:mb-8 md:mb-12 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-3xl">
          {data?.subtitle} <b>{data?.code}</b>
        </p>
        {data?.description && (
          <p className="mb-4 sm:mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-2xl mx-auto">
            {data.description} {days > 0 && `${days}d `}
            {hours}hrs {minutes}mins {seconds}secs
          </p>
        )}
        <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center">
          {data?.cta.text && (
            <Link
              className={`flex items-center bg-white text-black py-1 sm:py-2 px-3 sm:px-4 rounded-full transition-colors`}
            >
              <span className="font-thin text-base sm:text-lg md:text-xl">
                {data.cta.text}
              </span>
              <img
                src={getAsset("arrow-right-white")}
                alt="Go to Shop"
                className="w-8 h-8 sm:w-10 sm:h-10 pl-1"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
