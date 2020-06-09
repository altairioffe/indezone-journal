import React from 'react';
import WallItem from './WallItem';
import { Timeline } from 'react-event-timeline'
import  {styles}  from './WallStyles';
import '../styles/Wall.scss';
export default function Wall(props) {
  let userGoals = [];


  userGoals.push(props.userGoals)
  console.log("userGoals: ", userGoals)
 // userGoals.forEach(x => console.log(x))

  let questions = props.goals
  let userGoalsView = userGoals[0].map(userGoal => {
    let linkedQuestion = questions.filter(question => question.id === userGoal.goal_id)
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