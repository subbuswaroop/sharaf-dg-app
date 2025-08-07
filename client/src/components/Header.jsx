import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import useContent from "../hooks/useContent";
import { getAsset } from "../data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const { getContent } = useContent();

  const navigation = getContent("navigation");
  const brand = navigation?.brand;
  const navLinks = navigation?.links || [];
  const navCategories = navigation?.categories || [];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white w-full">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={getAsset("logo")}
            alt={brand?.name}
            className="w-[240px] h-[60px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`font-normal transition-colors ${
                isActiveLink(link.path)
                  ? "underline underline-offset-[6px]"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center">
          <div className="hidden md:block relative p-2 text-gray-700 hover:text-blue-600">
            <img src={getAsset("bag")} alt="Cart" className="w-8 h-8" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </div>
          <div className="hidden md:block relative p-2 text-gray-700 hover:text-blue-600">
            <img src={getAsset("heart")} alt="Favourites" className="w-8 h-8" />
          </div>
          <div className="hidden md:block relative p-2 text-gray-700 hover:text-blue-600">
            <img src={getAsset("profile")} alt="Profile" className="w-8 h-8" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <img src={getAsset("menu-icon")} alt="Menu" className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="hidden md:flex justify-between items-center mt-4">
        <div className="flex justify-between items-center gap-2">
          {navCategories.map((category) => (
            <div
              key={category.id}
              className={`font-normal bg-gray-100 px-[12px] py-[4px] rounded-md text-black font-light transition-colors text-gray-700`}
            >
              {category.label}
            </div>
          ))}
        </div>
        <div className="relative p-2 text-gray-700 hover:text-blue-600">
          <img src={getAsset("search")} alt="Search" className="w-8 h-8" />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActiveLink(link.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap">
            <div className="relative p-2 text-gray-700 hover:text-blue-600">
              <img src={getAsset("bag")} alt="Cart" className="w-8 h-8" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </div>
            <div className="relative p-2 text-gray-700 hover:text-blue-600">
              <img
                src={getAsset("heart")}
                alt="Favourites"
                className="w-8 h-8"
              />
            </div>
            <div className="relative p-2 text-gray-700 hover:text-blue-600">
              <img
                src={getAsset("profile")}
                alt="Profile"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
