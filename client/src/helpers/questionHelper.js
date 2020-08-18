import React from "react";
import moment from "moment";

export function setTimeOfDay(currentTime) {
  console.log("CURRENT TIME::, ", currentTime);

  console.log("MOMENT: ", moment({ hour: 5, minute: 59 }));
  if (
    moment(currentTime).isBetween(
      moment({ hour: 5 }),
      moment({ hour: 16, minute: 59 })
    )
  ) {
    console.log("MOOOOMMMEENTT: ", "morning");
    return "morning";
  } else return "evening";
}

export function pickUserQuestions(organizedQuestions, timeOfDay, mood) {
  let time = timeOfDay;
  switch (time) {
    case "morning":
      if (mood === "happy") {
        return organizedQuestions.morning.happy[0];
      } else return organizedQuestions.morning.sad[0];
    case "evening":
      if (mood === "happy") {
        return organizedQuestions.evening.happy[0];
      } else return organizedQuestions.evening.sad[0];
  }
}

export function countPowerEntries(answers) {
  let count = 0;
  answers.forEach(answerObj =>
    answerObj.answer.split(" ").length > 40 ? count++ : ""
  );
  console.log("COUNT", count);
  return count;
}

export function organizeQuestionsByTime(questions, timeOfDay) {
  let dividedQuestions = {
    morning: {
      happy: [],
      sad: []
    },
    evening: {
      happy: [],
      sad: []
    }
  };

  dividedQuestions.morning.happy.push(
    randomizeQuestions(questions.slice(0, 12))
  );
  dividedQuestions.morning.sad.push(
    randomizeQuestions(questions.slice(12, 24))
  );

  dividedQuestions.evening.happy.push(
    randomizeQuestions(questions.slice(24, 36))
  );
  dividedQuestions.evening.sad.push(
    randomizeQuestions(questions.slice(36, 48))
  );

  return dividedQuestions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function randomizeQuestions(questions) {
  const firstGoal = questions[0];
  const lastGoal = questions[questions.length - 1];
  let shufflingQuestions = questions.slice(1, questions.length - 1);
  shuffleArray(shufflingQuestions);

  shufflingQuestions.unshift(firstGoal);
  shufflingQuestions.push(lastGoal);
  console.log("RANDOMIZED LIST: ", shufflingQuestions);
  return shufflingQuestions;
}

export const questions = {
  happyMorning: [
    {
      id: 1,
      question:
        "What are your top 3 priorities today, and why is each one important?",
      suggestion: "How do these tie into your bigger goals?"
    },
    {
      id: 2,
      question:
        "What is one small thing you can do to brighten someone else's day today?",
      suggestion: "You have the power to make the world a brighter place"
    },
    {
      id: 3,
      question:
        "If the best version of you were here right now, which of your thoughts or attitudes would they challenge?",
      suggestion:
        "This might be some perspective on your priorities or negative beliefs"
    },
    {
      id: 4,
      question: 'What is one thing that you need to say "no" to more often?',
      suggestion: "This might be requests from others, or a habit"
    },
    {
      id: 5,
      question:
        "How would your day be different if you felt that you could push yourself harder today?",
      suggestion:
        "Who might be counting on you to be at your best? What can you do to support them?"
    },
    {
      id: 6,
      question:
        "What new belief or attitude could most improve your life right now?",
      suggestion: "What would be the best way to handle it?"
    },
    {
      id: 7,
      question:
        "Identify one personal value that's important to you. What does it look like, and how will you embody that value today?",
      suggestion: "What are some things that might be holding you back?"
    },
    {
      id: 8,
      question: "If you had an extra 30 minutes today, how would you spend it?",
      suggestion: "Why are you unable to fit that into your schedule?"
    },
    {
      id: 9,
      question: "When are you most likely to let yourself down today?",
      suggestion: "Give some words of encouragement or advice for future you..."
    },
    {
      id: 10,
      question: "What do you want to be proud of at the end of the day?",
      suggestion: "A potential mentor, or just friend/family "
    },
    {
      id: 11,
      question: "What have you been avoiding or putting off?",
      suggestion: "Use this space for ideas, plans, or anything else you'd like"
    },
    {
      id: 12,
      question: "What's on your mind?",
      suggestion: "Use this space for ideas, plans, or anything else you'd like"
    }
  ],

  sadMorning: [
    {
      id: 13,
      question: "What can you look forward to today?",
      suggestion: "What are some lessons you can apply?"
    },
    {
      id: 14,
      question:
        "Imagine you are being too hard on yourself. What do you notice?",
      suggestion:
        "Negative self-talk often comes from believing that you cannot change"
    },
    {
      id: 15,
      question: "What do you want?",
      suggestion:
        "Is everything else in your day more important than doing this?"
    },
    {
      id: 16,
      question: "When do you feel the most in control of your emotions?",
      suggestion: "What's it like when you notice you can control how you feel?"
    },
    {
      id: 17,
      question:
        "If the best version of you were here right now, which of your thoughts or attitudes would they challenge?",
      suggestion:
        "This might be some perspective on your priorities or negative beliefs"
    },
    {
      id: 18,
      question:
        "What negative thoughts (self-talk) are flowing through your mind about the day ahead?",
      suggestion: "Self-talk can be changed with practice. First, identify it."
    },
    {
      id: 19,
      question: "How can you be kinder to yourself today?",
      suggestion:
        "Who might be counting on you to be at your best? What can you do to support them?"
    },
    {
      id: 20,
      question:
        "What new belief or attitude could most improve your life today?",
      suggestion: "What would be the best way to handle it?"
    },
    {
      id: 21,
      question:
        "Identify one personal value that's important to you. Define what it look like. How can you embody that value today?",
      suggestion: "What are some things that might be holding you back?"
    },
    {
      id: 22,
      question:
        "When you have a negative thought, what is the first thing you do?",
      suggestion: "As soon as you catch a negative thought, challenge it"
    },
    {
      id: 23,
      question:
        "What would be different if you suddenly got a bit of extra motivation today?",
      suggestion: "What would change in your thoughts and behaviour?"
    },
    {
      id: 24,
      question: "What's on your mind?",
      suggestion: "Use this space for ideas, plans, or anything else you'd like"
    }
  ],
  happyEvening: [
    {
      id: 25,
      question: "How do you feel about your day today?",
      suggestion: "What thoughts and actions helped to that?"
    },
    {
      id: 26,
      question:
        "What advice would you give yourself when you feel less motivated?",
      suggestion: "What are some lessons you can apply?"
    },
    {
      id: 27,
      question: "Looking back on today, what went really well?",
      suggestion: "What thoughts and actions contributed to that?"
    },
    {
      id: 28,
      question:
        "Imagine you are being too hard on yourself. What negative self-talk was going on?",
      suggestion:
        "Negative self-talk often comes from believing that you cannot change"
    },
    {
      id: 29,
      question: "What do you want?",
      suggestion:
        "Is everything else in your day more important than doing this?"
    },
    {
      id: 30,
      question: "What would you do differently if today didn't feel as hard?",
      suggestion:
        "What kind of impression to do you want to make? How can you make it?"
    },
    {
      id: 31,
      question:
        "If you could change one choice from today, what would it be, and what might be the result?",
      suggestion:
        "Negative self-talk often comes from believing that you cannot change"
    },
    {
      id: 32,
      question: "What do you want?",
      suggestion:
        "Is everything else in your day more important than doing this?"
    },
    {
      id: 33,
      question: "When do you feel the most in control of your emotions?",
      suggestion: "What's it like when you notice you can control how you feel?"
    },
    {
      id: 34,
      question:
        "If the best version of you were here right now, which of your thoughts or attitudes would they challenge?",
      suggestion:
        "This might be some perspective on your priorities or negative beliefs"
    },
    {
      id: 35,
      question:
        "What negative thoughts (self-talk) are flowing through your mind about today?",
      suggestion: "Self-talk can be changed with practice. First, identify it."
    },
    {
      id: 36,
      question: "What's on your mind?",
      suggestion: "Use this space for ideas, plans, or anything else you'd like"
    }
  ],

  sadEvening: [
    {
      id: 37,
      question: "Looking back on your day, what are you grateful for?",
      suggestion: "What would be the best way to handle it?"
    },
    {
      id: 38,
      question:
        "Identify one personal value that's important to you. What does it look like when you fully embody that value?",
      suggestion: "What are some things that might be holding you back?"
    },
    {
      id: 39,
      question: "What negative or unhelpful moods did you experience today?",
      suggestion: "Talk about the sitiation and your thoughts at the time"
    },
    {
      id: 40,
      question:
        "What will you need to hear when you are most likely to let yourself down today?",
      suggestion: "Some words of encouragement or advice for future you..."
    },
    {
      id: 41,
      question: "Which actions move you toward what you want?",
      suggestion:
        "just putting on your running shoes can be a step in the right direction"
    },
    {
      id: 42,
      question:
        "What negative thoughts (self-talk) are flowing through your mind about today?",
      suggestion: "Self-talk can be changed with practice. First, identify it."
    },
    {
      id: 43,
      question: "How could you have been kinder to yourself today?",
      suggestion:
        "Who might be counting on you to be at your best? What can you do to support them?"
    },
    {
      id: 44,
      question: "What thoughts or beliefs about yourself?",
      suggestion: "What would be the best way to handle it?"
    },
    {
      id: 45,
      question:
        "Identify one personal value that's important to you. What does it look like, and how can you embody that value today?",
      suggestion: "What are some things that might be holding you back?"
    },
    {
      id: 46,
      question:
        "When you have a negative thought, what is the first thing you do?",
      suggestion: "Why are you unable to fit that into your schedule?"
    },
    {
      id: 47,
      question:
        "How would you feel about today if you had no expectations from yourself or from others?",
      suggestion: "Are you setting the bar too high for yourself?"
    },
    {
      id: 48,
      question: "What's on your mind?",
      suggestion: "Use this space for ideas, plans, or anything else you'd like"
    }
  ]
};
