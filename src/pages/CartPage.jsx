import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../Redux/Features/CartSlice";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🟢 EMPTY CART UI
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4">

        <h1 className="text-3xl font-bold mb-2">
           Your Cart is Empty
        </h1>

        <p className="text-gray-400 mb-6 text-center">
          Looks like you haven’t added anything yet
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition"
        >
          Back to Shopping  🛍️
        </button>

      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 md:px-10 py-10">

      <h1 className="text-3xl font-bold mb-8">
         Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-purple-500/10 rounded-xl p-4 gap-4"
            >

              {/* IMAGE + INFO */}
              <div className="flex items-center gap-4 w-full md:w-auto">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div>
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-purple-400">
                    ${item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-2">

                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 bg-gray-700 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 bg-gray-700 rounded"
                    >
                      +
                    </button>

                  </div>
                </div>

              </div>

              {/* SUBTOTAL */}
              <div className="font-semibold text-lg">
                ${item.price * item.quantity}
              </div>

              {/* REMOVE */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash size={18} />
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="bg-white/5 border border-purple-500/10 rounded-xl p-6 h-fit">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold">${totalPrice}</span>
          </div>

          <button
          onClick={()=>navigate("/checkout")}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg mb-3">
            Checkout
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white py-2 rounded-lg"
          >
            Clear Cart
          </button>

        </div>

      </div>

    </section>
  );
};

export default CartPage;