import React, { useState } from "react";
import Card from "../../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";

export default function Level1(props) {
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
  return (
    <section>
      <br />
      <div>
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true} timeout={100}>
      <img
        src="images/lessons/lesson-7-01.png"
        className={classes.image}
      />
      <img
        src="images/lessons/lesson-7-02.png"
        className={classes.image}
      />
      <img
        src="images/lessons/lesson-7-03.png"
        className={classes.image}
      />
      <img
        src="images/lessons/lesson-7-04.png"
        className={classes.image}
      />
      <img
        src="images/lessons/lesson-7-05.png"
        className={classes.image}
      />

          </Carousel>
      </div>
      <br />{" "}
      <div>
      </div>
    </section>
  );
}
