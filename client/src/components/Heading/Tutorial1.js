import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../LandingPage/LandingImage/bg-pink-sky.jpg";

export default function Tutorial1(props) {
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
      height: "100%",
      width: "auto",
      padding: "0px"
    },
    content: {
      textAlign: "center",
      padding: "40px",
      height: "50vh"
    }
  });
  const classes = useStyles();

  return (
    <section className={classes.background} style={{padding:"0px"}}>
      <div className={classes.content}>
      <br/>
      <Typography variant="h6" gutterBottom>
        Welcome to Indezone Journal.
      </Typography>
      <br/>
      <br/>
      <Typography gutterBottom>
        We’re going to show you a superpower that you might not know you had:
      </Typography>
      <br/>
      <br/>
      <br/>
      <Typography variant="h5" gutterBottom>
        what your mind is capable of.
      </Typography>
    </div>
    </section>
  );
}
