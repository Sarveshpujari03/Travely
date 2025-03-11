import { createSlice } from "@reduxjs/toolkit";
import {profileData} from '../API/Index'

const initialState = {
    displayName : '',
    cookies : false,
    isLoggedIn : false
}

const authSlice = createSlice({

    name : 'user',
    initialState,
    reducers : {
        setUser : (state,action) => {
            state.displayName = action.payload.displayName;
            state.cookies = action.payload.cookies;
        },

        getUser : (state) => {
            profileData().then((res) => {
                state.displayName = res.data.displayName;
                state.cookies = true;
                state.isLoggedIn = true;
            }).catch((err) => {
                console.log(err);
                state.isLoggedIn = false;
            });
        }
    }

})

export const {setUser,getUser} = authSlice.actions;

export default authSlice.reducer;