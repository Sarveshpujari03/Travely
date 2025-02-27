import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userlogin } from '../API/Index';

export const createUser = createAsyncThunk( 'createUser' ,async (data,formState) => {
    console.log(data);
    
    if(formState){

        const backendData = {
            displayName : data.name,
            password : data.password,
        }

        const res = await userlogin(backendData);
        console.log(res);
        
        return res.data
    }

})

const initialState = {
    user : null,
    isLoading : false,
    isError : false,
    isSuccess : false,
}

const authenticationSlice = createSlice({
    name : 'auth',
    initialState,
    
    extraReducers : (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(createUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }

});

export const {  } = authenticationSlice.actions;

export default authenticationSlice.reducer;