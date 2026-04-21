import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const ProductSlice = createSlice({
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

export const { setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;