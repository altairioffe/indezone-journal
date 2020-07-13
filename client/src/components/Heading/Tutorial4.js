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
      <Typography gutterBottom>
          Your mind also creates your “normal” reality when you’re awake, where its main job is to keep you safe.
        </Typography>
        <br />
        <Typography gutterBottom>
          But the human brain in its current form was created thousands of years ago, when our main goals were:
          <ul>
            <li>Don't get eaten</li>
            <li>Don't get kicked out of the tribe</li>
            </ul>
        </Typography>
        <br />
        <Typography gutterBottom>
          
        </Typography>
        <br />
        <Typography gutterBottom>

        </Typography>
      </div>
    </section>
  );
}
