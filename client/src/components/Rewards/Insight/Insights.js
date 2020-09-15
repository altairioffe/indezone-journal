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
      <h5>
        How does this tie into your goals? Are there changes that you'd like to make?
      </h5>

      <Button
        className={classes.button}
        onClick={props.onCancel}
        disabled={props.disabled}>
        BACK
      </Button>
    </article>
  );
}
