import React from "react";

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

import {
  Button,
  TextField,
  Grow,
  Box,
  Container,
  Slide
} from "@material-ui/core";

{
  /* REGISTRATION */
}

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

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <form className={classes.form} onSubmit={()=>console.log("FROM REGISTER COMPONENT")} >
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Register</h4>
              </CardHeader>

              <p className={classes.divider}></p>

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
                <Button simple="true" color="primary" size="large">
                  Start Your Journey
                </Button>
              </CardFooter>
            </form>
          <Button simple="true" onClick={props.back} color="primary" size="small" fontWeight="bold">
            Return to Login
          </Button>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
