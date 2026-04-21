import React from "react";
import { FaHeart, FaUserCircle, FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.items || []);

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  // ✅ FIXED SEARCH (CLEAR INPUT AFTER SEARCH)
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm(""); // 👈 INPUT CLEAR
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-purple-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-purple-500">Mini</span>Store
        </Link>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex items-center bg-white/10 px-4 py-2 rounded-full w-[320px]">

          <FaSearch onClick={handleSearch} className="cursor-pointer mr-2" />

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
          />

        </div>

        {/* ICONS */}
        <div className="flex items-center gap-5 text-xl">

          <FaHeart />

          <Link to="/cart" className="relative">
            <TiShoppingCart size={26} />
            <span className="absolute -top-2 -right-3 bg-purple-600 text-xs px-2 rounded-full">
              {cartItems.length}
            </span>
          </Link>

          <Link to="/signup">
            <FaUserCircle />
          </Link>

        </div>

      </div>

      {/* MOBILE SEARCH */}
      <div className="flex md:hidden px-5 pb-3">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="bg-white/10 w-full px-4 py-2 rounded-full text-sm outline-none"
        />

        <button
          onClick={handleSearch}
          className="ml-2 text-purple-500 text-xl"
        >
          <FaSearch />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;