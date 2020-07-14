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
        <br />
        <Typography gutterBottom>
          But our brain is still hard-wired with thousands of 
        </Typography>
        <br />
        <Typography gutterBottom>
          Now, imagine a modern supercomputer, but it still runs on Windows 95. If it mostly runs old programs that
          are no longer helpful, it wouldn't feel like much of a supercomputer, would it?
          
        </Typography>
        <Typography gutterBottom>
          But the brain can be re-wired, and the mind can be updated.
        </Typography>
      </div>
    </section>
  );
}
