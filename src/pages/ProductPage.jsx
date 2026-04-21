import React, { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Features/CartSlice.js";
import products from "../data/products.js";
import gsap from "gsap";

const categories = ["All", "Mouse", "Keyboard", "Laptop", "Mobile"];

const ProductPage = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedId, setAddedId] = useState(null);

  const cardsRef = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // URL SEARCH (IMPORTANT)
  const urlSearch =
    new URLSearchParams(location.search).get("search") || "";

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const finalSearch = searchTerm || urlSearch;

    if (finalSearch) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(finalSearch.toLowerCase())
      );
    }

    return result;
  }, [selectedCategory, searchTerm, urlSearch]);

  // SAFE REF RESET
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, filteredProducts.length);
  }, [filteredProducts]);

  // GSAP ANIMATION SAFE
  useEffect(() => {
    const validCards = cardsRef.current.filter(Boolean);

    if (validCards.length) {
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    }
  }, [filteredProducts]);

  // ADD TO CART ANIMATION
  const handleAddToCart = (item, index) => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    const el = cardsRef.current[index];

    if (el) {
      gsap.fromTo(
        el,
        { scale: 1 },
        { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1 }
      );
    }

    setTimeout(() => setAddedId(null), 800);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 md:px-18 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-purple-500">Products</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Best quality products at unbeatable prices
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              selectedCategory === cat
                ? "bg-purple-600 border-purple-600"
                : "border-gray-600 text-gray-300 hover:border-purple-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found 😔
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white/5 border border-purple-500/10 rounded-2xl overflow-hidden shadow-lg"
            >

              {/* IMAGE */}
              <div
                className="h-56 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-xs text-purple-400 mb-1">
                  {item.category}
                </p>

                <h2 className="text-lg font-semibold line-clamp-1">
                  {item.name}
                </h2>

                <p className="text-yellow-400 mt-2">
                  ⭐ {item.rating}
                </p>

                <p className="text-gray-300 font-medium mt-2 mb-4 text-lg">
                  ${item.price}
                </p>

                <div className="flex flex-col gap-2">

                  <button
                    onClick={() => handleAddToCart(item, index)}
                    className={`w-full py-2 rounded-xl font-medium ${
                      addedId === item.id
                        ? "bg-green-600"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {addedId === item.id ? "Added ✓" : "Add to Cart"}
                  </button>

                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-full border border-gray-600 hover:border-purple-500 py-2 rounded-xl text-sm"
                  >
                    View Details
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
};

export default ProductPage;