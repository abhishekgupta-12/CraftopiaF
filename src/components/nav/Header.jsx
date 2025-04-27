import React, { useEffect, useState } from "react";
import { HiShoppingCart, HiUserCircle, HiMenu } from "react-icons/hi"; // 🆕 Add HiMenu
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAppStore } from "../../../store/appStore";
import API from "../../../utils/axios";
import MobileMenu from "./MobileMenu"; // 🆕 Import MobileMenu

const Header = () => {
  const { user, totalCart } = useAppStore();
  const [showMenu, setShowMenu] = useState(false); // already there
  const navigate = useNavigate();

  const getCartNumber = async () => {
    try {
      const { data } = await API("/api/user/get-user-cart-number");
      useAppStore.setState({ totalCart: data });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (user) {
      getCartNumber();
    }
  }, [user]);

  return (
    <header className="bg-slate-500 z-10 border-b-[1px] sticky top-0 text-white backdrop-blur-lg px-5 py-5 flex items-center justify-between">
      <div>
        <h2
          onClick={() => navigate("/")}
          className="font-extrabold text-[26px] cursor-pointer tracking-wide sm:tracking-widest"
        >
          Craftopia
        </h2>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:block">
        <ul className="flex items-center gap-3 text-[18px] font-semibold">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About Us</NavLink></li>
          <li><NavLink to={"/shop"}>Shop</NavLink></li>
          <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
          {!user && (
            <li><NavLink to={"/login"}>Login</NavLink></li>
          )}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="flex items-center gap-3 sm:hidden">
        {/* Cart Icon */}
        <NavLink to={"/cart"}>
          <HiShoppingCart size={30} className="cursor-pointer" />
        </NavLink>

        {/* User Icon */}
        {user ? (
          <HiUserCircle size={30} className="cursor-pointer" onClick={() => setShowMenu((pre) => !pre)} />
        ) : (
          <NavLink to={"/login"}>
            <HiUserCircle size={30} className="cursor-pointer" />
          </NavLink>
        )}

        {/* Hamburger Menu Icon */}
        <HiMenu size={30} className="cursor-pointer" onClick={() => setShowMenu(true)} />
      </div>

      {/* Sidebar Menu Component */}
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </header>
  );
};

export default Header;
