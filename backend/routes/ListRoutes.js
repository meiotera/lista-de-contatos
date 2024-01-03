const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("sua lista");
});

module.exports = router;
