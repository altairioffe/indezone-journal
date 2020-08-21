const express = require("express");
let router = express.Router();
let db = require("../db/models/index");
let bcrypt = require ('bcryptjs');
let session = require('express-session');

const { doesEmailExist } = require("./routeHelpers/userHelpers");

//Set cookies

//get all users
router.post("/", (req, res) => {
  console.log("REQ: ", req.body);
  console.log("REQ: ", req.body.data.email);
  // console.log("HIT POST ROUTE LOGIN: ", req.body,data.email);

  const email = req.body.data.email;
  const password = req.body.data.password;
  console.log("EMAIL: ", email);


  db.user
    .findAll()
    .then(users => {
      console.log("FROM DB.User")
      let retrievedUsers = users.map(user => user.dataValues); 
      //res.send(users)
      if (!doesEmailExist(email, retrievedUsers)) {
        console.log("email does not exist")
       // res.status(400).send({error: "email does not exist"})
        return null
      } else {
        return doesEmailExist(email, retrievedUsers); //AUTHENTICATE EMAIL
      }
    })
    .then(foundUser => {
      if (foundUser === null) {
        console.log( "NOT FOUND USER AFTER BCRYPT COMPARE" )
        return res.status(400).send({error: "email does not exist"})
      }
      if (bcrypt.compareSync(password, foundUser.password)) {
        console.log( "***********Found USER", foundUser )
        let userData = foundUser;
        req.session.user = userData
        res.status(200).send(userData);
      } 
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
