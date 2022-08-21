import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = {
  menu: { ...mockData },
  order: [],
  cart: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenuToCart: (state, action) => {
      const { id } = action.payload;
      const sameMenuIndex = state.cart.findIndex((menu) => menu.id === id);

      if (sameMenuIndex !== -1) {
        state.cart[sameMenuIndex].count += 1;
        return;
      }

      state.cart.push(action.payload);
    },
    removeMenuToCart: (state, action) => {
      const id = action.payload;

      state.cart = state.cart.filter((menu) => menu.id !== id);
    },
    reduceMenuToCart: (state, action) => {
      const { id } = action.payload;
      const sameMenuIndex = state.cart.findIndex(
        (menu) => menu.id === id && menu.count > 1
      );

      if (sameMenuIndex !== -1) {
        state.cart[sameMenuIndex].count -= 1;
        return;
      }

      state.cart = state.cart.filter((menu) => menu.id !== id);
    },
    removeAllMenuToCart: (state) => {
      state.cart = [];
    },
    orderMenuListInCart: (state) => {
      state.order.push(...state.cart);
      state.cart = [];
    },
  },
});

export const {
  addMenuToCart,
  removeMenuToCart,
  reduceMenuToCart,
  removeAllMenuToCart,
  orderMenuListInCart,
} = menuSlice.actions;

export default menuSlice.reducer;
