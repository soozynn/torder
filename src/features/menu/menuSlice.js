import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = {
  menu: { ...mockData },
  order: [],
  cart: [],
  // activeSubCategory: "",
  // activeCategory: mockData.categories[0],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // selectCategory: (state, action) => {
    //   state.activeCategory = action.payload;
    // },
    // selectSubCategory: (state, action) => {
    //   state.activeSubCategory = action.payload;
    // },
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
      state.cart = state.cart.filter((menu) => menu.id !== action.payload);
    },
    removeAllMenuToCart: (state) => {
      state.cart = [];
    },
    orderMenuList: (state) => {
      state.order = [...state.cart];
    },
  },
});

export const {
  // selectCategory,
  // selectSubCategory,
  addMenuToCart,
  removeMenuToCart,
  removeAllMenuToCart,
  orderMenuList,
} = menuSlice.actions;

export default menuSlice.reducer;
