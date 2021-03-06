import React from "react";
import Greeting from "./Greeting";
import Wall from "./Wall";
import Rewards from "./Rewards/Index";
import Navbar from "./LandingPage/Navbar";
import QuestionList from "./QuestionList/Index";
import Mood from "./Mood/Mood";
import useApplicationData from "../hooks/useApplicationData";
import { answeredGoals } from "../helpers/filterbyToday";
import { Container } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { pickUserQuestions } from "../helpers/questionHelper";
import { countPowerEntries } from "../helpers/questionHelper";

export default function Application() {
  const {
    logOutUser,
    ansQuestion,
    state,
    requestInsight,
    addUserGoal,
    setAnswer,
    registrationHandler,
    loginHandler,
    getBio,
    resetLoginError,
    renderMainPage,
    setUserMood,
    dismissNewLessonNotification
  } = useApplicationData();

  const parallaxStyle = {
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    maxWidth: "100%",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div>
      <Parallax
        className={parallaxStyle}
        blur={!state.currentUser ? 2 : 100}
        bgImage={require("./LandingPage/LandingImage/road-sky.jpg")}
        bgImageAlt="background"
        strength={800}
        bgStyle={{ backgroundAttachment: "fixed" }}
        backgroundRepeat="no-repeat">
        <Container className="" style={{ minHeight: "100vh" }}>
          <Navbar
            logInUser={data => console.log(data)}
            logoutUser={logOutUser}
            user={state.currentUser}
            mood={state.userMood}
            renderMainPage={state.renderMainPage}
            level={state.level}
            timeOfDay={state.timeOfDay}
            registrationHandler={registrationHandler}
            loginHandler={loginHandler}
            loginError={state.loginError}
            resetLoginError={resetLoginError}
          />

          {state.currentUser && !state.renderMainPage && (
            <Mood
              userIsMotivated={state.userIsMotivated}
              user={state.currentUser.handle}
              renderMainPage={renderMainPage}
              setUserMood={setUserMood}
            />
          )}

          {state.currentUser && state.renderMainPage && (
            <section className="feed">
              <Greeting timeOfDay={state.timeOfDay} />
              <br />
              <Rewards
                bio={getBio(state.biodatas, state.currentUser)}
                level={state.level}
                user={state.currentUser.handle}
                requestInsight={requestInsight}
                userEntries={state.userEntries}
                userInsight={state.currentUserInsight}
                dismissNewLessonNotification={
                  dismissNewLessonNotification
                }
                newLessonNotification={state.newLessonNotification}
                powerEntries={countPowerEntries(state.userEntries)}
              />
              <div>
                <br />
                <QuestionList
                  ansQuestion={ansQuestion}
                  level={state.level}
                  questions={state.organizedQuestionsByTime}
                  userEntries={state.userEntries}
                  setAnswer={setAnswer}
                  answer={state.answer}
                  addUserGoal={addUserGoal}
                  currentUserId={state.currentUser}
                  answeredGoals={answeredGoals(
                    state.userEntries,
                    state.currentUser
                  )}
                />
                <br />

                {state.userEntries && state.userEntries.length >= 1 && (
                  <Wall
                    userEntries={state.userEntries}
                    questions={state.questionsArray}
                  />
                )}
              </div>
            </section>
          )}
        </Container>
      </Parallax>
    </div>
  );
}
