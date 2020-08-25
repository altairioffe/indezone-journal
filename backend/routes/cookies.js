const express = require("express");
let router = express.Router();
let db = require("../db/models/index");
let bcrypt = require ('bcryptjs');
let session = require('express-session');

//Set cookies

//get all users
router.get("/", (req, res) => {
  console.log("COOOKIEES ROUTE: ", req.session);
  console.log("REQ: ", req.body.data.email);
  const credentials = req.session.user
});

module.exports = router;
