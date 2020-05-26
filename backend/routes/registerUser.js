const express = require('express');
const router = express.Router();
const cookieSession = require("cookie-session");

const bcrypt = require("bcrypt");


module.exports = () => {
   //Set cookies
   router.get("/", (req, res) => {
   });

   
  return router;  
}