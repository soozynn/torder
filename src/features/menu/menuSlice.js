import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = { menu: { ...mockData }, bill: {}, activeSubCategory: "" };

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
  },
});

export const { selectSubCategory } = menuSlice.actions;

export default menuSlice.reducer;
