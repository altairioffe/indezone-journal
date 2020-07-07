import React, { useState } from "react";
import Insight from "./Insight/Index";
import Resource from "./Resources/Index";
import { Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import useVisualMode from "../../hooks/useVisualMode";

export default function Rewards(props) {
  // Define Styles
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
    mainCard: {
      backgroundColor: "rgb(235,240,235, 0.5)",
      boxShadow: "none"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    }
  });
  const classes = useStyles();

  /*

- quote

-button (REWARDS)
  onClick: transition mode to display 
    -Back Button
    -get insights button
    -render resource / reward based on user level

  */

  const [renderReward, setRenderReward] = useState(false);

  return (
    <main style={{ marginTop: "-80px"}}>
      <section>
        <h2 className={classes.root}>
          Take A Moment To Start Your Day With Purpose
        </h2>
        <br />
      </section>
      <Card className={classes.card}>

        {renderReward === false && (
          <Button
            className={classes.button}
            onClick={() => setRenderReward(true)}
            disabled={props.disabled}
            endIcon={
              (props.level >= 600 && <PollIcon />) || <InfoOutlinedIcon />
            }>
            VIEW REWARDS
          </Button>
        )}
        {renderReward === true && (
          <Card className={classes.mainCard}>
            <Insight
              bio={props.bio}
              level={props.level}
              requestInsight={props.requestInsight}
              currentUserGoals={props.currentUserGoals}
              userInsight={props.currentUserInsight}
            />

            <Resource level={1} user={props.user}/>

            <Button
              className={classes.button}
              onClick={() => setRenderReward(false)}
              disabled={props.disabled}>
              Hide Rewards
            </Button>
          </Card>
        )}
      </Card>
    </main>
  );
}
