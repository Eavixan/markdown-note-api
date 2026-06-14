const express = require("express");
const { createNote } = require("../controllers/noteController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Notes route is working",
  });
});

router.post("/", createNote);

module.exports = router;