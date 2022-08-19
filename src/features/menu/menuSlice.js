import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = {
  menu: { ...mockData },
  order: [],
  bill: [],
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
    orderMenuList: (state) => {
      state.order = [...state.cart];
      state.cart = [];
    },
  },
});

export const {
  addMenuToCart,
  removeMenuToCart,
  removeAllMenuToCart,
  orderMenuList,
} = menuSlice.actions;

export default menuSlice.reducer;
