import React, { useState } from "react";
import Insight from "./Insight/Index";
import Resource from "./Resources/Index";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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
    <main>
      <Card className={classes.card}>
        {renderReward === false && (
          <>
            <IconButton
              className={classes.button}
              onClick={() => setRenderReward(true)}
              simple="true"
              size="large">
              <img
                src={"../images/professor-brain.svg"}
                className={classes.image}
              />
            </IconButton>
            <Typography>Consult Professor Brainsley</Typography>
          </>
        )}
        {renderReward === true && (
          <Card className={classes.mainCard}>

            <Resource level={1} user={props.user} />

            <Insight
              bio={props.bio}
              level={props.level}
              requestInsight={props.requestInsight}
              currentUserGoals={props.currentUserGoals}
              userInsight={props.currentUserInsight}
            />

            <Button
              className={classes.button}
              onClick={() => setRenderReward(false)}
              disabled={props.disabled}>
              Got it!
            </Button>
          </Card>
        )}
      </Card>
    </main>
  );
}
