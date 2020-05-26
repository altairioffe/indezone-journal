let express = require('express');
let router = express.Router();
let db = require('../db/models/index');

//Get users
router.get("/", (req, res) => {
  db.user.findAll().then(users => {
    res.json(users);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific user
router.get("/:id", (req, res) => {
  db.user.findOne({
    where:{id:req.params.id}}).then(users => {
    res.json(users);
  })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


//Create  user
router.post("/", (req, res) => {
  console.log("FROM BACKEND: ", req.body.data)
  db.user.create({handle:req.body.data.handle,email:req.body.data.email,password:req.body.data.password,points:req.body.data.points,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
