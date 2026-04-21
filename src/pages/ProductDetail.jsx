import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Features/CartSlice.js";
import products from "./../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-white/5 p-4 rounded-2xl border border-purple-500/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* DETAILS */}
        <div>

          <p className="text-purple-400 mb-2 text-sm">
            {product.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {product.name}
          </h1>

          <p className="text-yellow-400 mb-4 text-lg">
            ⭐ {product.rating}
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Premium quality product designed for performance and comfort.
          </p>

          <p className="text-3xl font-semibold mb-6">
            ${product.price}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">

            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex-1 bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-medium"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-600 hover:border-purple-500 transition py-3 rounded-xl"
            >
              Back
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetail;