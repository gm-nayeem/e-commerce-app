import {
    loginStart, 
    loginSuccessful, 
    loginFailure, 
    registerSuccessful
} from './userRedux';
import {publicRequest} from "../requestMethod";

// register
export const register = async (dispatch, user) => {
    try{
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccessful(res.data));
    } catch(err) {
        console.log(err.message);
    }
}

// login
export const login = async (dispatch, user) => {
    // console.log(user);
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);       
        dispatch(loginSuccessful(res.data));
    } catch(err) {
        dispatch(loginFailure());
    }
}

// add cart
// export const addProduct = async (product, dispatch) => {
//     dispatch(addProductStart());
//     try {
//       const res = await userRequest.post(`/products`, product);
//       dispatch(addProductSuccess(res.data));
//     } catch (err) {
//       dispatch(addProductFailure());
//     }
// };