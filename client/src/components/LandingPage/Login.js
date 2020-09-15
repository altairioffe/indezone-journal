import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: false,
    password: false
  });

  const [labelText, setLabelText] = useState({
    email: "Email",
    password: "Password"
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

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
    typography: {
      padding: "1em"
    },
    card: {
      backgroundColor: "rgb(255,255,255, 0.8)"
    },
    cardHeader: {
      margin: 0
    },
    button: {
      color: "#00a8e0",
      fontWeight: 400,
      border: "1px solid #00a8e04d"
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

  const validateEmail = email =>
    email ? email.includes("@") && email.includes(".") : false;

  const handleSubmit = event => {
    event.preventDefault();
    validateAndSubmitForm(credentials.email, credentials.password);
    if (
      credentials.email &&
      validateEmail(credentials.email) &&
      credentials.password
    ) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    props.resetLoginError();
    setLabelText({
      email: "Email",
      password: "Password"
    });
    setErrorMessage({ email: false, password: false });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const validateAndSubmitForm = (email, password) => {
    if (!email && !password) {
      setErrorMessage({ email: true, password: true });
    } else if (!email || !validateEmail(email)) {
      setErrorMessage({ email: true, password: errorMessage.password });
      if (email && !validateEmail(email)) {
        setLabelText({
          email: 'Must use format "email@example.com"',
          password: labelText.password
        });
      }
    } else if (!password) {
      setErrorMessage({ email: errorMessage.email, password: true });
    }
    if (validateEmail(email) && password) {
      props.loginHandler(email, password, props.loginCallback);
    }
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <CardHeader color="primary">
                <h4 className={classes.cardHeader}>Log In</h4>
              </CardHeader>

              <p className={classes.divider}></p>

              <CardBody>
                <CustomInput
                  labelText={labelText.email}
                  id="email"
                  required
                  error={errorMessage.email}
                  formControlProps={{
                    required: true,
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.email,
                    type: "email",
                    onChange: function(e) {
                      setCredentials({
                        email: e.target.value,
                        password: credentials.password
                      });
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email style={{ color: "#00a8e0" }} />
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
                        email: credentials.email,
                        password: e.target.value
                      });
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon style={{ color: "#00a8e0" }}>lock_outline</Icon>
                      </InputAdornment>
                    )
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
                  Continue Your Journey
                </Button>
                {props.loginError && (
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}>
                    <Typography className={classes.typography}>
                      {"invalid email or password"}
                    </Typography>
                  </Popover>
                )}
              </CardFooter>
            </form>
            <Button
              className={classes.secondaryButton}
              simple="true"
              onClick={props.back}
              size="small">
              Dont have an account yet? Create one!
            </Button>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
