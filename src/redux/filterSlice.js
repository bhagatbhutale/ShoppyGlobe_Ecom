import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "All",
};

// filter a products from seaarching a search bar in nav 
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
