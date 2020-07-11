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
          First, let’s get a better idea of what we’re working with:
          <b> your mind</b>.
        </Typography>
        <br />
        <Typography gutterBottom>
          The human mind (<i>your</i> mind) is the most powerful supercomputer
          that we know of. When you dream at night, it casually creates entire
          new worlds and realities— and that’s just while you’re sleeping.
        </Typography>
        <br />
        <Typography gutterBottom>
          It also creates your “normal” reality when you’re awake. Most
          importantly, it wants to keep you safe. That's a big job, and it got
          you this far.
        </Typography>
      </div>
    </section>
  );
}
