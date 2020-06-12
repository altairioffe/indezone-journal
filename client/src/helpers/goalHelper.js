import moment from 'moment';
// Find last user entry before today

const findLastEntryBeforeToday = (userGoals) => {

  if (userGoals.includes(x => moment(x.createdAt).isBetween(moment().subtract(24, 'hours'), moment().startOf('day')) ) ){
    return true
  } else {
    return false
  }
} 


export function checkCompliance(userGoals) {
  // check if most recent entry before today was within 24 hours

  console.log("STAET OF TODAY: ", moment(moment().subtract(24, 'minutes')).isBetween(moment().subtract(24, 'hours'), moment().startOf('minute')))

  let compliant = false
  userGoals.forEach(x => {
    if (moment(x.createdAt).isBetween(moment().startOf('day').subtract(24, 'hours'), moment().startOf('day')) ){
      return compliant = true
  }} )
  return compliant
 

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