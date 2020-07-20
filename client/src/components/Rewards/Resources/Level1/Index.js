import React, { useState } from "react";
import Card from "../../../Card/Card.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
      <br />
      <Typography>Greetings, mind wanderer.</Typography>
      <br />
      <br />
      <Typography>
        Great potential, I see in you. But you have much to learn.
      </Typography>
      <br />
      <Typography>
        Alas, you have no need for a guru until you have begun your journey.
      </Typography>
      <br />
      <br />

      <h2>Level 1 </h2>
      <p>Hi, {props.user}!</p>
      <br />
      <p>This is where you view your rewards.</p>
      <br />{" "}
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
