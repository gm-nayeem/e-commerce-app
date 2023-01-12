// user
import {
    loginStart, 
    loginSuccessful, 
    loginFailure
} from './userRedux';
import {publicRequest, userRequest} from "../../requestMethod";

// product 
import {
    getProductStart,
    getProductSuccessful,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccessful,
    updateProductFailure,
    updateProductStart,
    updateProductSuccessful,
    addProductFailure,
    addProductStart,
    addProductSuccessful

} from './productRedux'


// login
export const login = async (dispatch, user) => {
    // console.log(user);
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);  
        // console.log(res.data);     
        dispatch(loginSuccessful(res.data));
    } catch(err) {
        dispatch(loginFailure());
    }
}

// get product
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products"); 
        // console.log("pro: " + res.data)    
        dispatch(getProductSuccessful(res.data));
    } catch(err) {
        dispatch(getProductFailure());
    }
}

// delete product
export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try{
        // await publicRequest.delete(`/products/${id}`);     
        dispatch(deleteProductSuccessful(id));
    } catch(err) {
        dispatch(deleteProductFailure());
    }
}

// update product
export const updateProduct = async (dispatch, id, product) => {
    dispatch(updateProductStart());
    try{   
        dispatch(updateProductSuccessful({id, product}));
    } catch(err) {
        dispatch(updateProductFailure());
    }
}

// add product
export const addProduct = async (dispatch, product) => {
    dispatch(addProductStart());
    try{   
        const res = await userRequest.post("/products", product)
        console.log("res" + res.data);
        dispatch(addProductSuccessful(res.data));
    } catch(err) {
        dispatch(addProductFailure());
    }
}