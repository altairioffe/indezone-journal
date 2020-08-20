import React from "react";
import WallItem from "./WallItem";
import moment from "moment";
import { Timeline } from "react-event-timeline";
import { styles } from "./WallStyles";
import "../styles/Wall.scss";
export default function Wall(props) {
  let userEntries = [];

  userEntries.push(props.userEntries);
  userEntries[0].sort((a, b) => b.id - a.id);

  let questions = props.questions;
  
  let userEntriesView = userEntries[0].map(userGoal => {
    let linkedQuestion = questions.filter(
      question => question.id === userGoal.goal_id
    );
    let timeStamp = new Date(userGoal.createdAt);
    return (
      <WallItem
        key={userGoal.id}
        createdAt={moment(timeStamp).format("HH:mm MMM DD, YYYY")}
        question={linkedQuestion.length > 0 ? linkedQuestion[0].question : "Entry:"}
        answer={userGoal.answer}
      />
    );
  });

  return (
    <div className="timeline">
      <Timeline lineStyle={styles.lineStyle}>{userEntriesView}</Timeline>
    </div>
  );
}
