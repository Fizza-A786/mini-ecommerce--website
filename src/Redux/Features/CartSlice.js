import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;