import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import IconButton from "@material-ui/core/IconButton";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

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
    container: {
      // height: "200px",
      // padding: "10vh",
      // margin: "10vh"
    },
    card: {
      height: "80vh",
      width: "80vh",
      flexGrow: 1,
      backgroundColor: `rgb(235,240,235, 0.6)`
      //padding: "10vh"
    },
    button: {
      height: "70%",
      width: "70%"
    },
    innerCard: {
      height: "100px",
      width: "100%",
      background: "green",
      margin: 0
    },
    typography: {
      fontSize: "2em",
      padding: "1em"
    }
  });
  const classes = useStyles();

  const handleClick = event => {};

  return (
    <div>
      <GridContainer
        className={classes.container}
        justify="center"
        direction="row"
        alignItems="center"
        spacing={1}>
        <Card className={classes.card}>
          <Typography className={classes.typography}>
            How are you feeling today?
          </Typography>
          <GridContainer
            justify="center"
            direction="row"
            alignItems="center"
            spacing={2}>
            <GridItem xs={12} sm={12} md={6}>
              <IconButton
                className={classes.button}
                simple="true"
                onClick={props.back}
                color="primary"
                size="large">
                <SentimentSatisfiedIcon className={classes.button} />
              </IconButton>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <IconButton
                className={classes.button}
                simple="true"
                onClick={props.back}
                color="primary"
                fullWidth="true"
                size="large">
                <SentimentDissatisfiedIcon className={classes.button} />
              </IconButton>
            </GridItem>
          </GridContainer>
        </Card>
      </GridContainer>
    </div>
  );
}
