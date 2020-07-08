import React, { useState } from "react";
import Card from "../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";

export default function Level1(props) {
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
      boxShadow: "none"
    }
  }));
  const classes = useStyles();
  return (
    <section>
      <h2>Level 1 </h2>
      <p>Hi, {props.user}!</p>
      <br />
      <p>This is where you view your rewards.</p>
      <br />{" "}
      <p>
        {" "}
        By answering at least one question in your journal each day, you level
        up to reveal a new challenge that will help unlock your brain power.
        Don't break your streak! If you miss one or more days, you drop
        back down by one level.{" "}
      </p>
      <br />{" "}
      <p>
        With each new level, you also earn one additional question slot (below),
        for deeper introspection. Approach the questions with an open mind and
        aim to answer all of them, but spend at least 1-2 minutes on a
        meaningful answer for each.{" "}
      </p>
      <br />{" "}
      <p>
        Write using full sentences, in a tone that feels most natural to you.
        
        Here, you'll find useful techniques and resources to increase your
        brainpower. The first step is developing more control over your
        thoughts, feelings, and actions.
      </p>
      <div>
        <Card className={classes.card}>
          <div>
            <img
              src="images/mindfulnessgraphic.jpg"
              style={{
                height: "auto",
                maxWidth: "80vw",
                margin: "auto",
                display: "block",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover"
              }}
            />
          </div>
        </Card>
      </div>
      <h4> Ready to level up? Make your first entry!</h4>
    </section>
  );
}
