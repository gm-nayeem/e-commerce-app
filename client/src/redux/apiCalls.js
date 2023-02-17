import {
    loginStart, 
    loginSuccessful, 
    loginFailure, 
    registerFailure,
    registerStart,
    registerSuccessful
} from './userRedux';
import {publicRequest} from "../requestMethod";

// register
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccessful(res.data));
    } catch(err) {
        dispatch(registerFailure());
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

// add order
// export const addOrder = async (order, dispatch) => {
//     dispatch(addOrderStart());
//     try {
//       const res = await userRequest.post(`/orders`, order);
//       dispatch(addOrderSuccess(res.data));
//     } catch (err) {
//       dispatch(addOrderFailure());
//     }
// };