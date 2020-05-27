const express = require('express');
const router = express.Router();
const { doesEmailExist } = require('./routeHelpers/userHelpers')


module.exports = () => {
   //Set cookies



   //get all users
   router.post("/", (req, res) => {
    let email = req.body.data.email;

    console.log("HIT POST ROUTE LOGIN: ", rez.body.data.email)
    db.user.findAll().then(users => {
      doesEmailExist(email, users)})
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

   
  return router;  
}