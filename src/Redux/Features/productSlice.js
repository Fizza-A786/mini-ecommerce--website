import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;