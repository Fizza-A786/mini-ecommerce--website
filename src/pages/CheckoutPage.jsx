import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Features/CartSlice.js";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.city || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    dispatch(clearCart());

    setForm({
      name: "",
      address: "",
      city: "",
      phone: "",
    });

    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
        <h1 className="text-2xl font-bold mb-3">Your cart is empty</h1>
        <button
          onClick={() => navigate("/products")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg"
        >
          Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 md:px-10 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="bg-white/5 border border-purple-500/10 p-6 rounded-xl">

          <h2 className="text-xl font-semibold mb-4">
            Shipping Details
          </h2>

          <div className="flex flex-col gap-3">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 rounded bg-black border border-gray-700 outline-none"
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="p-3 rounded bg-black border border-gray-700 outline-none"
            />

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="p-3 rounded bg-black border border-gray-700 outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 rounded bg-black border border-gray-700 outline-none"
            />

          </div>

        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white/5 border border-purple-500/10 p-6 rounded-xl">

          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm border-b border-gray-700 pb-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  ${item.price * item.quantity}
                </span>
              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          {/* PAYMENT BUTTON (simple fake Pay button) */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
          >
            Pay & Place Order
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-full mt-3 border border-gray-600 py-2 rounded-lg"
          >
            Back to Cart
          </button>

        </div>

      </div>

    </section>
  );
};

export default CheckoutPage;