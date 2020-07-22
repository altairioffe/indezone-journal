import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

import {
  checkCompliance,
  checkIfFirstPostToday,
  randomizeQuestions,
  getBio,
  getUserWordCount,
  organizeQuestionsByTime
} from "../helpers/userHelper";

import { setTimeOfDay} from "../helpers/questionHelper";

/*
  - on login: if no post yesterday & no post today, reduce level by 1, update state & db
  - on login: if no post yesterday BUT post has already been made previously today, no change to level
  - on submit: if first post of the day, increase level in db then in state
  - on submit: if NOT first post of the day, no change to level
*/

export default function useApplicationData() {
  const [state, setState] = useState({
    randomizedQuestions: [],
    organizedQuestionsByTime: {},
    biodatas: [],
    currentUserGoals: [],
    currentUser: true,
    answer: "",
    currentUserInsight: "",
    currentUserWordCount: 0,
    level: 1,
    newChallengeNotification: true,
    loginError: false,
    userMood: "happy",
    timeOfDay: "morning",
    renderMainPage: false
  });

  useEffect(() => {
    console.log("GETTTTING QUESTIONS")
    Promise.all([axios.get("/api/goals"), axios.get("/api/biodatas")])
      .then(all => {
        let organizedQuestions = organizeQuestionsByTime(all[0].data)
        let randomizedQuestions = randomizeQuestions(all[0].data)
        console.log("DIVIDED: ", organizedQuestions)
        setState(state => ({
          ...state,
          randomizedQuestions: randomizedQuestions,
          organizedQuestionsByTime: organizedQuestions,
          biodatas: all[1].data
        }));
      })
      .catch(err => err.message);
  }, []);

  // Axios PUT to update db Level
  const levelHandler = (userId, newUserLevel) => {
    //Set DB
    return (
      Promise.resolve(
        axios.put(`api/users/${userId}`, {
          points: newUserLevel
        })
      )
        //Set State using response from DB
        .then(() => {
          setState(state => ({
            ...state,
            level: newUserLevel
          }));
        })
        .catch(err => console.log(err))
    );
  };

  //reduce userLevel on login if not compliant
  const updateUserLevelOnLogin = userGoals => {
    let currentLevel = state.level;

    if (currentLevel > 1 && !checkCompliance(userGoals)) {
      return levelHandler(state.currentUser.id, currentLevel - 1);
    } else {
      return currentLevel;
    }
  };

  // increase user Level when submitting first post of the day
  const updateUserLevelOnEntry = userGoals => {
    console.log("FIRST POST?: ", checkIfFirstPostToday(userGoals));

    let currentLevel = state.level;
    if (checkIfFirstPostToday(userGoals) && currentLevel < 10) {
      setState(state => ({
        ...state,
        newChallengeNotification: true
      }));
      return levelHandler(state.currentUser.id, currentLevel + 1);
    } else {
      return currentLevel;
    }
  };

  const dismissNewChallengeNotification = () => {
     setState(state => ({...state, newChallengeNotification: false}));
  }

  //Set current user goals on login
  useEffect(() => {
    console.log("--------USEEFFECT---STATE--------------", state);

    if (state.currentUser != null) {
      axios
        .get(`/api/userGoals/${state.currentUser.id}`)
        .then(userGoals => {
          setState(state => ({ ...state, currentUserGoals: userGoals.data }));
          setState(state => ({
            ...state,
            currentUserWordCount: getUserWordCount(state.currentUserGoals)
          }));
        })
        .catch(err => console.log("USERGOALS ERROR: ", err));
    }
  }, [state.currentUser]);

  //Set User wordcount
  const setUserWordCount = () => {
    setState(state => ({
      ...state,
      currentUserWordCount: getUserWordCount(state.currentUserGoals)
    }));
  };

  const renderMainPage = () => {
    setState(state => ({...state, renderMainPage: true}))
  }

  const setUserMood = (mood) => {
    setState(state => ({...state, userMood: mood}))
  }

  const setTime = () => {
    setState(state => ({...state, timeOfDay: setTimeOfDay(moment())}))
  }

  // set Answer
  const setAnswer = function(ans) {
    return Promise.resolve(
      setState(state => ({
        ...state,
        answer: ans
      }))
    );
  };

  // Add new entry
  const addUserGoal = function(goalId, answer) {
    const goal = {};
    goal.user_id = state.currentUser.id;
    goal.answer = answer;
    goal.goal_id = goalId.goal_id;
    axios
      .post(`/api/userGoals`, goal)
      .then(result => {
        const newUserGoals = [...state.currentUserGoals, result.data];
        setState(state => ({
          ...state,
          currentUserGoals: newUserGoals,
          currentUserWordCount: getUserWordCount(newUserGoals)
        }));
        updateUserLevelOnEntry(newUserGoals);
      })
      .then(() => console.log("STATE AFTER LEVEL UPDATE: ", state))
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
    setState({
      ...state,
      currentUser: user_data,
      level: user_data.points || 1
    });
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
          .then(() => setTime())
          .then(() => loginCallback())
          .then(() => updateUserLevelOnLogin(state.currentUserGoals))
          .then(x =>
            console.log(
              "----------------JUST LOGGED IN STATE------------------ ",
              state
            )
          )
          .catch(err => {
            console.log("LOGINNN ERROR: ", err);
            setState(state => ({
              ...state,
              loginError: true
            }));
          })
      );
    }
  };

  const registrationHandler = (handle, email, password, loginCallback) => {
    console.log("R> ", handle, email, password, loginCallback)
    if (handle && email && password) {
      let data = {
        handle: handle,
        email: email,
        password: password,
        points: 1
      };

      return Promise.resolve(
        axios
          .post("api/users", {
            data
          })
          .then(res => {
            console.log("RESPONSE FROM HANDLER: ", res.data.error);
            if (res.data.error) {
              console.log("ERROR RESPONSE: ", res.data.error);
              return setState(state => ({
                ...state,
                loginError: res.data.error
              }));
            } else {
              console.log("HIT LOGIN HANDLER")
              loginHandler(email, password, x =>
                console.log("LOGINHANDLER FROM REGISTRATION HANDLER: ", x)
              ).then(() => loginCallback());
            }
          })
          .catch(err =>
            console.log("ERROR FROM REGISTRATION HANDLER AXIOS, :", err)
          )
      );
    }
  };

  const resetLoginError = () => {
    setState(state => ({
      ...state,
      loginError: false
    }));
  }

  // log out & reset user state
  const logOutUser = () => {
    setState({
      ...state,
      currentUser: null,
      level: null,
      answer: null,
      currentUserGoals: null,
      currentUserWordCount: 0,
      currentUserInsight: "",
      level: 1,
      loginError: false
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
    setUserWordCount,
    resetLoginError,
    renderMainPage,
    setUserMood,
    dismissNewChallengeNotification
  };
}
