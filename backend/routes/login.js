const express = require("express");
let router = express.Router();
let db = require('../db/models/index');


const { doesEmailExist } = require("./routeHelpers/userHelpers");

  //Set cookies


  //get all users
  router.post("/", (req, res) => {
   console.log("REQ: ", req.body);
   console.log("REQ: ", req.body.data.email);
  // console.log("HIT POST ROUTE LOGIN: ", req.body,data.email);

    const email = req.body.data.email;
    const password = req.body.data.password;
console.log("EMAIL: ", email)

    //res.send(email)


    db.user
      .findAll()
      .then(users => {
        let retrievedUsers = users.map(user => user.dataValues)
        //res.send(users)
       return doesEmailExist(email, retrievedUsers);
      })
      .then(result => {
        console.log("RESULT: ", result)
        return result
      })
      .then(x => x === true ? res.status(200).send(true) : res.status(500))
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router;
