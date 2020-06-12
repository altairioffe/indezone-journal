import "./QuestionAnswer/styles.scss";

import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from "@material-ui/core";
import AnswerQuestionPanel from "./QuestionAnswer/AnswerQuestionPanel"

import Slide from '@material-ui/core/Slide';


export default function QuestionFeed(props) {
   const useStyles = makeStyles((theme) => ({
    root: {
      textAlign:'center',
      fontWeight: '300',
      flexGrow: 1,
      align:'center',
      fontSize: '1.5em', 
      "& small": {
        color:"skyblue"
      }
    }
  }));
  const classes = useStyles();
  
  console.log('questions for user',props.questions)
  console.log('questions answered today', props.answeredGoals)

  const randomizedQuestions = props.questions.slice(1).sort(x => .5 - Math.random())
  randomizedQuestions.unshift(props.questions[0])
  console.log("RANDOM QUESTIONS: ", randomizedQuestions)

  const questionsFilteredList = randomizedQuestions
    .map( (goal, i) => {
      return(
        <div>
          <Slide direction="up" in={false} >
            <AnswerQuestionPanel 
              key={i}
              question={goal.question}
              suggestion={goal.suggestion}
              ansQuestion={props.ansQuestion}
              setAnswer = {props.setAnswer}
              answer={props.answer}
              goal_id = {goal.id}
              addUserGoal = {props.addUserGoal}
              currentUserId={props.currentUserId}
            />
          </Slide>
        </div>
      )
    })
  return  (
    <section>
      <br/>
      {questionsFilteredList}
      {!questionsFilteredList.length === 0 && (
    <Card className={classes.root} variant="contained-primary">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
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
  )
}
      <br/>
    </section>
  )
}

/* let questionsArr = selectedQuestions.map( (goal) => {
  return {
    id:goal.id,
    question:goal.question,
    suggestion:goal.suggestion
  }
})  */