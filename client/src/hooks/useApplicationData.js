import axios from "axios";
import { useState, useEffect } from "react";
//import { getCurrentUserGoals } from "../helpers/goalHelper";

export default function useApplicationData() {
  const [state, setState] = useState({
    userGoals: [],
    goals: [],
    biodatas: [],
    users: [],
    currentUserGoals: [],
    currentUser: null,
    answer: "",
    currentUserInsight: "",
    currentUserWordCount: 0
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/userGoals"),
      axios.get("/api/goals"),
      axios.get("/api/biodatas"),
      axios.get("/api/users")
    ])
      .then(all => {
        setState(state => ({
          ...state,
          userGoals: all[0].data,
          goals: all[1].data,
          biodatas: all[2].data,
          users: all[3].data
        }));
      })
      .catch(err => err.message);
  }, []);


 //Set current user goals
  useEffect(() => {
    console.log("-----------STATE--------------", state);

    if (state.currentUser != null) {

      axios.get(`/api/userGoals/${state.currentUser.id}`)
      .then(userGoals => {
        setState(state => ({...state, currentUserGoals: userGoals.data}))
      })
      .catch(err => console.log("USERGOALS ERROR: ", err))
    }
  }, [state.currentUser]);



// const setCurrentUserGoals = () => {
//       if (state.currentUser != null) {

//       axios.get(`/api/userGoals/${state.currentUser.id}`)
//       .then(userGoals => {
//         return setState(state => ({...state, currentUserGoals: userGoals.data}))
//       })
//       .then(x => console.log("FINAL CURRENT USER GOALS ", state.currentUserGoals))
//       .catch(err => console.log("USERGOALS ERROR: ", err))
//     }
// }


  //Set User SCORE
  const getUserWordCount = currentUserGoals => {
    let wordCount = 0;
    currentUserGoals.forEach(x => (wordCount += x.answer.split(" ").length));
    // let user = users.filter((user) => user.id === currentUser);
    return wordCount;
  };

  useEffect(() => {
    if (state.currentUser != null && state.currentUserGoals != null) {
      setState(state => ({
        ...state,
        currentUserWordCount: getUserWordCount(state.currentUserGoals)
      }));
    }
  }, [state.currentUser, state.currentUserWordCount]);

  // set Answer
  const setAnswer = function(ans) {
    setState(state => ({
      ...state,
      answer: ans
    }));
  };

  //Register New User

  // Adding new goal
  const addUserGoal = function(goal) {
    goal.user_id = state.currentUser.id;
    goal.answer = state.answer;
    const goalId = goal.id;
    axios
      .post(`/api/userGoals`, goal)
      .then(result => {
        const newUserGoals = [...state.userGoals, result.data];

        setState(state => ({
          ...state,
          userGoals: newUserGoals
        }));
      })
      .catch(err => console.log("error"));
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
          userGoals: [{ ...data }, ...state.userGoals]
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
        .then(userGoals => console.log("RETURNED USER GOALS: ", userGoals))
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
            console.log("LOGIN RESPONSE: ", response);
            return setCurrentUser(response.data);
          })

      //    .then(() =>  setCurrentUserGoals())

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
    getBio
  };
}
