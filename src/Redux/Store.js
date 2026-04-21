import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/CartSlice.js";

export const store = configureStore({
  reducer: {

    cart: cartReducer,
  },
});