const express = require("express");
const router = express.Router();

//Reset cookies

router.post("/", (req, res) => {

  res.clearCookie("user_sid");
  res.json("successfully logged out");
});

module.exports = router;
