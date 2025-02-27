import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from '../Slices/AuthneticationSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer
  },
});
