// external import
import { useState } from "react";
// import { mobile } from "../responsive";
import {useDispatch} from 'react-redux'
import { login } from "../redux/apiCalls";
import {Link} from 'react-router-dom';
import "./login.css";


const Login = () => {
  const [user, setUser] = useState({username: "", password: ""})
  const {username, password} = user;

  const dispatch = useDispatch();
  // const {isFetching, isError} = useSelector(state => state.admin);

  const userHandler = (e) => {
    setUser(
      {...user, [e.target.name]: e.target.value}
    );
  }

  const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, {username, password});

    setUser({
      username: "",
      password: ""
    });
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginTitle">SIGN IN</h1>
        <form className="loginForm">
          <input placeholder="username" value={username} name="username" 
            required onChange={userHandler}        
          />
          <input placeholder="password" type="password" name="password" value={password} 
            required onChange={userHandler} 
          />
          <button className="loginButton" onClick={handleClick}>
            LOGIN
          </button>
          {/* {
            isError && <p className="loginFormError">Something went wrong...</p>
          } */}
          <Link className="link">
            <p className="loginFormLink">DO NOT YOU REMEMBER THE PASSWORD?</p>
          </Link>
          <Link className="link">
            <p className="loginFormLink">CREATE A NEW ACCOUNT</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
