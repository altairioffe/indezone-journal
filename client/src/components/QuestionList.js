import "./QuestionList/styles.scss";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import QuestionPanel from "./QuestionList/QuestionPanel";

import Slide from "@material-ui/core/Slide";

export default function QuestionFeed(props) {
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
    }
  }));
  const classes = useStyles();

  // console.log('questions answered today', props.answeredGoals)

  let selectedQuestions = props.questions.slice(0, props.level);
  let questionsArr = selectedQuestions.map(goal => {
    return {
      id: goal.id,
      question: goal.question,
      suggestion: goal.suggestion
    };
  });
  let finalQuestion = props.questions[props.questions.length - 1];
  //questionsArr.push({id: finalQuestion.id, question: finalQuestion.question, suggestion: finalQuestion.suggestion})

  const questionsFilteredList = questionsArr.map((goal, i) => {
    return (
      <div>
        <Slide direction="up" in={false}>
          <QuestionPanel
            style={{ background: "rgb(255,255,255, 0)" }}
            key={i}
            question={goal.question}
            suggestion={goal.suggestion}
            ansQuestion={props.ansQuestion}
            setAnswer={props.setAnswer}
            answer={props.answer}
            goal_id={goal.id}
            addUserGoal={props.addUserGoal}
            currentUserId={props.currentUserId}
          />
        </Slide>
      </div>
    );
  });
  return (
    <section>
      <br />
      {questionsFilteredList}
      <Slide direction="up" in={false}>
        <QuestionPanel
          finalQuestion={true}
          key={questionsFilteredList.length}
          question={`BONUS: ${finalQuestion.question}`}
          suggestion={finalQuestion.suggestion}
          ansQuestion={props.ansQuestion}
          setAnswer={props.setAnswer}
          answer={props.answer}
          goal_id={finalQuestion.id}
          addUserGoal={props.addUserGoal}
          currentUserId={props.currentUserId}
        />
      </Slide>
      {!questionsFilteredList.length === 0 && (
        <Card className={classes.root} variant="contained-primary">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              Congratulations
            </Typography>
            <Typography variant="h5" component="h2">
              You have Answered all your Questions for the Day
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Come Back Tommorrow for More
            </Typography>
            <Typography variant="body2" component="p">
              Raise your Level to get more Questions
            </Typography>
          </CardContent>
        </Card>
      )}
      <br />
    </section>
  );
}

/* let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
})  */
