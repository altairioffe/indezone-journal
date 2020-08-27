const express = require("express");
const router = express.Router();

//Clear cookies
router.post("/", (req, res) => {

  res.clearCookie("user_sid");
  res.json("successfully logged out");
});

module.exports = router;
