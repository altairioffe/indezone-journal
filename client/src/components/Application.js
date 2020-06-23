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
import { Parallax, Background } from "react-parallax";

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
    setUserWordCount,
    resetLoginError
  } = useApplicationData();
  console.log("------APPLICATION.JS state ------\n", state);


  const parallaxStyle = {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    maxWidth: "100%"
  }
  const containerStyle = {
    height: "100vh"
  }

  return (
    <div>
      <Parallax
      className = {parallaxStyle}
        blur={10}
        bgImage={require("./LandingPage/LandingImage/bg-pink-sky.jpg")}
        bgImageAlt="the cat"
        strength={800}
        >
        <Container
          className=""
          //style={{position: "absolute"}}
          // style={{width: '100vw',
          // height: '100vh',backgroundImage: `url("/images/bg-pink-sky.jpg")`, backgroundSize: 'cover', maxWidth: "100%"}}
          style={{height: "100vh"}}
        >
          <Navbar
            users={state.users}
            logInUser={data => console.log(data)}
            logoutUser={logOutUser}
            user={state.currentUser}
            level={state.level}
            registrationHandler={registrationHandler}
            loginHandler={loginHandler}
            loginError={state.loginError}
            resetLoginError={resetLoginError}
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
                questions={state.randomizedQuestions}
                currentUserGoals={state.currentUserGoals}
                setAnswer={setAnswer}
                answer={state.answer}
                addUserGoal={addUserGoal}
                goals={state.randomizedQuestions}
                currentUserId={state.currentUser}
                randomizedQuestions={state.randomizedQuestions}
                answeredGoals={answeredGoals(
                  state.currentUserGoals,
                  state.currentUser
                )}
              />
              <div>
                {state.currentUserGoals &&
                  state.currentUserGoals.length >= 1 && (
                    <Wall
                      userGoals={state.currentUserGoals}
                      goals={state.randomizedQuestions}
                    />
                  )}
              </div>
            </section>
          )}
          {/* {state.currentUser === null && (
        <div>
          <HeroImage />
        </div>
      )} */}
        </Container>
      </Parallax>
    </div>
  );
}
