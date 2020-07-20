import React from 'react';
import Card from "../../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";


export default function Slide8(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      fontWeight: "300",
      flexGrow: 1,
      align: "center",
      fontSize: "1.5em",
      "& small": {
        color: "skyblue"
      }
    },
    button: {
      background: "#00A8E0",
      color: "white",
      "&:hover": {
        backgroundColor: "skyBlue",
        color: "#FFF"
      },
      fontWeight: 300,
      fontSize: "1em",
      padding: "0.8em 1.2em"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    }
  }));
  const classes = useStyles();

  return(
    <Card className={classes.card}>
    <div>
      <img
        src="images/brainsley-08.png"
        style={{
          height: "auto",
          maxWidth: "80vw",
          margin: "auto",
          display: "block",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover"
        }}
      />
    </div>
  </Card>
  )
}