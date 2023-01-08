import {
    loginStart, 
    loginSuccessful, 
    loginFailure
} from './userRedux';
import {publicRequest} from "../../requestMethod";

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