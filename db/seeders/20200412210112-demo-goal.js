'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('goals', [{
      id:1,
      question: 'What are your top 3 priorities today, and why is each one important?',
      suggestion: 'How do these tie into your bigger goals?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:2,
      question: 'What is one small thing you can do to brighten someone else\'s day today?',
      suggestion: 'You can make the world a brighter place',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:3,
      question: 'Fast-forward to your retirement. What advice would "future you" give you today?',
      suggestion: 'Maybe some perspective on your current priorities or negative beliefs',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      question: 'What is one thing that you need to say "no" to more often?',
      suggestion: 'Avoid draining time and energy where you don\'t need to',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:5,
      question: 'What would you do differently with a bit of extra motivation?',
      suggestion: 'The world is your oyster',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      question: 'What attitude could most improve your life right now?',
      suggestion: 'Reframe a situation that you\'re struggling with',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:7,
      question: 'Identify one personal value that\'s important to you. How will you embody that value today?',
      suggestion: 'What will that look like?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:8,
      question: 'If you had an extra 30 minutes today, how would you spend it?',
      suggestion: 'Reflect on your schedule and priorities',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      question: 'What would you do differently if today was your last day?',
      suggestion: 'Get the most out of your day',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      question: 'What do you want to be proud of at the end of today?',
      suggestion: 'Set a goal, big or small that you can achieve today',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:11,
      question: 'What have you been avoiding or putting off?',
      suggestion: 'Does it need to get done?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:12,
      question: 'What\'s on your mind?',
      suggestion: 'Use this space for ideas, plans, or anything else you\'d like',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:13,
      question: 'What can you look forward to today?',
      suggestion: 'Cultivate gratitude',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:14,
      question: 'Imagine you are being too hard on yourself. What do you notice?',
      suggestion: 'Negative self-talk often comes from believing that you cannot change',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:15,
      question: 'What\'s one thing that you can accomplish in the next 30 minutes?',
      suggestion: 'It might feel good to cross something off your list',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:16,
      question: 'What would a great day look like?',
      suggestion: 'What actions can bring you closer to that?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:17,
      question: 'Fast-forward to the future when you\'re retired. What advice would you give yourself today?',
      suggestion: 'This might be some perspective on your priorities or negative beliefs',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:18,
      question: 'What negative thoughts (self-talk) are going through your mind about the day ahead?',
      suggestion: 'Identify, then reframe these thoughts into something positive',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:19,
      question: 'How can you be kinder to yourself today?',
      suggestion: 'Take a moment for self-compassion and gratitude',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:20,
      question: 'What might stress you out today?',
      suggestion: 'What would be a good way to handle that situation?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:21,
      question: 'Identify one personal value that\'s important to you. How will you embody that value today?',
      suggestion: 'What will that look like?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:22,
      question: 'When you have a negative thought, what is the first thing you do?',
      suggestion: 'Think of an example',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:23,
      question: 'How can you apply a growth mindset today?',
      suggestion: 'What would change in your thoughts and behaviour?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:24,
      question: 'What\'s on your mind?',
      suggestion: 'Use this space for ideas, plans, or anything else you\'d like',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:25,
      question: 'How did your day go?',
      suggestion: 'Discuss some highlights and things you want to improve',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:26,
      question: 'What advice would you give yourself when you feel less motivated?',
      suggestion: 'What are some lessons you can apply?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:27,
      question: 'What choices are you proud of today?',
      suggestion: 'What was the result?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:28,
      question: 'Where did you apply a growth mindset today?',
      suggestion: 'Did you take on a challenge or try something new?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:29,
      question: 'What could you have done better today?',
      suggestion: 'Where can you improve?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:30,
      question: 'What are you grateful for?',
      suggestion: 'Cultivate some gratitude',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:31,
      question: 'If you could change one choice from today, what would it be?',
      suggestion: 'Negative self-talk often comes from believing that you cannot change',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:32,
      question: 'What are the long-term goals you need to keep in mind?',
      suggestion: 'Is everything else in your day more important than doing this?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:33,
      question: 'When did you feel the most in control of your emotions?',
      suggestion: 'What\'s it like when you notice you can control how you feel?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:34,
      question: 'When did you feel the most motivated and productive today?',
      suggestion: 'What was it like?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:35,
      question: 'What thoughts and actions helped you push forward today?',
      suggestion: 'Reinforce that mindset.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:36,
      question: 'What\'s on your mind?',
      suggestion: 'Use this space for ideas, plans, or anything else you\'d like',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:37,
      question: 'What are you grateful for?',
      suggestion: 'Even the little things are important...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:38,
      question: 'What can you do differently tomorrow?',
      suggestion: 'Think about the choices that will impact your day',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:39,
      question: 'Talk about your mood today. How did it impact your thoughts?',
      suggestion: 'How you feel impacts how you think, but the opposite is also true',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:40,
      question: 'Looking back on today, what advice would have been helpful?',
      suggestion: 'This advice might help you in the future, too',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:41,
      question: 'Which actions or choices today moved you toward your bigger goals?',
      suggestion: 'It can be as simple as putting on your shoes.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:42,
      question: 'What are some positive things that happened today?',
      suggestion: 'Reframe your day to focus on the positive',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:43,
      question: 'How could you have been kinder to yourself today?',
      suggestion: 'Cultivate self-compassion',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:44,
      question: 'What negative thoughts or behavior patterns came up today?',
      suggestion: 'Noticing when it happens is the first step to changing it',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:45,
      question: 'What did you today to recharge?',
      suggestion: 'Self-care is an important habit for peak performance',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:46,
      question: 'When you had a negative or unproductive thought today, what did you do?',
      suggestion: 'Thoughts can impact how you feel and act',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:47,
      question: 'What did you accomplish today?',
      suggestion: 'Accomplishments can be big or small',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:48,
      question: 'What\'s on your mind?',
      suggestion: 'Use this space for ideas, plans, or anything else you\'d like',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
