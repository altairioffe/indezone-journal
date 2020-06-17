let express = require("express");
let router = express.Router();
let db = require("../db/models/index");
let bcrypt = require ('bcryptjs');

// //hash password
// bcrypt.hash(password, salt, (err, hash) => {
//   // Store hash password in DB
// });




//Get users
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
  console.log("FROM BACKEND: ", req.body.data);
  let hashedPass = bcrypt.hashSync(req.body.data.password, 12)
  console.log("hashedPass: ", hashedPass);

  db.user
    .create({
      handle: req.body.data.handle,
      email: req.body.data.email,
      password: hashedPass,
      points: req.body.data.points,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    .then(users => {
      console.log("RESPONSE: USERS: ", users)
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//Update user level
router.put("/:id", (req, res) => {
  console.log(
    "HIT PUT ROUTE params: ",
    req.params,
    "HIT PUT ROUTE body: ",
    req.body
  );
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
