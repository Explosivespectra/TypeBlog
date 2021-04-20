import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    clearCart: (cart) => {
      cart.products = [];
    },
    addToCart: (cart, action) => {
      cart.products.push(action.payload);
    },
    removeFromCart: (cart, action) => {
      return cart.products.filter((product) => {
        product.id !== action.payload.id;
      });
    },
  },
});

export const { clearCart, addToCart, removeFromCart } = slice.actions;

export const selectCart = (state) => {
  state.cart.products;
};

export default slice.reducer;
