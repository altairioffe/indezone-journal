const express = require('express');
const router = express.Router();
module.exports = () => {
  //Reset cookies
  router.post('/',(req,res) => {
    console.log("HITTTTT LOGOUT ROUTE")
    req.session = null;
    res.json("successfully logged out");
  });

    return router;  
}