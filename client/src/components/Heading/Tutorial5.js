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
          Today, we live in a completely different world.
        </Typography>
        <Typography gutterBottom>
          A world where we don't need to worry about getting eaten by a jaguar. One where we have to access to clean drinking water, electricity, and 
          <b> so much information</b>.
        </Typography>
        <br />
        <Typography gutterBottom>
          The human mind (<i>your</i> mind) is the most powerful supercomputer
          that we know of.
        </Typography>
        <br />
        <Typography gutterBottom>
     
        </Typography>
      </div>
    </section>
  );
}
