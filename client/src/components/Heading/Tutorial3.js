import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../LandingPage/LandingImage/bg-pink-sky.jpg";

export default function Tutorial3(props) {
  const useStyles = makeStyles({
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
    background: {
      backgroundImage: `url(${Background})`,
      alt: "text",
      backgroundSize: "cover",
      padding: "0px"
    },
    content: {
      padding: "20px"
    },
    list: {
      marginBottom: "10px",
      marginLeft: "-10px"
    }
  });
  const classes = useStyles();
  return (
    <section className={classes.background} style={{ padding: "0px" }}>
      <div className={classes.content}>
        {" "}
        <Typography gutterBottom>
        We’ll use a special kind of journaling to expand your awareness.
        </Typography>
        <br />
        <Typography gutterBottom>
        We provide carefully-selected questions, ones often used by psychologists and high-performance coaches, so you always have something to write about

        </Typography>
        <br />
        <Typography gutterBottom>
        It’s easy to get started, and you’ll be introduced to more advanced techniques (and more questions) as you make progress
        </Typography>
        <br />
        <Typography gutterBottom>
        </Typography>
        <br />

      </div>
    </section>
  );
}
