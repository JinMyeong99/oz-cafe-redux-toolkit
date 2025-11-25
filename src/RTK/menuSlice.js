import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {},
});
