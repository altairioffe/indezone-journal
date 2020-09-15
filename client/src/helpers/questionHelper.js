import moment from "moment";

export function setTimeOfDay(currentTime) {
  if (
    moment(currentTime).isBetween(
      moment({ hour: 5 }),
      moment({ hour: 16, minute: 59 })
    )
  ) {
    return "morning";
  } else return "evening";
}

export function pickUserQuestions(timeOfDay, mood) {
  let time = timeOfDay;
  const organizedQuestions = organizeQuestionsByTime(questions);

  switch (time) {
    case "morning":
      if (mood === "happy") {
        return organizedQuestions.morning.happy[0];
      } else return organizedQuestions.morning.sad[0];
    case "evening":
      if (mood === "happy") {
        return organizedQuestions.evening.happy[0];
      } else return organizedQuestions.evening.sad[0];
    default:
      return organizedQuestions.morning.happy[0];
  }
}

export function countPowerEntries(answers) {
  let count = 0;
  answers.forEach(answerObj =>
    answerObj.answer.split(" ").length > 40 ? count++ : ""
  );
  return count;
}

export function organizeQuestionsByTime(questions) {
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
  return shufflingQuestions;
}

export const questions = [
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
    suggestion: "You can make the world a brighter place"
  },
  {
    id: 3,
    question:
      'Fast-forward to your retirement. What advice would "future you" give you today?',
    suggestion:
      "Maybe some perspective on your current priorities or negative beliefs"
  },
  {
    id: 4,
    question: 'What is one thing that you need to say "no" to more often?',
    suggestion: "Avoid draining time and energy where you don't need to"
  },
  {
    id: 5,
    question: "What would you do differently with a bit of extra motivation?",
    suggestion: "The world is your oyster"
  },
  {
    id: 6,
    question: "What attitude could most improve your life right now?",
    suggestion: "Reframe a situation that you're struggling with"
  },
  {
    id: 7,
    question:
      "Identify one personal value that's important to you. How will you embody that value today?",
    suggestion: "What will that look like?"
  },
  {
    id: 8,
    question: "If you had an extra 30 minutes today, how would you spend it?",
    suggestion: "Reflect on your schedule and priorities"
  },
  {
    id: 9,
    question: "If today was your last day, what would you do differently?",
    suggestion: "Get the most out of your day"
  },
  {
    id: 10,
    question: "What do you want to be proud of at the end of today?",
    suggestion: "Set a goal, big or small that you can achieve today"
  },
  {
    id: 11,
    question: "What have you been procrastinating on or avoiding?",
    suggestion: "Why does it matter?"
  },
  {
    id: 12,
    question: "What's on your mind?",
    suggestion:
      "Use this space for ideas, insights, or anything else you'd like"
  },
  {
    id: 13,
    question: "What can you look forward to today?",
    suggestion: "Cultivate gratitude"
  },
  {
    id: 14,
    question:
      "Consider how you're being too hard on yourself. What do you notice?",
    suggestion:
      "High expectations can de-motivate you if they don't feel attainable"
  },
  {
    id: 15,
    question:
      "What's one thing that you can accomplish in the next 30 minutes?",
    suggestion: "It might feel good to cross something off your list"
  },
  {
    id: 16,
    question: "What would a great day look like?",
    suggestion: "What actions can bring you closer to that?"
  },
  {
    id: 17,
    question:
      "Fast-forward to the future when you're retired. What advice would you give yourself today?",
    suggestion:
      "This might be some perspective on your priorities or negative beliefs"
  },
  {
    id: 18,
    question:
      "What negative thoughts (self-talk) are going through your mind about the day ahead?",
    suggestion: "Identify, then reframe these thoughts into something positive"
  },
  {
    id: 19,
    question: "How can you be kinder to yourself today?",
    suggestion: "Take a moment for self-compassion and gratitude"
  },
  {
    id: 20,
    question: "What might stress you out today?",
    suggestion: "What would be a good way to handle that situation?"
  },
  {
    id: 21,
    question:
      "Identify one personal value that's important to you. How will you embody that value today?",
    suggestion: "What will that look like?"
  },
  {
    id: 22,
    question:
      "When you have a negative thought, what is the first thing you do?",
    suggestion: "Think of an example"
  },
  {
    id: 23,
    question: "What's a situation where you can apply a growth mindset today?",
    suggestion: "Describe your thoughts and actions in that mindset"
  },
  {
    id: 24,
    question: "What's on your mind?",
    suggestion:
      "Use this space for ideas, insights, or anything else you'd like"
  },
  {
    id: 25,
    question: "How did your day go?",
    suggestion: "Discuss some highlights and things you want to improve"
  },
  {
    id: 26,
    question:
      "What advice would you give yourself when you feel less motivated?",
    suggestion: "What are some lessons you can apply?"
  },
  {
    id: 27,
    question: "What choices are you proud of today?",
    suggestion: "What was the result?"
  },
  {
    id: 28,
    question: "Where did you apply a growth mindset today?",
    suggestion: "Did you take on a challenge or try something new?"
  },
  {
    id: 29,
    question: "What could you have done better today?",
    suggestion: "Where can you improve?"
  },
  {
    id: 30,
    question: "What are you grateful for?",
    suggestion: "Cultivate some gratitude"
  },
  {
    id: 31,
    question: "If you could change one choice from today, what would it be?",
    suggestion:
      "Negative self-talk often comes from believing that you cannot change"
  },
  {
    id: 32,
    question: "What are the long-term goals you need to keep in mind?",
    suggestion: "Is everything else in your day more important than doing this?"
  },
  {
    id: 33,
    question: "When did you feel the most in control of your emotions?",
    suggestion: "What's it like when you notice you can control how you feel?"
  },
  {
    id: 34,
    question: "When did you feel the most motivated and productive today?",
    suggestion: "What was it like?"
  },
  {
    id: 35,
    question: "What thoughts and actions helped you push forward today?",
    suggestion: "Reinforce that mindset."
  },
  {
    id: 36,
    question: "What's on your mind?",
    suggestion:
      "Use this space for ideas, insights, or anything else you'd like"
  },
  {
    id: 37,
    question: "What are you grateful for?",
    suggestion: "Even the little things are important..."
  },
  {
    id: 38,
    question: "What can you do differently tomorrow?",
    suggestion: "Think about the choices that will impact your day"
  },
  {
    id: 39,
    question: "Talk about your mood today. How did it impact your thoughts?",
    suggestion:
      "How you feel impacts how you think, but the opposite is also true"
  },
  {
    id: 40,
    question: "Looking back on today, what advice would have been helpful?",
    suggestion: "This advice might help you in the future, too"
  },
  {
    id: 41,
    question:
      "Which actions or choices today moved you toward your bigger goals?",
    suggestion: "It can be as simple as putting on your shoes."
  },
  {
    id: 42,
    question: "What are some positive things that happened today?",
    suggestion: "Reframe your day to focus on the positive"
  },
  {
    id: 43,
    question: "How could you have been kinder to yourself today?",
    suggestion: "Cultivate self-compassion"
  },
  {
    id: 44,
    question: "What negative thoughts or behavior patterns came up today?",
    suggestion: "Noticing when it happens is the first step to changing it"
  },
  {
    id: 45,
    question: "What did you do today to recharge?",
    suggestion: "Self-care is an important habit for peak performance"
  },
  {
    id: 46,
    question:
      "When you had a negative or unproductive thought today, what did you do?",
    suggestion: "Thoughts can impact how you feel and act"
  },
  {
    id: 47,
    question: "What did you accomplish today?",
    suggestion: "Accomplishments can be big or small"
  },
  {
    id: 48,
    question: "What's on your mind?",
    suggestion:
      "Use this space for ideas, insights, or anything else you'd like"
  }
];
