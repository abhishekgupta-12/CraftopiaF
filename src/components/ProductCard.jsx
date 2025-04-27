import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const ProductCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();

  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  return (
    <div className="flex items-center bg-white relative flex-col justify-between p-4 shadow-md sm:shadow-new rounded-lg w-full max-w-xs hover:scale-105 transition-transform duration-300">
      
      {/* Image */}
      <div className="h-40 sm:h-48 w-full">
        <img
          onClick={() => navigate(`/product/${item.id}`)}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />
      </div>

      {/* Product Info */}
      <div className="py-4 flex flex-col gap-2 w-full">
        <h2
          className="cursor-pointer text-sm sm:text-base font-semibold text-center truncate"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {productName(item.title)}
        </h2>

        <h2 className="text-center text-gray-700 text-sm sm:text-base">
          ₹ <span className="text-red-500 font-semibold">{Math.ceil(item.price * 81)}</span>
        </h2>
      </div>

      {/* Add to Cart Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => addCart(item, navigate)}
          className="w-full sm:w-auto rounded-md border-2 hover:bg-black hover:text-white border-slate-400 px-4 py-2 transition"
        >
          Add To Cart
        </button>
      </div>

      {/* Rating Count Badge */}
      <div className="absolute top-2 left-2 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-white bg-pink-500">
        {item.rating.count}
      </div>
    </div>
  );
};

export default ProductCard;
