import "../../ComponentStyles/Navbar.scss";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Grow,
  Box,
  Container,
  Slide,
  Collapse,
  Grid,
  Card,
  CardMedia
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
      flexGrow: 1,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px"
    }
  });
  const classes = useStyles();
  // Here are the states to keep track of login process
  const [loginState, setLoginState] = useState(1);
  const [loginEmail, setLoginEmail] = useState(null);
  const [loginPassword, setLoginPassword] = useState(null);
  const [user, setUser] = useState(props.user);
  /* 
    State 0: Logged out, prompt to register
    State 1: Logged out, prompt to log in
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  const renderUserDashboard = () => setLoginState(2);

  const logout = () => {
    setUser(null);
    setLoginState(1);
    props.logoutUser();
  };

  return (
    <Box >
      <Grid
        container
        direction="row"
        justify="space-between"
      >
      <Grid item  >
       <img src="images/indezone.png" max-height="2vh" height="20vh"/>
      </Grid>
       {props.user && (<Grid item xs={4}>
             <Grid
        container
        direction="column"
        >
        <Grid item  >
      <Grow in={loginState === 2} timeout={500} unmountOnExit>
        <span>
          Welcome, <strong>{props.user ? props.user.handle : "error"}.</strong> Your score:  <strong style={{color: "#00A8E0"}}>{props.level}</strong>
        </span>
      </Grow>
      </Grid>
      <Grid item justify="flex-end" >
            <Grow in={loginState === 2} timeout={500} unmountOnExit>
        <Button
          onClick={() => logout()}
          size="medium"
          style={{textTransform: "none"}}
        >
          | Logout |
        </Button>
      </Grow>
      </Grid>
      </Grid>
      </Grid>
      )}
              {/* LOGOUT */}

      
      
    </Grid>
      
      {/* REGISTRATION */}
      {props.user === null && (
        <Collapse
          direction="left"
          in={loginState === 0}
          timeout={500}
          unmountOnExit>
          <Register
            registrationHandler={props.registrationHandler}
            loginCallback={renderUserDashboard}
            back={() => setLoginState(1)}
          />
        </Collapse>
      )}

      {/* LOGIN */}
      {props.user === null && (
        <Collapse
          direction="left"
          in={loginState === 1}
          timeout={500}
          unmountOnExit>
          <Login
            loginHandler={props.loginHandler}
            loginCallback={renderUserDashboard}
            back={() => setLoginState(0)}
          />
        </Collapse>
      )}

      <div></div>


    </Box>
  );
}
