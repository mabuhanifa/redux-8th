import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "All",
  colors: [],
  clearAll: false,
  clearCompleted: false,
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
      state.colors = state.colors.filter((c) => c !== action.payload);
    },
    clearAllTodo: (state, action) => {
      state.clearAll = true;
    },
    clearComplete: (state, action) => {
      state.clearCompleted = true;
    },
    reset: (state, action) => {
      state.clearAll = false;
      state.filters = "All";
      state.clearCompleted = false;
    },
  },
});

export default filterSlice.reducer;
export const {
  filterBy,
  addColor,
  removeColor,
  clearAllTodo,
  clearComplete,
  reset,
} = filterSlice.actions;
