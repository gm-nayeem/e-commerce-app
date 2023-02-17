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
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccessful: (state, action) => {
            state.registerUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        logout: (state) => {
            state.isFetching = false;
            state.loginUser = null;
            state.isError = false;
        }
    }
})

export const {
    loginStart, 
    loginSuccessful, 
    loginFailure,
    registerStart,
    registerSuccessful,
    registerFailure,
    logout
} = userSlice.actions;
export default userSlice.reducer;
