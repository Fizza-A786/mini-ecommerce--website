import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ScrollToTop from "./pages/ScrollToTop";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter   future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[#0a0a0a]">

        {/* NAVBAR */}
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductPage searchTerm={searchTerm} />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
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