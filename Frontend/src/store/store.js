import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from '../Slices/AuthneticationSlice.jsx'
import loaderSlice from '../Slices/LoaderSlice.jsx'
import userSlice from '../Slices/userSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    loader : loaderSlice,
    user : userSlice
  },
});
