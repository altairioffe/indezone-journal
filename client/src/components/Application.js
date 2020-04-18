import React from 'react';
//import useApplicationData from '../hooks/useApplicationData'; //temporary comment to resolve merge conflicts
import {getPreviousUserGoals} from '../helpers/goalHelper';
import Wall from './Wall';
import Bio from "./Bio";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";
import "./Application.scss";
import useApplicationData from "../hooks/useApplicationData";

export default function Application() {

    
  const {
    loggedInUser,
    ansQuestion,
    state
  } = useApplicationData();
  console.log("State", state)
  
 const currentUser = "6"; //temporary change 
  
  const previousUserGoals = getPreviousUserGoals(state.userGoals,state.goals,new Date(),currentUser);

  
  const questionsArr = [
    "Someone who needs me on my A-game today is...",
    "A situation that might stress me out or trip me up today could be...",
    "If I was a high performance coach looking at my life from a high level, I would tell myself to remember that ... ... and the way that my best self would deal with that is... ",
    "The big progects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
    "The big projects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
    "I would know that today was a great success if at the end of the day I did, or felt this..."
  ];
  
  const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

  return (
    <main className="layout">
      <Navbar 
        users={ state.users }
        logUser={ loggedInUser }
        user={ state.loggedUser }
      />
      <section className="feed">
        <hr/>
        <Bio 
          bio={bio}
        />
        <hr/>
        <QuestionList 
          giveAnswer={ansQuestion}
          questions={questionsArr}
        />
        
        <hr />
        <div>
      <Wall userGoals={previousUserGoals} userId = {currentUser}/>
      </div>
      </section>
   
    

    </main>
  );
}