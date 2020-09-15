import React from "react";

import UserBio from "./UserBio";
import Error from "./Error";
import Insights from "./Insights";
import Status from "./Loading";

import Card from "../../Card/Card.js";
import useVisualMode from "../../../hooks/useVisualMode";
import { makeStyles } from "@material-ui/core/styles";

export default function Bio(props) {
  const USERBIO = "USERBIO";
  const INSIGHTS = "INSIGHTS";
  const LOADING = "LOADING";
  // const EDIT = "EDIT";
  const DENIED = "DENIED";
  const ERROR = "ERROR";

  const level = props.level;
  const { mode, transition, back } = useVisualMode(USERBIO);

  const loadInsight = () => {
    props
      .requestInsight(props.userEntries)
      .then(() => {
        transition(INSIGHTS);
      })
      .catch(error => transition(ERROR));
  };

  const useStyles = makeStyles(theme => ({
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
    button: {
      background: "#00A8E0",
      color: "white",
      "&:hover": {
        backgroundColor: "skyBlue",
        color: "#FFF"
      },
      fontWeight: 300,
      fontSize: "1em",
      padding: "0.8em 1.2em"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none",
      textAlign: "center",
      margin: "0px"
    }
  }));
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <section>
        {mode === USERBIO && (
          <UserBio
            bio={props.bio}
            level={level}
            powerEntries={props.powerEntries}
            onClick={() => {
              if (level > 9 && props.powerEntries > 39) {
                transition(LOADING);
                loadInsight();
              } else {
                transition(DENIED);
              }
            }}
          />
        )}

        {mode === DENIED && (
          <Error
            message={
              "Reach level 10 to access your insights! Your points grow as you increase the total word count from all your entries"
            }
            powerEntries={props.powerEntries}
            onCancel={back}
          />
        )}

        {mode === ERROR && <Error onCancel={back} />}

        {mode === LOADING && (
          <Status message={"Loading insights!"} onCancel={back} />
        )}

        {mode === INSIGHTS && (
          <Insights
            insights={props.userInsight}
            onCancel={() => {
              transition(USERBIO);
            }}
          />
        )}
      </section>
    </Card>
  );
}
