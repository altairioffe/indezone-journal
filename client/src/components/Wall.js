import React from 'react';
import WallItem from './WallItem';
import { Timeline } from 'react-event-timeline'
import  {styles}  from './WallStyles';
import '../styles/Wall.scss';
export default function Wall(props) {
  const userGoals = props.userGoals;
  console.log("FROM WALL: ", userGoals)
 // const userGoalsView = userGoals.map(userGoal => {


let userGoal = {id: 1, createdAt: 2, question: 3, answer: 4}
    return (
      <WallItem key={userGoal.id} createdAt={userGoal.createdAt} question={userGoal.question} answer={userGoal.answer} />
    );
  
  ;

  return (
    <div class ="timeline">
      <Timeline lineStyle={styles.lineStyle}>
        {3}
      </Timeline>
    </div>
  );
}