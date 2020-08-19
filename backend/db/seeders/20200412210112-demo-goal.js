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
      question: 'If the best version of you were here right now, which of your thoughts or attitudes would they challenge?',
      suggestion: 'Maybe some perspective on your priorities or negative beliefs',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:4,
      question: 'What is one thing that you need to say "no" to more often?',
      suggestion: 'Are you draining time and energy where you don\'t need to?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:5,
      question: 'How would your day be different if you felt that you could push yourself harder today?',
      suggestion: 'Who might be counting on you to be at your best? What can you do to support them?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:6,
      question: 'What new belief or attitude could most improve your life right now?',
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
      suggestion: 'Why are you unable to fit that into your schedule?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:9,
      question: 'When do you expect your willpower or motivation will be at its lowest today?',
      suggestion: 'Give some words of encouragement or advice for future you...',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:10,
      question: 'What do you want to be proud of at the end of today?',
      suggestion: 'Set a goal, big or small',
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
      question: 'What will you do to recharge today?',
      suggestion: 'Schedule a nap, mindful walk, or whatever works best for you',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:16,
      question: 'When do you feel the most in control of your emotions?',
      suggestion: 'What changes when you notice you can control how you feel?',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:17,
      question: 'If the best version of you were here right now, what would they tell you?',
      suggestion: 'This might be some perspective on your priorities or negative beliefs',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:18,
      question: 'What negative thoughts (self-talk) are going through your mind about the day ahead?',
      suggestion: 'Self-talk can be changed with practice. First, identify it as it happens.',
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
      question: 'What new belief or attitude could most improve your life today?',
      suggestion: 'What would be the best way to handle it?',
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
      suggestion: 'Cultivate some gratitude...',
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
      question: 'When do you feel the most in control of your emotions?',
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
      suggestion: 'Re-frame your day.',
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
      question: 'When you had a negative or unproductive thought today, what was the first thing you did?',
      suggestion: 'With practice, you can interrupt and change these thoughts as they happen',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id:47,
      question: 'Did you achieve your goals today?',
      suggestion: 'Set expectations that are realistic and move you forward',
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
