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



export function organizeQuestionsByTime(questions) {
  let dividedQuestions = {
    morning: {
      happy: [],
      sad: []
    },
    evening: {
      happy: [],
      sad: []
    }
  };

  dividedQuestions.morning.happy.push(randomizeQuestions(questions.slice(0, 12)));
  dividedQuestions.morning.sad.push(randomizeQuestions(questions.slice(12, 24)));

  dividedQuestions.evening.happy.push(randomizeQuestions(questions.slice(24, 36)));
  dividedQuestions.evening.sad.push(randomizeQuestions(questions.slice(36, 48)));

  return dividedQuestions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function randomizeQuestions(questions) {
  const firstGoal = questions[0];
  const lastGoal = questions[questions.length - 1];
  let shufflingQuestions = questions.slice(1, questions.length - 1);
  shuffleArray(shufflingQuestions);

  shufflingQuestions.unshift(firstGoal);
  shufflingQuestions.push(lastGoal);
  console.log("RANDOMIZED LIST: ", shufflingQuestions);
  return shufflingQuestions;
}