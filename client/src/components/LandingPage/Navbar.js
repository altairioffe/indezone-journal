import "../../ComponentStyles/Navbar.scss";

import React, { useState } from "react";
import {
  Button,
  Box,
  Container,
  Collapse,
  Grid,
  AppBar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Register from "./Register.js";
import Login from "./Login.js";
import Tutorial from "../Tutorial.js";

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
      padding: "0",
      margin: "0"
    },
    navBar: {
      height: "40vh",
      display: "flex",
      width: "200%",
      flexDirection: "row",
      marginBottom: "-10vh"
    },
    title: {
      color: "gray",
      fontSize: "1em",
      flexDirection: "row",
      justify: "flex-end"
    }
  });
  const classes = useStyles();

  const [loginState, setLoginState] = useState((props.user && 2) || 0);
  /* 
    Login states:
    State 0: Logged out, prompt to register
    State 1: Logged out, prompt to log in
    State 2: Welcome Logged in User
      Logout, Welcome User
  */

  const renderUserDashboard = () => setLoginState(2);

  const logout = () => {
    setLoginState(1);
    props.logoutUser();
  };

  return (
    // Navbar
    <div>
      <AppBar
        className="navBar"
        position="sticky"
        color="transparent"
        elevation={0}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start">
          <Grid item xs={6}>
            <Box
              pt={0}
              m={0}
              bgcolor="none"
              style={{ height: "100%", width: "100%", maxWidth: "20vh" }}>
              <img
                src="images/indezone.png"
                height="100%"
                width="100%"
                alt="indezone"
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            {props.user && (
              <Grid item>
                <Container
                  bgcolor="yellow"
                  p={0}
                  m={0}
                  style={{ padding: "0", margin: "0" }}>
                  <Grid item mr="0">
                    <Typography
                      variant="body2"
                      style={{ color: "gray" }}
                      className={classes.title}
                      align="right">
                      Welcome,{" "}
                      <strong>
                        {props.user ? props.user.handle : "error"}.
                      </strong>{" "}
                      Level:{" "}
                      <strong style={{ color: "#00A8E0" }}>
                        {props.level}
                      </strong>
                    </Typography>
                  </Grid>

                  <Grid item mr="0">
                    <Box
                      display="flex"
                      p={0}
                      m={0}
                      bgcolor="none"
                      justifyContent="flex-end">
                      {props.renderMainPage && <Tutorial level={props.level} />}
                      <Button
                        onClick={() => logout()}
                        size="medium"
                        style={{ textTransform: "none", padding: "0" }}>
                        Logout
                      </Button>
                    </Box>
                  </Grid>
                </Container>
              </Grid>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <Box mt="20vh">
        
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
              loginError={props.loginError}
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
              loginError={props.loginError}
              resetLoginError={props.resetLoginError}
            />
          </Collapse>
        )}

        <div></div>
      </Box>
    </div>
  );
}
