import moment from "moment";

export function checkCompliance(userGoals) {
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
    return true;
  } else if (userGoals.length <= 1) {
    return true;
  } else return false;
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

//GET User wordcount
export function getUserWordCount(currentUserGoals) {
  let wordCount = 0;
  currentUserGoals.forEach(x => (wordCount += x.answer.split(" ").length));
  return wordCount;
}

export function getBio(bioData, currentUser) {
  if (!bioData === null) {
    let bio = bioData.filter(biodata => biodata.user_id === currentUser);
    console.log("BIO: ", bio);
    return bio[0].text;
  }
}

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
