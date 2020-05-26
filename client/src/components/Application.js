import React from "react";
import Wall from "./Wall";
import Bio from "./Bio/Index";
import LogoutPrompt from "./LogoutPrompt";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./LogoutPrompt.scss";
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
        logInUser={logInUser}
        logoutUser={logOutUser}
        user={state.currentUser}
        registrationHandler={registrationHandler}
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
          <LogoutPrompt />
        </div>
      )}
    </Container>
  );
}
