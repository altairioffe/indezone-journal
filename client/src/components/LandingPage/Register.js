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

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [userName, setUserName] = useState("");

  let styledImage = {
    //  backgroundImage: `url(${'images/logout-image2.png'})`
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card} style={styledImage}>
            <form className={classes.form} onSubmit={data => console.log(data)}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Register</h4>
              </CardHeader>

              <p className={classes.divider}></p>

              <CardBody>
                <CustomInput
                  disabled={false}
                  required={true}
                  labelText="First Name..."
                  id="handle"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: function(e) {
                      setUserName(e.target.value);
                    },
                    value: userName,
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
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
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
                    props.registrationHandler(
                      userName,
                      credentials.email,
                      credentials.password,
                      props.loginCallback
                    )
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
