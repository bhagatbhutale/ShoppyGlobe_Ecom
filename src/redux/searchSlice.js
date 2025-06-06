import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    category : "All"
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
// category wise search
    setCategory(state,action) {
        state.category = action.payload
    }
  },
});

export const { setSearchTerm , setCategory } = searchSlice.actions;
export default searchSlice.reducer;
