import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice"
import cartReducer from "./cartSlice"
const store = configureStore({
  reducer: {
    // search
    search: searchReducer,
    // filter category wise
    filter : filterReducer,
    // cart product
    cart : cartReducer
  },
});

export default store;
