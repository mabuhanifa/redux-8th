import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.filters = action.payload;
    },
    editInActive: (state) => {
      state.filters = {};
    },
    filterBy: (state, action) => {
      state.filters = action.payload;
    },
    searchBy: (state, action) => {
      state.filters = action.payload;
    },
    clearAll: (state, action) => {
      state.filters = "All";
      state.filters = "All";
    },
  },
});

export default filterSlice.reducer;
export const { editActive, editInActive, filterBy, searchBy, clearAll } =
  filterSlice.actions;
