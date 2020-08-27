import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Insights(props) {
  // Define Styles
  const useStyles = makeStyles({
    button: {
      background: "#00A8E0",
      color: "white",
      "&:hover": {
        backgroundColor: "skyBlue",
        color: "#FFF"
      },
      fontWeight: 300,
      fontSize: "1em",
      padding: "0.5em 2em"
    },
    text: {
      fontWeight: 200,
      padding: "2em"
    }
  });
  const classes = useStyles();

  return (
    <article className={classes.text}>
      <h2> From your answers, it is likely that: </h2>
      <p style={{ margin: "1em" }}>{props.insights}</p>
      <h6>
        Do you agree? Does this seem to align with your goals, or would some changes help you achieve them?
      </h6>

      <Button
        className={classes.button}
        onClick={props.onCancel}
        disabled={props.disabled}>
        BACK
      </Button>
    </article>
  );
}
