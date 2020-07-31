import React from 'react';
import Card from "../../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";


export default function Slide5(props) {

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
    },
    image: {  
          height: "45vh",
          width: "auto",
          margin: "auto",
          display: "block",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover"
        }
  }));
  const classes = useStyles();

  return(
    <Card className={classes.card}>
    <div>
      <img
        src="images/lesson-2/lesson-2-05.png"
        className={classes.image}

      />
    </div>
  </Card>
  )
}