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
    },
    image: {
     // backgroundImage: `url("../images/3-goals.png")`,
      maxHeight: "100%",
      maxWidth: "100%"
    },
  });
  const classes = useStyles();
  return (
    <section className={classes.background} style={{ padding: "0px" }}>
      <div className={classes.content}>
        {" "}
        <Typography gutterBottom>
          Today, the world is much different. We're safe from wild animals. We
          have clean drinking water on tap, and access to all human knowledge in
          our pocket, through the internet.
        </Typography>
        <br />
        <Typography gutterBottom>
          Instead of worrying about wild predators, your goals today might be
          more like:
        </Typography>
        <br />
        <div   style={{objectFit: "cover"}}>
        <img src={"../images/3-goals.png"} className={classes.image} />
        </div>
        <Typography gutterBottom></Typography>
        <br />
        <Typography gutterBottom></Typography>
      </div>
    </section>
  );
}
