import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

import {
  checkCompliance,
  checkIfFirstPostToday,
  getBio,
  getUserWordCount
} from "../helpers/userHelper";
import { organizeQuestionsByTime, questions } from "../helpers/questionHelper";

import { setTimeOfDay } from "../helpers/questionHelper";

/*
  - on login: if no post yesterday & no post today, reduce level by 1, update state & db
  - on login: if no post yesterday BUT post has already been made previously today, no change to level
  - on submit: if first post of the day, increase level in db then in state
  - on submit: if NOT first post of the day, no change to level
*/

export default function useApplicationData() {
  const [state, setState] = useState({
    questionsArray: questions,
    organizedQuestionsByTime: {},
    biodatas: [],
    userEntries: [],
    currentUser: null,
    answer: "",
    currentUserInsight: "",
    currentUserWordCount: 0,
    level: 1,
    newChallengeNotification: true,
    loginError: false,
    userMood: "",
    timeOfDay: "",
    renderMainPage: false,
    token: false
  });

  useEffect(() => {
    if (!state.token) {
      console.log("1!!!!!")
      return (
        Promise.resolve(axios.get(`api/cookies/`))
          //Set State using response from DB
          .then(credentials => {
            console.log("&&&&& CREDENTIALS &&&&&", credentials.data)
            if (credentials.data.email && credentials.data.password) {
              
              return loginHandler(
                credentials.data.email,
                credentials.data.password,
                x => console.log("FROM USEEFFECTUPTOP")
              );
            }
          })
          .catch(err => console.log("COOKIES LOGIN ERROR: ", err))
      );
    }
  }, []);

  useEffect(() => {
    let organizedQuestions = organizeQuestionsByTime(questions);
    setState(state => ({
      ...state,
      organizedQuestionsByTime: organizedQuestions
    }));
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
    setState(state => ({ ...state, newChallengeNotification: false }));
  };

  //Set current user goals on login
  useEffect(() => {
    console.log("--------USEEFFECT---STATE--------------", state);

    if (state.currentUser != null) {
      axios
        .get(`/api/userGoals/${state.currentUser.id}`)
        .then(userGoals => {
          setState(state => ({ ...state, userEntries: userGoals.data }));
          setState(state => ({
            ...state,
            currentUserWordCount: getUserWordCount(state.userEntries)
          }));
        })
        .catch(err => console.log("USERGOALS ERROR: ", err));
    }
  }, [state.currentUser]);

  //Set User wordcount
  const setUserWordCount = () => {
    setState(state => ({
      ...state,
      currentUserWordCount: getUserWordCount(state.userEntries)
    }));
  };

  const renderMainPage = () => {
    setState(state => ({ ...state, renderMainPage: true }));
  };

  const setUserMood = mood => {
    setState(state => ({ ...state, userMood: mood }));
  };

  const setTime = () => {
    setState(state => ({ ...state, timeOfDay: setTimeOfDay(moment()) }));
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

  // Add new entry
  const addUserGoal = function(goalId, answer) {
    const goal = {};
    goal.user_id = state.currentUser.id;
    goal.answer = answer;
    goal.goal_id = goalId.goal_id;
    axios
      .post(`/api/userGoals`, goal)
      .then(result => {
        const newUserGoals = [...state.userEntries, result.data];
        setState(state => ({
          ...state,
          userEntries: newUserGoals,
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
          userEntries: [{ ...data }, ...state.userEntries]
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

  // Authenticate user, then callback to render d1ashboard
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
            const currentUser = {
              handle: response.data.handle,
              email: response.data.email,
              points: response.data.points,
            }
            return setCurrentUser(currentUser);
          })
          .then(() => setTime())
          .then(() => loginCallback())
          .then(() => setState(state => ({
            ...state,
            token: true
          })))
          .then(() => updateUserLevelOnLogin(state.userEntries))
          .then(x =>
            console.log(
              "----------------JUST LOGGED IN STATE------------------ ",
              state
            )
          )
          .catch(err => {
            setState(state => ({
              ...state,
              loginError: true
            }));
          })
      );
    }
  };

  const registrationHandler = (handle, email, password, loginCallback) => {
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
            if (res.data.error) {
              console.log("ERROR RESPONSE: ", res.data.error);
              return setState(state => ({
                ...state,
                loginError: res.data.error
              }));
            } else {
              console.log("HIT LOGIN HANDLER");
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
  };

  // log out & reset user state
  const logOutUser = () => {
    console.log("LOGGING OUT");
    let data = state.currentUser;
    return Promise.resolve(
      axios
        .post("api/logout", {
          data
        })
        .then(x =>
          console.log(
            "----------------JUST LOGGED OOUUUUUTTTTT STATE------------------ ",
            state
          )
        )
        .then(x => {
          setState({
            ...state,
            currentUser: null,
            level: null,
            answer: null,
            userEntries: null,
            currentUserWordCount: 0,
            currentUserInsight: "",
            level: 1,
            loginError: false,
            userMood: "",
            timeOfDay: "",
            renderMainPage: false
          });
        })
        .catch(err => {
          console.log("LOG ERROR: ", err);
          setState(state => ({
            ...state,
            loginError: true
          }));
        })
    );

    return state.currentUser;
  };

  const setInsight = currentUserInsight =>
    setState({ ...state, currentUserInsight });

  const requestInsight = userEntries => {
    return Promise.resolve(
      axios
        .post("/api/userInsight", {
          body: userEntries
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
