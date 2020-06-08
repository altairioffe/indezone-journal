import React from 'react';
import WallItem from './WallItem';
import { Timeline } from 'react-event-timeline'
import  {styles}  from './WallStyles';
import '../styles/Wall.scss';
export default function Wall(props) {
  let userGoals = [];


  userGoals.push(props.userGoals)
  
  console.log("FROM WALL:, ", userGoals[0])
  userGoals.forEach(x => console.log(x))

  let questions = props.goals
  console.log("QUESTIONS: ", questions)
  const userGoalsView = userGoals[0].map(userGoal => {
    let linkedQuestion = questions.filter(question => question.id === userGoal.goal_id)
    console.log("Linked question: ", linkedQuestion[0].question)
    return (
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={linkedQuestion[0].question} answer={userGoal.answer} />
    );
  }
  );

  return (
    <div class ="timeline">
      <Timeline lineStyle={styles.lineStyle}>
        {userGoalsView}
      </Timeline>
    </div>
  );
}