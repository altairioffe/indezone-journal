import "../../ComponentStyles/Navbar.scss";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Grow,
  Box,
  Container,
  Slide
} from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Register from "./Register.js";
import Login from "./Login.js";
// import styles from "assets/jss/material-kit-react/views/loginPage.js";

//////

export default function Navbar(props) {
  // Define Styles

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: "none !important",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px"
    }
  });
  const classes = useStyles();
  // Here are the states to keep track of login process
  const [loginState, setLoginState] = useState(4);
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [user, setUser] = useState(props.user);
  /* 
    State 0: Initial Login
      Login, Register, Email Field 
    State 1: Enter Password for Login
      Login, Back, Password Field
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  // Validate password or email and adjust state accordingly
  const login = formInput => {
    if (formInput && loginState === 0) {
      const validate = [...props.users].find(user => {
        return user.email === formInput.trim();
      });

      if (validate) {
        setUser(validate);
        setLoginState(1);
        return;
      } else return;
    } else {
      if (formInput && loginState === 1 && user.password === formInput.trim()) {
        console.log("Logged In User: ", user);
        props.logInUser(user.id);
        setUser(user);
        return setLoginState(2);
      } else if (loginState === 1 && !formInput) {
        return setLoginState(1);
      } else {
        return setLoginState(0);
      }
    }
  };


  const loginAfterRegister = id =>{
    if (id) {
       props.loginUser(id)
    return setLoginState(2)
    }
  }

  const logout = () => {
    setUser(null);
    setLoginState(0);
    props.logoutUser();
  };



  return (
    <Box alignitems="center">
      <Container alignitems="center">
        <img src="images/indezone.png" alt="INDEZONE" />
      </Container>
      <Slide
        in={loginState === 0 || loginState === 1}
        timeout={500}
        unmountOnExit
        direction="right">
        <Button
          onClick={() => {
            loginState === 0 ? login(loginEmail) : login(loginPassword);
          }}
          variant="contained"
          color="primary"
          size="large"
          className={classes.root}>
          Login
        </Button>
      </Slide>
      <Grow in={loginState === 2} timeout={500} unmountOnExit>
        <span>
          Welcome{" "}
          <strong>
            {user && user.handle ? user.handle : "error"}
          </strong>
        </span>
      </Grow>
      <Grow in={loginState === 0} unmountOnExit timeout={500}>
        <TextField
          id="outlined-basic"
          name="emailInput"
          label="Enter Email"
          variant="outlined"
          color="primary"
          autoFocus={true}
          placeholder="example@email.com"
          type="email"
          loginEmail={props.loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
        />
      </Grow>

      <Grow in={loginState === 1} timeout={500} unmountOnExit>
        <TextField
          id="outlined-basic"
          name="passwordInput"
          label="Enter Password"
          variant="outlined"
          color="primary"
          autoFocus={true}
          placeholder=""
          type="password"
          onChange={e => setLoginPassword(e.target.value)}
        />
      </Grow>

      <Grow in={loginState === 1} timeout={500} unmountOnExit>
        <Button
          onClick={() => setLoginState(loginState - 1)}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}>
          Back
        </Button>
      </Grow>

      <Slide direction="left" in={loginState === 0} timeout={500} unmountOnExit>
        <Button
          onClick={() => setLoginState(4)}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}>
          Register
        </Button>
      </Slide>

      {/* REGISTRATION */}
      {props.user === null && (
      <Grow direction="left" in={loginState === 4} timeout={500} unmountOnExit>
        <Register 
        registrationHandler={props.registrationHandler}
        loginCallback={props.logInUser}
        back={()=>setLoginState(0)}/>
      </Grow>
      )}

      {/* LOGIN */}
      {props.user === null && (
      <Grow direction="left" in={loginState === 4} timeout={500} unmountOnExit>
        <Login 
        loginHandler={props.loginHandler}
        loginCallback={x => console.log(x)}
        back={()=>setLoginState(0)}/>
      </Grow>
      )}


      <div></div>

      {/* LOGOUT */}

      <Grow in={loginState === 2} timeout={500} unmountOnExit>
        <Button
          onClick={() => logout()}
          variant="outlined"
          color="primary"
          size="large"
          className={classes.root}>
          Logout
        </Button>
      </Grow>
    </Box>
  );
}
