import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        registerUser: null,
        loginUser: null,
        isFetching: false,
        isError: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccessful: (state, action) => {
            state.isFetching = false;
            state.loginUser = action.payload;
            state.isError = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        registerSuccessful: (state, action) => {
            state.registerUser = action.payload;
        }
    }
})

export const {
    loginStart, 
    loginSuccessful, 
    loginFailure,
    registerSuccessful
} = userSlice.actions;
export default userSlice.reducer;
