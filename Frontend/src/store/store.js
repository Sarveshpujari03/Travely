import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from '../Slices/AuthneticationSlice.jsx'
import loaderSlice from '../Slices/LoaderSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    loader : loaderSlice
  },
});
