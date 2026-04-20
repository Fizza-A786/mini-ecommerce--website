import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Features/CartSlice";
import products from "../data/products";

const categories = ["All", "Mouse", "Keyboard", "Laptop", "Mobile"];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedId, setAddedId] = useState(null);

  const searchTerm = useSelector(
    (state) => state.products?.searchTerm || ""
  );

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [selectedCategory, searchTerm]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 800);
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 md:px-15 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-purple-500">Products</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Best quality products at unbeatable prices
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition text-sm ${
              selectedCategory === cat
                ? "bg-purple-600 border-purple-600"
                : "border-gray-600 text-gray-300 hover:border-purple-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found 😔
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-purple-500/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg w-full"
            >

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

              <div className="p-5">

                <p className="text-xs text-purple-400 mb-1">
                  {item.category}
                </p>

                <h2 className="text-lg font-semibold line-clamp-1">
                  {item.name}
                </h2>

                <div className="flex items-center justify-between mt-2 text-sm">
                  <p className="text-yellow-400">⭐ {item.rating}</p>
                </div>

                <p className="text-gray-300 font-medium mt-2 mb-4 text-lg">
                  ${item.price}
                </p>

                <div className="flex flex-col gap-2">

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-2 rounded-xl transition font-medium ${
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