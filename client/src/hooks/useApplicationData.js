import axios from "axios";
import { useState, useEffect } from "react";
import { checkCompliance, checkIfFirstPostToday } from "../helpers/goalHelper";

export default function useApplicationData() {
  const [state, setState] = useState({
    goals: [],
    biodatas: [],
    currentUserGoals: [],
    currentUser: null,
    answer: "",
    currentUserInsight: "",
    currentUserWordCount: 0,
    level: 1
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/goals"),
      axios.get("/api/biodatas"),
      axios.get("/api/users")
    ])
      .then(all => {
        setState(state => ({
          ...state,
          goals: all[0].data,
          biodatas: all[1].data
        }));
      })
      .catch(err => err.message);
  }, []);



  /*
  - on login: if no post yesterday & no post today, reduce level by 1, update state & db
  - on login: if no post yesterday BUT post has already been made previously today, no change to level
  - on submit: if first post of the day, increase level in db then in state
  - on submit: if NOT first post of the day, no change to level
*/

// Axios PUT to update db Level
const levelHandler = (userId, newUserLevel) => {

  return Promise.resolve(
    axios
      .put(`api/users/${userId}`, {
        points: newUserLevel
      })
      .then(response =>
        response
          ? console.log("LEVEL UP RESPONSE: ", response)
          : console.log("LEVEL UPDATE RESPONSE ERROR: ", response)
      )
      .then(() => console.log("LEVEL UPDATE COMPLETE."))
      .catch(err => console.log(err))
  );
};


  //reduce userLevel on login if not compliant
  const updateUserLevelOnLogin = userGoals => {
    let currentLevel = state.level

    if (currentLevel > 1 && !checkCompliance(userGoals)) {
      return levelHandler(currentUser.id, currentLevel - 1);
    } else {
      return currentLevel;
    }
    // else if (state.level <10 && checkCompliance(userGoals)) {
    //   return state.level += 1
    // }
  };


  const updateUserLevelOnEntry = userGoals => {
    console.log("CHECK FURST POST: ", checkIfFirstPostToday(userGoals));

    let currentLevel = state.level
    if (checkIfFirstPostToday(userGoals)) {
      return levelHandler(currentUser.id, currentLevel + 1);
    } else {
      return currentLevel;
    }
  };



  //Set current user goals
  useEffect(() => {
    console.log("-----------STATE--------------", state);

    if (state.currentUser != null) {
      axios
        .get(`/api/userGoals/${state.currentUser.id}`)
        .then(userGoals => {
          setState(state => ({ ...state, currentUserGoals: userGoals.data }));
          setState(state => ({
            ...state,
            currentUserWordCount: getUserWordCount(state.currentUserGoals)
          }));
          setState(state => ({
            ...state,
            level: updateUserLevelOnLogin(state.currentUserGoals)
          }));
        })
        .catch(err => console.log("USERGOALS ERROR: ", err));
    }
  }, [state.currentUser]);

  //GET User SCORE
  const getUserWordCount = currentUserGoals => {
    let wordCount = 0;
    currentUserGoals.forEach(x => (wordCount += x.answer.split(" ").length));
    return wordCount;
  };

  //Set User SCORE

  const setUserWordCount = () => {
    setState(state => ({
      ...state,
      currentUserWordCount: getUserWordCount(state.currentUserGoals)
    }));
  };

  // set Answer
  const setAnswer = function(ans) {
    return Promise.resolve(
      setState(state => ({
        ...state,
        answer: ans
      }))
    );
  };

  // Adding new goal
  const addUserGoal = function(goalId, answer) {
    const goal = {};
    goal.user_id = state.currentUser.id;
    goal.answer = answer;
    goal.goal_id = goalId.goal_id;
    axios
      .post(`/api/userGoals`, goal)
      .then(result => {
        const newUserGoals = [...state.currentUserGoals, result.data];
        console.log("NEWUSERGOALS: ", newUserGoals);
        setState(state => ({
          ...state,
          currentUserGoals: newUserGoals,
          currentUserWordCount: getUserWordCount(newUserGoals),
          level: updateUserLevelOnEntry(newUserGoals),
          answer: ""
        }));
      })
      .catch(err => console.log("error: ", err));
  };

  const ansQuestion = (answer, goal_id, user_id) => {
    let data = {
      user_id,
      goal_id,
      answer
    };

    return axios
      .post(`/api/userGoals`, data)
      .then(() => {
        setState({
          ...state,
          currentUserGoals: [{ ...data }, ...state.currentUserGoals]
        });
        return goal_id;
      })
      .catch(() => {
        console.log("ERROR");
        return "error";
      });
  };

  // set user state
  const setCurrentUser = user_data => {
    setState({ ...state, currentUser: user_data });
  };

  // reset user state
  const logOutUser = () => {
    setState({
      ...state,
      currentUser: null
    });
    return state.currentUser;
  };

  const setInsight = currentUserInsight =>
    setState({ ...state, currentUserInsight });

  const requestInsight = currentUserGoals => {
    return Promise.resolve(
      axios
        .post("/api/userInsight", {
          body: currentUserGoals
        })
        .then(response => {
          setInsight(response.data);
        })
        .catch(err => console.log(err))
    );
  };

  const getUserGoals = userId => {
    return Promise.resolve(
      axios
        .get(`api/userGoals/${userId}`)
        .then(userGoals => {
          setState({
            ...state,
            currentUserGoals: [{ ...userGoals }, ...state.currentUserGoals]
          });
          return state.currentUserGoals;
        })
        .catch(err => console.log(err))
    );
  };

  const loginHandler = (email, password, loginCallback) => {
    if (email && password) {
      let data = {
        email: email,
        password: password
      };

      return Promise.resolve(
        axios
          .post("api/login", {
            data
          })
          .then(response => {
            return setCurrentUser(response.data);
          })
          .then(() => loginCallback())
          .then(x =>
            console.log("-----------------NEXT STATE------------------ ", state)
          )
          .catch(err => console.log(err))
      );
    }
  };

  const registrationHandler = (handle, email, password, loginCallback) => {
    if (handle && email && password) {
      let data = {
        handle: handle,
        email: email,
        password: password,
        points: 0
      };

      return Promise.resolve(
        axios
          .post("api/users", {
            data
          })
          .then(response =>
            response
              ? loginHandler(email, password, x => console.log(x))
              : console.log("REGISTRATION LOGIN RESPONSE: ", response)
          )
          .then(() => loginCallback())
          .catch(err => console.log(err))
      );
    }
  };


  

  const getBio = (biodatas, currentUser) => {
    if (!biodatas === null) {
      let bio = biodatas.filter(biodata => biodata.user_id === currentUser);
      console.log("BIO: ", bio);
      return bio[0].text;
    }
  };

  return {
    ansQuestion,
    state,
    setCurrentUser,
    logOutUser,
    setAnswer,
    addUserGoal,
    requestInsight,
    getUserWordCount,
    registrationHandler,
    loginHandler,
    getBio,
    setUserWordCount
  };
}
