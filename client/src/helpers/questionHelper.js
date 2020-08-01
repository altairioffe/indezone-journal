import React from "react";
import moment from "moment";

export function setTimeOfDay(currentTime) {
  console.log("CURRENT TIME::, ", currentTime);

  console.log("MOMENT: ", moment({ hour: 5, minute: 59 }));
  if (
    moment(currentTime).isBetween(
      moment({ hour: 5 }),
      moment({ hour: 16, minute: 59 })
    )
  ) {
    console.log("MOOOOMMMEENTT: ", "morning");
    return "morning";
  } else return "evening";
}

export function pickUserQuestions(organizedQuestions, timeOfDay, mood) {
  let time = timeOfDay;
  switch (time) {
    case "morning":
      if (mood === "happy") {
        return organizedQuestions.morning.happy[0];
      } else return organizedQuestions.morning.sad[0];
    case "evening":
      if (mood === "happy") {
        return organizedQuestions.evening.happy[0];
      } else return organizedQuestions.evening.sad[0];
  }
}

export function countPowerEntries(answers) {
  let count = 0;
  answers.forEach(answerObj =>
    answerObj.answer.split(" ").length > 40 ? count++ : ""
  );
  console.log("COUNT", count)
  return count;
}
