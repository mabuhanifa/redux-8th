import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "All",
  colors: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterBy } = filterSlice.actions;
