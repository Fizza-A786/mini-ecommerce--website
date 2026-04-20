import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=1600",
    title: "MX Ergonomic Mouse",
    desc: "Precision meets comfort for daily productivity.",
    price: "$129",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600",
    title: "Mechanical Keyboard",
    desc: "Built for speed, crafted for creators.",
    price: "$89",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/18966470/pexels-photo-18966470.jpeg",
    title: "Gaming Keyboard Pro",
    desc: "Track your life with modern intelligence.",
    price: "$199",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🟢 Buy Now → Product Page (ALL PRODUCTS)
  const handleBuyNow = () => {
    navigate("/products");
  };

  // 🟢 View Details → CURRENT SLIDE PRODUCT DETAIL
  const handleViewDetails = () => {
    navigate(`/product/${slides[index].id}`);
  };

  return (
    <section className="h-screen relative overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src={slides[index].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* TOP TEXT */}
      <div className="absolute top-10 w-full text-center z-10">
        <p className="text-purple-300 tracking-[5px] text-xs">
          FEATURED PRODUCT
        </p>
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[index].title}
        </h1>

        <p className="text-gray-300 max-w-md mb-4">
          {slides[index].desc}
        </p>

        <p className="text-white font-semibold text-lg mb-6">
          {slides[index].price}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">

          <button
            onClick={handleBuyNow}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition hover:-translate-y-1"
          >
            Buy Now
          </button>

          <button
            onClick={handleViewDetails}
            className="border border-white/30 px-6 py-2 rounded-full hover:border-white transition hover:-translate-y-1"
          >
            View Details
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;