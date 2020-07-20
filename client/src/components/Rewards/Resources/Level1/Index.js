import React, { useState } from "react";
import Card from "../../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slide1 from "./Slide1.js";
import Slide2 from "./Slide2.js";
import Slide3 from "./Slide3.js";
import Slide4 from "./Slide4.js";
import Slide5 from "./Slide5.js";
import Slide6 from "./Slide6.js";
import Slide7 from "./Slide7.js";
import Slide8 from "./Slide8.js";
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
    }
  }));
  const classes = useStyles();
  return (
    <section>
      <hr/>
      <br />
      <br />
      <br />
      <div>
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true} timeout={100}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
          </Carousel>
      </div>
      <br />{" "}
      <div>
      </div>
    </section>
  );
}
