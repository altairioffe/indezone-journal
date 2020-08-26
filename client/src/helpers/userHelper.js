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

//GET User wordcount
export function getUserWordCount(currentUserGoals) {
  let wordCount = 0;
  currentUserGoals.forEach(x => (wordCount += x.answer.split(" ").length));
  return wordCount;
}

export function getBio(bioData, currentUser) {
  if (!bioData === null) {
    let bio = bioData.filter(biodata => biodata.user_id === currentUser);
    return bio[0].text;
  }
}

