import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";

const ShopCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();

  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300  relative">
      
      {/* Product Image */}
      <div className="w-full h-[220px] sm:h-[250px] md:h-[260px] overflow-hidden rounded-md mb-4 bg-white">
        <img
          onClick={() => navigate(`/shop/${item.id}`)}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center cursor-pointer"
        />
      </div>

      {/* Product Details */}
      <div className="text-center mb-4 w-full">
        <h2
          className="text-base sm:text-lg font-semibold cursor-pointer hover:underline truncate px-2"
          onClick={() => navigate(`/shop/${item.id}`)}
          title={item.title}
        >
          {productName(item.title)}
        </h2>
        <p className="mt-2 text-lg text-red-500 font-bold">
          ₹ {Math.ceil(item.price * 81)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addCart(item, navigate)}
        className="w-full py-2 border-2 border-slate-400 rounded-md font-medium hover:bg-black hover:text-white hover:border-black transition-all"
      >
        Add To Cart
      </button>

      {/* Rating Badge */}
      <div className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-pink-500 text-white text-xs font-bold rounded-full">
        {item.rating.count}
      </div>
    </div>
  );
};

export default ShopCard;
