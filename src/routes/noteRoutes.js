const express = require("express");

const {
  createNote,
  getAllNotes,
  getNoteById,
  getNoteAsHtml,
} = require("../controllers/noteController");

const router = express.Router();

// GET /api/notes
// Returns all saved notes
router.get("/", getAllNotes);

router.get("/:id/html", getNoteAsHtml);

// GET /api/notes/:id
// Returns one specific note by file name
router.get("/:id", getNoteById);

// POST /api/notes
// Creates a new markdown note
router.post("/", createNote);

module.exports = router;