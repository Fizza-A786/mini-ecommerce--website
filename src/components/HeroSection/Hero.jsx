import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

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
  const navigate = useNavigate();

  const textRef = useRef(null);
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    // Simple fade animation
    gsap.fromTo(
      [textRef.current, btnRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    return () => clearInterval(interval);
  }, []);

  // Animate on index change
  useEffect(() => {
    gsap.fromTo(
      [textRef.current, btnRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      bgRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [index]);

  return (
    <section className="h-screen relative overflow-hidden text-white">

      <img
        ref={bgRef}
        src={slides[index].image}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <div ref={textRef}>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {slides[index].title}
          </h1>

          <p className="text-gray-300 max-w-md mb-4">
            {slides[index].desc}
          </p>

          <p className="text-white font-semibold text-lg mb-6">
            {slides[index].price}
          </p>

        </div>

        <div ref={btnRef} className="flex gap-4">

          <button
            onClick={() => navigate("/products")}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
          >
            Buy Now
          </button>

          <button
            onClick={() => navigate(`/product/${slides[index].id}`)}
            className="border border-white/30 px-6 py-2 rounded-full"
          >
            View Details
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;