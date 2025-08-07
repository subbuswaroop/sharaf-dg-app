import { Link } from "react-router-dom";
import useContent from "../hooks/useContent";
import { getAsset } from "../data";

const Footer = () => {
  const { getContent } = useContent();

  const footer = getContent("footer");
  const brand = footer?.brand;
  const links = footer?.links;
  const newsletter = footer?.newsletter;

  return (
    <footer className="bg-[#121212] text-white pt-8 md:pt-12 pb-6 px-8 md:px-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pb-8">
          <div className="lg:col-span-1 order-1">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={getAsset("logo-white")}
                  alt={brand?.name}
                  className="w-[240px] h-[60px]"
                />
              </Link>
            </div>
          </div>

          {links?.company && (
            <div className="md:pl-[20%] order-3 sm:order-2">
              <h3 className="font-semibold text-lg mb-4">
                {links.company.title}
              </h3>
              <ul className="space-y-2">
                {links.company.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {links?.support && (
            <div className="pt-6 md:pt-0 order-4 sm:order-3">
              <h3 className="font-semibold text-lg mb-4">
                {links.support.title}
              </h3>
              <ul className="space-y-2">
                {links.support.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {newsletter && (
            <div className="pt-6 pb-6 md:pb-0 md:pt-0 order-2 sm:order-4">
              <p className="font-thin text-sm text-center mx-auto xl:px-8 mb-4">
                {newsletter.description}
              </p>
              <form className="flex w-full max-w-full">
                <input
                  id="newsletter_subscribe"
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="flex-1 min-w-0 bg-white border border-gray-700 rounded-l-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-black border border-white hover:bg-blue-600 text-white rounded-r-md py-2 px-3 whitespace-nowrap"
                >
                  {newsletter.cta.text}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()}, {brand?.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
