let express = require("express");
let router = express.Router();
let db = require("../db/models/index");
let bcrypt = require("bcryptjs");
const { doesEmailExist } = require("./routeHelpers/userHelpers");

//Get all users
router.get("/", (req, res) => {
  db.user
    .findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Get specific user
router.get("/:id", (req, res) => {
  db.user
    .findOne({
      where: { id: req.params.id }
    })
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Create  user
router.post("/", (req, res) => {
  console.log("REGISTERRRIN******")


  //confirm email is not already in database
  db.user
    .findAll()
    .then(users => {
      let retrievedUsers = users.map(user => user.dataValues);
      //res.send(users)
      if (doesEmailExist(req.body.data.email, retrievedUsers)) {
        return res.send({ error: "email already exists" });
      } else {
        let hashedPass = bcrypt.hashSync(req.body.data.password, 12);

        db.user.create({
          handle: req.body.data.handle,
          email: req.body.data.email,
          password: hashedPass,
          points: req.body.data.points,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    })
    .then(response => res.send(response))
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

//Update user level
router.put("/:id", (req, res) => {
  db.user
    .update({ points: req.body.points }, { where: { id: req.params.id } })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
