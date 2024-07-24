const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("This is auth endpoint !");
  return res.send("This is auth endpoint")
});

module.exports = router;
