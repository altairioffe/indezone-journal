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

  const userGoalsView = userGoals[0].map(userGoal => {
    return (
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.goal_id} answer={userGoal.answer} />
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