import React from "react";
import Wall from "./Wall";
import Bio from "./Bio/Index";
import HeroImage from "./HeroImage";
import Navbar from "./LandingPage/Navbar";
import QuestionList from "./QuestionList";
import "./HeroImage.scss";
import useApplicationData from "../hooks/useApplicationData";
import { answeredGoals } from "../helpers/filterbyToday";
import { Container } from "@material-ui/core";

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
    getBio,
    setUserWordCount
  } = useApplicationData();
  console.log("------ state ------\n", state);

  return (
    <Container className="layout">
      <Navbar
        users={state.users}
        logInUser={data => console.log(data)}
        logoutUser={logOutUser}
        user={state.currentUser}
        level={state.level}
        registrationHandler={registrationHandler}
        loginHandler={loginHandler}
      />

      {state.currentUser && (
        <section className="feed">
          <br />
          <Bio
            bio={getBio(state.biodatas, state.currentUser)}
            level={state.level}
            requestInsight={requestInsight}
            currentUserGoals={state.currentUserGoals}
            userInsight={state.currentUserInsight}
          />
          <br />
          <QuestionList
            ansQuestion={ansQuestion}
            level={state.level}
            questions={state.goals}
            currentUserGoals={state.currentUserGoals}
            setAnswer={setAnswer}
            answer={state.answer}
            addUserGoal={addUserGoal}
            goals={state.goals}
            currentUserId={state.currentUser}
            randomizedQuestions={state.goals}
            answeredGoals={answeredGoals(
              state.currentUserGoals,
              state.currentUser
            )}
          />
          <div>
            {state.currentUserGoals.length >= 1 && (
              <Wall userGoals={state.currentUserGoals} goals={state.goals} />
            )}
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
