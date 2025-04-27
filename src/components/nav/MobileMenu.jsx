import React from "react";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";

const MobileMenu = ({ setShowMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-[50%] rounded-lg sm:w-[50%] h-full bg-slate-600 text-white z-50 flex flex-col gap-6 p-6 shadow-lg transition-all duration-300">
      
      {/* Close button */}
      <div className="flex justify-end">
        <HiX size={30} onClick={() => setShowMenu(false)} className="cursor-pointer text-white" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 bg-slate-500 p-3 rounded-lg clear-left">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            `block w-full text-lg font-semibold py-4 px-4 transition-all ${
              isActive ? "bg-slate-600" : "hover:bg-slate-500"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            `block w-full text-lg font-semibold py-4 px-4 transition-all ${
              isActive ? "bg-slate-600" : "hover:bg-slate-500"
            }`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/shop"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            `block w-full text-lg font-semibold py-4 px-4 transition-all ${
              isActive ? "bg-slate-600" : "hover:bg-slate-500"
            }`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            `block w-full text-lg font-semibold py-4 px-4 transition-all ${
              isActive ? "bg-slate-600" : "hover:bg-slate-500"
            }`
          }
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/cart"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            `block w-full text-lg font-semibold py-4 px-4 transition-all ${
              isActive ? "bg-slate-600" : "hover:bg-slate-500"
            }`
          }
        >
          Cart
        </NavLink>
      </div>

    </div>
  );
};

export default MobileMenu;
