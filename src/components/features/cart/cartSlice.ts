import { createSlice } from "@reduxjs/toolkit";

const emptyProducts: Array<any> = [];

export const slice = createSlice({
  name: "cart",
  initialState: {
    products: emptyProducts,
  },
  reducers: {
    clearCart: (cart) => {
      cart.products = [];
    },
    addToCart: (cart, action) => {
      cart.products.push(action.payload);
    },
    removeFromCart: (cart, action) => {
      cart.products = cart.products.filter((product, index) => {
        return index !== action.payload;
      });
    },
  },
});

export const { clearCart, addToCart, removeFromCart } = slice.actions;

export const selectCart = (state: any) => {
  return state.cart.products;
};

export default slice.reducer;
