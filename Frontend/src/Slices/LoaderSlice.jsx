import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLoading : false,
    isError : false,
    isSuccess : false,
    data : null
}

const loaderSlice = createSlice({

    name : 'loader',
    initialState,
    reducers : {

        startLoading : (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        },
        stopLoading : (state) => {
            state.isLoading = false;
        },
        success : (state,action) => {
            state.isSuccess = true;
            state.data = action.payload;
        },
        error : (state) => {
            state.isError = true;
        }
    }

})

export const { startLoading, stopLoading, success, error } = loaderSlice.actions;

export default loaderSlice.reducer;