import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: {},
  order: [],
  cart: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getMenuList: (state, action) => {
      state.menu = { ...action.payload };
    },
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
    orderOptions: (state, action) => {
      state.order.push(action.payload);
    },
  },
});

export const {
  getMenuList,
  addMenuToCart,
  removeMenuToCart,
  reduceMenuToCart,
  removeAllMenuToCart,
  orderMenuListInCart,
  orderOptions,
} = menuSlice.actions;

export default menuSlice.reducer;
