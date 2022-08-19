import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = {
  menu: { ...mockData },
  bill: [],
  activeSubCategory: "",
  activeCategory: mockData.categories[0],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    selectSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
    addMenu: (state, action) => {
      const sameMenuIndex = state.bill.findIndex((menu) => {
        if (menu.id === action.payload) {
          return true;
        }

        return false;
      });

      if (sameMenuIndex !== -1) {
        state.bill[sameMenuIndex].count += 1;
        return;
      }

      state.bill.push(action.payload);
    },
    removeMenu: (state, action) => {
      state.bill = state.bill.filter((menu) => menu.id !== action.payload);
    },
  },
});

export const { selectCategory, selectSubCategory, addMenu, removeMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
