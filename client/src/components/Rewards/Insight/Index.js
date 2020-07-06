import React, { useState, useEffect } from "react";

import Profile from "./Profile";
import UserBio from "./UserBio";
import Error from "./Error";
import Insights from "./Insights";
import Status from "./Loading";
import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
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
      .requestInsight(props.currentUserGoals)
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
    }
  }));
  const classes = useStyles();
  

  return (
    <main style={{ marginTop: "-80px" }}>

      <section>
        {mode === USERBIO && (
          <UserBio
            bio={props.bio}
            level={level}
            onClick={() => {
              if (level > 600) {
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
              "Reach 600 points to access your insights! Your points grow as you increase the total word count from all your entries"
            }
            onCancel={back}
          />
        )}

        {mode === ERROR && (
          <Error
            message={
              "Unable to load insights! Make sure you are providing enough data for an analysis by writing complete sentences!"
            }
            onCancel={back}
          />
        )}

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
    </main>
  );
}