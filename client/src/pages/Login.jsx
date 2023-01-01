// external import
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useDispatch} from 'react-redux'
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../images/login.webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: #0F69C3;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [user, setUser] = useState({username: "", password: ""})
  const {username, password} = user;

  const dispatch = useDispatch();

  const userHandler = (e) => {
    setUser(
      {...user, [e.target.name]: e.target.value}
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(user);

    login(dispatch, user);

    setUser({
      username: "",
      password: ""
    });
  }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" value={username} name="username"
            onChange={userHandler} required       
          />
          <Input placeholder="password" type="password" name="password" value={password} 
            onChange={userHandler} required
          />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
