const express = require("express");
let router = express.Router();

const { doesEmailExist } = require("./routeHelpers/userHelpers");

  //Set cookies


  //get all users
  router.post("/", (req, res) => {
    console.log("REQ: ", req.body);
    let email = req.body.data.email;

    console.log("HIT POST ROUTE LOGIN: ", req.body.data.email);
    db.user
      .findAll()
      .then(users => {
        doesEmailExist(email, users);
      })
      .then(res => res.json(res))
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router;
