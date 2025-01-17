// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Example reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});
