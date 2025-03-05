import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userlogin, userRegistration } from '../API/Index';

export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    try {
        if(data.setIsSignUpActive){
            console.log(data);
            
            const backendData = {
                displayName: data.name,
                password: data.password,
            };
            const res = await userlogin(backendData);
            
            console.log("Backend Response:", res);
            localStorage.setItem('isLoggedIn', true);
            return res.data;
            
        }

        if(!data.setIsSignUpActive){  
            console.log(data);         
            const backendData = {
                displayName: data.formData.name,
                password: data.formData.password,
                email : data.formData.email
            };
            const res = await userRegistration(backendData);
            
            localStorage.setItem('isLoggedIn', true);
            return res.data;
        }
        
    } catch (error) {
        console.error("Error in AsyncThunk:", error);

        if (error.response) {
            return rejectWithValue(error.response.data?.message || "Server error occurred");
        } else if (error.request) {
            return rejectWithValue("No response from server");
        } else {
            return rejectWithValue(error.message || "Unexpected error occurred");
        }
    }
});


const initialState = {
    user: null,
    isLoading: false,
    isError: "", 
    isSuccess: false,
};

const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
            state.isSuccess = false;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            console.error("Rejected Action Payload:", action.payload);
            state.isLoading = false;
            state.isError = action.payload || "An error occurred"; 
        });
    }
});

export default authenticationSlice.reducer;