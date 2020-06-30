import React from 'react';
import moment from "moment";


export function setTimeOfDay() {}


export function pickUserQuestions(organizedQuestions, timeOfDay, mood) {

  let time = timeOfDay;
    switch (time) {
      case "morning":
        if (mood === "happy") { 
          return organizedQuestions.morning.happy[0]
        } else return organizedQuestions.morning.sad[0]
      case "evening":
          if (mood === "happy") { 
            return organizedQuestions.evening.happy[0]
          } else return organizedQuestions.evening.sad[0]
    }

}