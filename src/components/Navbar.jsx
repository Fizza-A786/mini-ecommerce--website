import React from "react";
import { FaHeart, FaUserCircle, FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSearchTerm } from "../Redux/Features/ProductSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart?.items || []);
  const searchTerm = useSelector((state) => state.products?.searchTerm || "");

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  if (hideNavbar) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">

        <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-purple-500">Mini</span>Store
        </Link>

        <div className="hidden md:flex items-center bg-white/10 border border-purple-500/20 rounded-full px-4 py-2 w-[320px]">

          <FaSearch className="text-purple-400 mr-2" />

          <input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search products..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-6 text-xl">

          <FaHeart className="hover:text-pink-500 cursor-pointer transition" />

          <Link to="/cart" className="relative">
            <TiShoppingCart size={26} className="hover:text-purple-400 transition" />

            <span className="absolute -top-2 -right-3 bg-purple-600 text-xs px-2 rounded-full">
              {cartItems.length}
            </span>
          </Link>

          <Link to="/signup">
            <FaUserCircle className="hover:text-purple-400 cursor-pointer transition" />
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;