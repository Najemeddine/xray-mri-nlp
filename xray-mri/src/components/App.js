import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.jpg";
import Signup from "./Signup";
import Signin from "./Signin";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (<Router>
    <Container>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Signin} /> 
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Main />
      </Wrapper>
    </Container>
    </Router>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  opacity: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
