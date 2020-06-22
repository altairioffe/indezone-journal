import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";

import { Button } from "@material-ui/core";
import useApplicationData from "../../hooks/useApplicationData";

export default function Register(props) {
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

  const [credentials, setCredentials] = useState({ handle: "", email: "", password: "" });
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState({ handle: false, email: false, password: false });
  const [labelText, setLabelText] = useState({ handle: "First Name", email: "Email", password: "Password"});

  let styledImage = {
  };

  const validateEmail = (email) => email ? email.includes("@") : false;

  const validateAndSubmitForm = (handle, email, password) => {
      let invalidatedParams = {
        handle: false,
        email: false,
        password: false
      }
    if (!handle || !email || !validateEmail(email) || !password) {
      if (!handle) {
        invalidatedParams.handle = true
      }
      if (!email || !validateEmail(email)) {
        invalidatedParams.email = true
        if (email && !validateEmail(email)) {
          setLabelText( { ...labelText, email: 'Must include "@"'})
        }
      }
      if (!password) {
        invalidatedParams.password = true
      }
      setErrorMessage(invalidatedParams)
      return false
    } 
    else {
        props.registrationHandler(
      handle,
      email,
      password,
      props.loginCallback
    )
    .then(() => {
      setTimeout(() => console.log("PROPSLOGIN ERROR: ", props.loginError), 3000)
    })
    }
  }

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card} style={styledImage}>
            <form className={classes.form} onSubmit={data => console.log("Form onsubmit useless?: ", data)}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Register</h4>
              </CardHeader>

              <p className={classes.divider}></p>

              <CardBody>
                <CustomInput
                  required
                  labelText={labelText.handle}
                  id="handle"
                  error={errorMessage.handle}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.handle,
                    type: "text",
                    onChange: function(e) {
                      setCredentials({
                        handle: e.target.value,
                        email: credentials.email,
                        password: credentials.password
                      });
                    },
                    
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText={props.loginError || labelText.email}
                  id="email"
                  required
                  error={props.loginError || errorMessage.email}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.email,
                    type: "email",
                    onChange: function(e) {
                      setCredentials({
                        handle: credentials.handle,
                        email: e.target.value,
                        password: credentials.password
                      });
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText={labelText.password}
                  id="password"
                  required
                  error={errorMessage.password}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: function(e) {
                      setCredentials({
                        handle: credentials.handle,
                        email: credentials.email,
                        password: e.target.value
                      });
                    },
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
                <Button
                  onClick={() =>
                    Promise.resolve(
                    validateAndSubmitForm(credentials.handle || false, credentials.email || false, credentials.password || false)
                    )
                    .then(() => props.loginError ? console.log("THEN LoginError: ". props.loginError) : console.log("apparently no error.."))
                    .catch(err => console.log(err))
                  }
                  simple="true"
                  color="primary"
                  size="large">
                  Start Your Journey
                </Button>
              </CardFooter>
            </form>
            <Button
              simple="true"
              onClick={props.back}
              color="primary"
              size="small">
              Already have an account? Login
            </Button>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
