import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../LandingPage/LandingImage/bg-pink-sky.jpg";

export default function Tutorial2(props) {
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
      padding: "20px",
    },
    list: {
      marginBottom: "10px",
      marginLeft: '-10px'
    },
  });
  const classes = useStyles();
  return (
    <section className={classes.background} style={{ padding: "0px" }}>
      <div className={classes.content}>
        <Typography gutterBottom>Let’s get started!</Typography>
        <Typography gutterBottom>
          With regular use, this app is designed to help increase your:
        </Typography>
        <Typography gutterBottom>
          <ul className={classes.list}>
            <li style={{marginBottom: "10px"}}>Focus around your goals</li>
            <li style={{marginBottom: "10px"}}>
              Awareness of automatic thoughts or feelings that might be
              holding you back
            </li>
            <li style={{marginBottom: "10px"}}> Control over your own thoughts and feelings </li>
            <li style={{marginBottom: "10px"}}> Self-compassion and gratitude</li>
            <li style={{marginBottom: "10px"}}>
              Awareness of your values so you can prioritze your goals and direct
              your energy towards achieving them
            </li>
            <li style={{marginBottom: "10px"}}>
              Deep insight into who you are, so that you can make changes
              towards the person you want to be
            </li>
          </ul>
        </Typography>
        <Typography gutterBottom></Typography>
      </div>
    </section>
  );
}
