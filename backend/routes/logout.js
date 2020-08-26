const express = require("express");
const router = express.Router();

//Reset cookies

router.post("/", (req, res) => {
  console.log("HITTTTT LOGOUT ROUTE");
  // res.session = null;
  res.clearCookie("user_sid");
  res.json("successfully logged out");
});

module.exports = router;
