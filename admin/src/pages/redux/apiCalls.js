// user
import {
    loginStart, 
    loginSuccessful, 
    loginFailure
} from './userRedux';
import {publicRequest} from "../../requestMethod";

// product 
import {
    getProductStart,
    getProductSuccessful,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccessful
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