import { createSlice } from "@reduxjs/toolkit";

import mockData from "../../mock.json";

const initialState = { menu: { ...mockData }, bill: {} };

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
