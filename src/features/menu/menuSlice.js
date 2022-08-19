import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = {
  menu: { ...mockData },
  bill: [],
  activeSubCategory: "",
  activeCategory: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
    removeMenu: (state, action) => {
      // state.bill = state.bill.filter((menu) => menu.id !== action.payload)
    },
  },
});

export const { selectSubCategory } = menuSlice.actions;

export default menuSlice.reducer;
