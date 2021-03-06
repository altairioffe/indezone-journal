import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Form from "./Form";

export default function SimpleExpansionPanel(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      backgroundColor: `rgb(240,245,250, 0.8)`,
      "& div": {
        backgroundColor: "inherit"
      }
    },
    finalQuestion: {
      width: "100%",
      backgroundColor: `rgb(235,250,245, 0.8)`,
      "& div": {
        backgroundColor: "inherit"
      }
    },
    heading: {
      "@media (min-width:601px)": {
        fontSize: "1.2rem"
      },
      "@media (max-width:600px)": {
        fontSize: "1.1rem"
      },
      fontWeight: theme.typography.fontWeightLight,
      flexGrow: 1,
      align: "center",
      //backgroundColor: "inherit",
      color: "gray",
      background: "grgb(240,240,240, 0.0)"
    }
  }));
  const classes = useStyles();

  return (
    <ExpansionPanel 
      className={(props.finalQuestion && classes.finalQuestion) || classes.root}
      TransitionProps={{ unmountOnExit: true }}>
      <ExpansionPanelSummary
        style={{ backgroundColor: "rgb(240,240,240, 0.0)" }}
        expandIcon={
          <ExpandMoreIcon
            style={{
              color: "#00A8E0",
              height: "3em",
              backgroundColor: "rgb(240,240,240, 0.0)"
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header">
          <Typography className={classes.heading} variant="h3">
            {props.question}{" "}
          </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.root}>
          <Form
            className={(classes.heading, classes.root)}
            setAnswer={props.setAnswer}
            answer={props.answer}
            goal_id={props.goal_id}
            addUserGoal={props.addUserGoal}
            ansQuestion={props.ansQuestion}
            suggestion={props.suggestion}
            currentUserId={props.currentUserId}
          />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
