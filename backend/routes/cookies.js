const express = require("express");
let router = express.Router();
let session = require('express-session');

//Set cookies

//get all users
router.get("/", (req, res) => {
  const credentials = {email: req.session.user.email, password: req.session.user.password}
  res.send(credentials)
});

module.exports = router;
