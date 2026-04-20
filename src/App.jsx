import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./pages/ScrollToTop";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
       <ScrollToTop/>

      <div className="min-h-screen flex flex-col bg-[#0a0a0a]">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;