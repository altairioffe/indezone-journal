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
      backgroundColor: `rgb(240,240,240)`,
      "& div": {
        backgroundColor: "inherit"
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightLight,
      flexGrow: 1,
      align: "center",
      backgroundColor: "inherit",
      color: "gray"
    }
  }));
  const classes = useStyles();

  return (
    <ExpansionPanel
      smUp="hide"
      className={classes.root}
      TransitionProps={{ unmountOnExit: true }}
      iconButtonProps={{ color: "#00A8E0" }}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#00A8E0" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography className={classes.heading} fontSize="h2.fontSize">
          {props.question}{" "}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.root}>
          <Form
            className={(classes.heading, classes.root)}
            setAnswer={props.setAnswer}
            answer={props.answer}
            goal_id={props.goal_id}
            addUserGoal={props.addUserGoal}
            ansQuestion={props.ansQuestion}
            suggestion={props.suggestion}
            currentUserId={props.currentUserId}
            goalId={props.goalId}
          />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
