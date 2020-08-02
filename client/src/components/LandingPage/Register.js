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
    },
    button: {
      color: "#00a8e0",
      fontWeight: 400,
      border: "1px solid #00a8e04d"
    },
    cardHeader: {
      margin: 0
    },
    secondaryButton: {
      color: "#00a8e0",
      fontWeight: 400,
      fontSize: "0.8em",
      margin: "2em 1em"
    },
    inputIconsColor: {
      color: "#00a8e0"
    }
  });
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    firstName: "",
    email: "",
    password: ""
  });
  const [errorColour, setErrorColour] = useState({
    firstName: false,
    email: false,
    password: false
  });
  const [labelText, setLabelText] = useState({
    firstName: "First Name",
    email: "Email",
    password: "Password"
  });

  let styledImage = {};

  const validateEmail = email =>
    email ? email.includes("@") && email.includes(".") : false;

  const validateAndSubmitForm = (firstName, email, password) => {
    let fieldErrors = {
      firstName: false,
      email: false,
      password: false
    };
    if (!firstName || !email || !validateEmail(email) || !password) {
      if (!firstName) {
        fieldErrors.firstName = true;
      }
      if (!email || !validateEmail(email)) {
        fieldErrors.email = true;
        if (email && !validateEmail(email)) {
          setLabelText({
            ...labelText,
            email: 'Must use format "email@example.com"'
          });
        }
      }
      if (!password) {
        fieldErrors.password = true;
      }
      setErrorColour(fieldErrors);
      return false;
    } else {
      props.registrationHandler(
        firstName,
        email,
        password,
        props.loginCallback
      );
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    validateAndSubmitForm(
      credentials.firstName || false,
      credentials.email || false,
      credentials.password || false
    );
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card} style={styledImage}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <CardHeader color="primary">
                <h4 className={classes.cardHeader}>Create an account</h4>
              </CardHeader>

              <p className={classes.divider}></p>

              <CardBody>
                <CustomInput
                  required
                  labelText={labelText.firstName}
                  id="firstName"
                  error={errorColour.firstName}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.firstName,
                    type: "text",
                    onChange: function(e) {
                      setCredentials({
                        firstName: e.target.value,
                        email: credentials.email,
                        password: credentials.password
                      });
                    },

                    endAdornment: (
                      <InputAdornment position="end">
                        <People style={{color: "#00a8e0"}} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText={props.loginError || labelText.email}
                  id="email"
                  required
                  error={props.loginError || errorColour.email}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.email,
                    type: "email",
                    onChange: function(e) {
                      setCredentials({
                        firstName: credentials.firstName,
                        email: e.target.value,
                        password: credentials.password
                      });
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email style={{color: "#00a8e0"}} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText={labelText.password}
                  id="password"
                  required
                  error={errorColour.password}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: function(e) {
                      setCredentials({
                        firstName: credentials.firstName,
                        email: credentials.email,
                        password: e.target.value
                      });
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon style={{color: "#00a8e0"}}>
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
                  className={classes.button}
                  type="submit"
                  simple="true"
                  color="primary"
                  size="large">
                  Start Your Journey
                </Button>
              </CardFooter>
            </form>
            <Button
              className={classes.secondaryButton}
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
