import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        isError: false
    },
    reducers: {
        // get all products
        getProductStart: (state) => {
            state.isFetching = true;
            state.isError = false;
        },
        getProductSuccessful: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },

        // delete products
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.isError = false;
        },
        deleteProductSuccessful: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload),
                1
            )
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.isError = true;
        }
    }
})

export const {
    getProductStart,
    getProductSuccessful,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccessful
} = productSlice.actions;
export default productSlice.reducer;
