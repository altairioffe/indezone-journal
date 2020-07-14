import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../LandingPage/LandingImage/bg-pink-sky.jpg";

export default function Tutorial4(props) {
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
          Even a modern supercomputer that still runs on Windows 95 won’t feel
          like much of a supercomputer, because it only runs old programs that
          aren’t very helpful anymore.
        </Typography>
        <br />
        <Typography gutterBottom>
          In the same way, our brain is still trying to update its operating
          system to catch up to our new lifestyle and connection to the
          internet.
        </Typography>
        <br />
        <Typography gutterBottom>
          It still runs thousands of old programs on autopilot that used to be
          helpful but are now counter-productive. Instead of “Danger! A tiger is
          chasing me!”, it's “Danger! Did I reply to my co-worker's email?!"
        </Typography>
      </div>
    </section>
  );
}
