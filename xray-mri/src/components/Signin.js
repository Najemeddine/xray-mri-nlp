import React from "react";
import { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import { Link } from "react-router-dom";
export default class Signin extends Component {
  render(){
  return (
    <Container>
      <Form>
        <h2>Welcome Back!</h2>
        <h2>Please login to your account</h2>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button>Sign In</button>
        
      </Form>
      <div>
      <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          You dont have an account? <span><StyledLink to={"/signup"}>Sign UP</StyledLink></span>
        </h4>
      </div>
    </Container>
  );
}
};
const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #666666;
    font-family:Snell Roundhand, cursive;//Didot, serif;
    margin-bottom: 2rem;
  }
  
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(5px);
  //background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
