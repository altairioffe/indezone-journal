import "./ComponentStyles/Navbar.scss";

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
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import CardHeader from "./Card/CardHeader.js";
import CardFooter from "./Card/CardFooter.js";
import CustomInput from "./CustomInput/CustomInput.js";

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
  const [loginState, setLoginState] = useState(0);
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
        props.logUser(user.id);
        setUser(user);
        return setLoginState(2);
      } else if (loginState === 1 && !formInput) {
        return setLoginState(1);
      } else {
        return setLoginState(0);
      }
    }
  };

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
            {user && user.handle ? user.handle.slice(1) : "error"}
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

      <Slide direction="left" in={loginState === 4} timeout={500} unmountOnExit>
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


      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                {/*  Start social login */}

                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}>
                      <i className={"fab fa-google-plus-g"} />
                    </Button>
                  </div>
                </CardHeader>

                {/*  END SOCIAL LOGIN */}

                <p className={classes.divider}>Or Be Classical</p>

                <CardBody>
                  <CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>




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
