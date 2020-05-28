const express = require("express");
let router = express.Router();
let db = require('../db/models/index');


const { doesEmailExist } = require("./routeHelpers/userHelpers");

  //Set cookies


  //get all users
  router.post("/", (req, res) => {
   console.log("REQ: ", req.body);
   console.log("REQ: ", req.body.email);
   console.log("HIT POST ROUTE LOGIN: ", req.body.email);

    const email = req.body.email;
    const password = req.body.password;


    //res.send(email)


    db.user
      .findAll()
      .then(users => {
        let retrievedUsers = users.map(user => user.dataValues)
        //res.send(users)
        doesEmailExist(email, retrievedUsers);
      })
      .then(x => res.send("Login response: ", x))
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router;
