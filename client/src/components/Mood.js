import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import CardHeader from "./Card/CardHeader.js";
import CardFooter from "./Card/CardFooter.js";
import CustomInput from "./CustomInput/CustomInput.js";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    email: false,
    password: false
  });



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
      padding: "1em",
    },
  });
  const classes = useStyles();



  const handleClick = event => {

  };


  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card}>
      
            <Button
              simple="true"
              onClick={props.back}
              color="primary"
              size="small"
              fontWeight="bold">
              Dont have an account yet? Create one!
            </Button>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
