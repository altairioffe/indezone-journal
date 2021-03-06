let express = require("express");
let router = express.Router();
let db = require("../db/models/index");

//Get user goals
router.get("/", (req, res) => {
  db.user_goal
    .findAll()
    .then(userGoals => {
      res.json(userGoals);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific user's goals
router.get("/:id", (req, res) => {
  db.user_goal
    .findAll({
      where: { user_id: req.params.id }
    })
    .then(userGoals => {
      res.json(userGoals);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

// Post specific goal
router.post("/", (req, res) => {
  db.user_goal
    .create({
      goal_id: req.body.goal_id,
      user_id: req.body.user_id,
      answer: req.body.answer,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    .then(userGoal => {
      res.json(userGoal);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Delete specific goal
router.delete("/", (req, res) => {
  db.user_goal
    .destroy({
      where: {
        createdAt: req.body.createdAt,
        user_id: req.body.user_id
      }
    })
    .then(userGoal => {
      res.json(userGoal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
