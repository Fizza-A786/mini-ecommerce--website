import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/ProductSlice.js";
import cartReducer from "./Features/CartSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});