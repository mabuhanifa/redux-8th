import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "All",
  colors: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.filters = action.payload;
    },
    addColor: (state, action) => {
      state.colors.push(action.payload);
    },
    removeColor: (state, action) => {
      state.colors = state.colors.filter((c) => c.colors === action.payload);
    },
  },
});

export default filterSlice.reducer;
export const { filterBy, addColor, removeColor } = filterSlice.actions;
