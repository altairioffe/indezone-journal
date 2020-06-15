import moment from "moment";

export function checkCompliance(userGoals) {
  // check if most recent entry before today was within 24 hours

  // console.log(
  //   "STAET OF TODAY: ",
  //   moment(moment().subtract(24, "minutes")).isBetween(
  //     moment().subtract(24, "hours"),
  //     moment().startOf("minute")
  //   )
  // );

  let compliant = false;
  if (userGoals.length >= 1) {
    userGoals.forEach(x => {
      if (
        moment(x.createdAt).isBetween(
          moment()
            .startOf("day")
            .subtract(24, "hours"),
          moment().startOf("day")
        )
      ) {
        return (compliant = true);
      }
    });
  }
  return compliant;
}

export function confirmNoPostsToday(userGoals) {
  if (moment(userGoals[0].createdAt).isAfter(moment().startOf("day"))) {
    return false;
  } else return true;
}

//Return true on submitting new entry if this is the first post of the day,

export function checkIfFirstPostToday(userGoals) {
  if (
    userGoals.length > 1 &&
    moment(userGoals[1].createdAt).isBefore(moment().startOf("day"))
  ) {
    console.log("FROM HELPER CHECKER: ", userGoals[1].createdAt);
    return true;
  } else if (userGoals.length <= 1) {
    return true;
  } else return false;
}

export function randomizeQuestions(goals) {
  const questions = [...goals];

  const randomizeQuestions = questions
    .slice(1)
    .sort(x => 0.5 - Math.random());
  randomizeQuestions.unshift(goals[0]);
  return randomizeQuestions;
};


  //GET User wordcount
  export function getUserWordCount(currentUserGoals) {
    let wordCount = 0;
    currentUserGoals.forEach(x => (wordCount += x.answer.split(" ").length));
    return wordCount;
  };




export function getBio(bioData, currentUser){
  if (!bioData === null) {
    let bio = bioData.filter(biodata => biodata.user_id === currentUser);
    console.log("BIO: ", bio);
    return bio[0].text;
  }
};


// function getCurrentUserGoals(userGoals, goals, userId) {
//     return [...userGoals]
//     .filter(userGoal => userGoal.user_id === userId)
//     .sort((goal1, goal2) => moment(goal1.createdAt) < moment(goal2.createdAt) ? 1: -1)
//     .map((userGoal) => {
//       const question = goals.filter((goal) => userGoal.goal_id === goal.id)[0].question;
//     return  {
//         id: userGoal.id,
//         question: question,
//         answer: userGoal.answer,
//         createdAt: moment(userGoal.createdAt).format('LLLL'),  // Formatted date
//       }
//     });
// };
