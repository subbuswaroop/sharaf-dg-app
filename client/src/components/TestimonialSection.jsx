import { getAsset } from "../data";

const TestimonialSection = ({ sectionData, data }) => {
  return (
    <section className="bg-lightGray pt-2 sm:pt-3 md:pt-4">
      <div className="p-2 sm:p-3 md:p-4">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-2 sm:mb-3 md:mb-4">
            {sectionData?.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2">
          {Array.isArray(data) &&
            data.map((testimonial, indx) => (
              <div
                key={testimonial.id}
                className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                  <img
                    src={getAsset(`avatar-${indx % 2 === 0 ? 1 : 2}`)}
                    alt="Star"
                    className="w-12 h-12 md:w-10 md:h-10 md:w-14 md:h-14 mr-2 rounded-full"
                  />
                </div>
                <h4 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  {testimonial.title}
                </h4>
                <p className="text-gray-700 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  "{testimonial.text}" <b>- {testimonial.name}</b>
                  {testimonial.approved && (
                    <b className="ml-1">,Verified Buyer</b>
                  )}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
