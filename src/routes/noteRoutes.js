const express = require("express");
const { createNote, getAllNotes } = require("../controllers/noteController");

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

module.exports = router;