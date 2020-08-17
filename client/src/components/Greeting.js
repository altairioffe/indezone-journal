import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Greeting(props) {
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
    }
  });
  const classes = useStyles();
  return (
    <section style={{ marginTop: "-80px", display: "inlineBlock" }}>
      <span>
        {props.timeOfDay === "morning" && (
          <h2 className={classes.root}>
            Take A Moment To Start Your Day With Purpose
          </h2>
        )}
        {props.timeOfDay === "evening" && (
          <h2 className={classes.root}>Take A Moment To Reflect & Learn</h2>
        )}
      </span>
    </section>
  );
}
