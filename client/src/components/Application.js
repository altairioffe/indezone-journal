import React from "react";
import Wall from "./Wall";
import Bio from "./Bio/Index";
import HeroImage from "./HeroImage";
import Navbar from "./LandingPage/Navbar";
import QuestionList from "./QuestionList";
import "./HeroImage.scss";
import useApplicationData from "../hooks/useApplicationData";
import { answeredGoals } from "../helpers/filterbyToday";
import {
  Container
} from "@material-ui/core";

export default function Application() {
  const {
    logInUser,
    logOutUser,
    ansQuestion,
    state,
    requestInsight,
    addUserGoal,
    setAnswer,
    registrationHandler,
    loginHandler,
    getBio
  } = useApplicationData();
  console.log("------ state ------\n", state);

  const questions = [...state.goals];
  let selectedQuestions = questions.slice(0, 10); //second is level
  let questionsArr = selectedQuestions.map(goal => {
    return {
      id: goal.id,
      question: goal.question,
      suggestion: goal.suggestion
    };
  });
  
  return (
    <Container className="layout">
      <Navbar
        users={state.users}
        logInUser={data => console.log(data)}
        logoutUser={logOutUser}
        user={state.currentUser}
        registrationHandler={registrationHandler}
        loginHandler={loginHandler}
      />

      {state.currentUser && (
        <section className="feed">
          <br />
          <Bio
            bio={getBio(state.biodatas, state.currentUser)}
            level={state.currentUserWordCount}
            requestInsight={requestInsight}
            currentUserGoals={state.currentUserGoals}
            userInsight={state.currentUserInsight}
          />
          <br />
          <QuestionList
            giveAnswer={ansQuestion}
            questions={questionsArr}
            setAnswer={setAnswer}
            addUserGoal={addUserGoal}
            goals={state.goals}
            currentUserId={state.currentUser}
            answeredGoals={answeredGoals(state.userGoals, state.currentUser)}
          />
          <div>
            <Wall
              userGoals={state.currentUserGoals}
              userId={state.currentUser}
            />
          </div>
        </section>
      )}
      {state.currentUser === null && (
        <div>
          <HeroImage />
        </div>
      )}
    </Container>
  );
}
