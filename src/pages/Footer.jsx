import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-purple-500/20 mt-20">

      <div className="max-w-7xl mx-auto md:px-10 px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-purple-500">Mini</span>Store
          </h1>

          <p className="text-gray-400 mt-3 text-sm">
            Your one-stop shop for premium tech gadgets. Quality products at unbeatable prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              <Link to="/" className="hover:text-purple-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-purple-400">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-purple-400">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/checkout" className="hover:text-purple-400">
                Checkout
              </Link>
            </li>

          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h2 className="font-semibold mb-4">Categories</h2>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Mouse</li>
            <li>Keyboard</li>
            <li>Laptop</li>
            <li>Mobile</li>
          </ul>

        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-4">Contact</h2>

          <p className="text-gray-400 text-sm">
            Email: support@ministore.com
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Phone: +92 300 0000000
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-lg">

            <a href="#" className="hover:text-purple-400">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-purple-400">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-purple-400">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-purple-400">
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} MiniStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;