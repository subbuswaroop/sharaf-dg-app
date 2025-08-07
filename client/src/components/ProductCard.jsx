import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getAsset } from "../data";
import FlashMessage from "./FlashMessage";

const ProductCard = ({ product, indx }) => {
  const { addToCart, decreaseQuantity, getCartItemQuantity } = useCart();
  const [showFlash, setShowFlash] = useState(false);
  const [message, setMessage] = useState("");

  const quantity = getCartItemQuantity(product.id);
  const isInCart = quantity > 0;

  const handleAddToCart = () => {
    addToCart(product);
    setShowFlash(true);
    setMessage(isInCart ? "Quantity updated in cart" : "Product added to cart");
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
    setMessage("Product removed in cart");
    setShowFlash(true);
    if (quantity <= 1) {
      setMessage("Product removed from cart");
    }
    if (quantity === 0) {
      setShowFlash(false);
    }
  };

  return (
    <div className="card min-h-[420px]">
      <div className="bg-lightGray min-h-[300px] relative">
        <div className="flex justify-between items-center">
          <div className="py-6 pl-4">
            <span className="font-thin text-lg">Best Seller</span>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={"text-yellow-400 fill-current"}
                />
              ))}
            </div>
          </div>
          <img
            src={getAsset("heart")}
            alt="heart"
            className="w-10 h-10 mr-4 bg-white p-2 rounded-full"
          />
        </div>
        <img
          src={getAsset(`product-${indx + 1}`)}
          alt={`product-${indx + 1}`}
          className="w-52 h-52 object-contain absolute left-[12%] md:left-[27%] bottom-[10px]"
        />
      </div>
      <div className="flex flex-col justify-center px-4 min-h-[120px]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="p-1">
            <h3 className="font-normal text-md text-gray-800">
              {product.name}
            </h3>
            <span className="font-thin text-sm line-through">
              ${product.price}
            </span>
            <span className="pl-2 font-normal text-sm">${product.price}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {!isInCart ? (
              <button
                onClick={handleAddToCart}
                className={`flex items-center bg-black text-md text-white py-1 px-4 rounded-full transition-colors hover:bg-gray-800`}
                disabled={product.stock <= 0}
              >
                <span className="font-thin">
                  {product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
                </span>
                <img
                  src={getAsset("bag-white")}
                  alt="Cart Icon"
                  className="w-7 h-7 pl-2"
                />
              </button>
            ) : (
              <div className="flex items-center bg-black text-white rounded-full overflow-hidden">
                <button
                  onClick={handleDecreaseQuantity}
                  className="p-2 hover:bg-gray-700 transition-colors"
                  disabled={quantity <= 0}
                >
                  <Minus size={16} />
                </button>
                <span className="px-3 py-1 font-medium min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="p-2 hover:bg-gray-700 transition-colors"
                  disabled={product.stock <= 0}
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-orange-500 text-sm mt-2">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
      <FlashMessage
        message={message}
        show={showFlash}
        onClose={() => setShowFlash(false)}
      />
    </div>
  );
};

export default ProductCard;
