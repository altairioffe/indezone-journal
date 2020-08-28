const express = require("express");
let router = express.Router();
let db = require("../db/models/index");
let bcrypt = require ('bcryptjs');
let session = require('express-session');

const { doesEmailExist } = require("./routeHelpers/userHelpers");

//get all users
router.post("/", (req, res) => {

  const email = req.body.data.email;
  const password = req.body.data.password;


  db.user
    .findAll()
    .then(users => {
      let retrievedUsers = users.map(user => user.dataValues); 
      //res.send(users)
      if (!doesEmailExist(email, retrievedUsers)) {
       // res.status(400).send({error: "email does not exist"})
        return null
      } else {
        return doesEmailExist(email, retrievedUsers); //AUTHENTICATE EMAIL
      }
    })
    .then(foundUser => {
      if (foundUser === null) {
        return res.status(400).send({error: "email does not exist"})
      }
      if (bcrypt.compareSync(password, foundUser.password) || req.session.user.password === foundUser.password) {
        let userData = foundUser;
        !req.session.user ? req.session.user = userData : ""
        res.status(200).send(userData);
      } 
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
