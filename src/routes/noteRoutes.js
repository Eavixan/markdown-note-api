const express = require("express");
const multer = require("multer");

const {
  createNote,
  getAllNotes,
  getNoteById,
  getNoteAsHtml,
  uploadNote,
} = require("../controllers/noteController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

// GET /api/notes
router.get("/", getAllNotes);

// GET /api/notes/:id/html
router.get("/:id/html", getNoteAsHtml);

// GET /api/notes/:id
router.get("/:id", getNoteById);

// POST /api/notes/upload
router.post("/upload", upload.single("file"), uploadNote);

// POST /api/notes
router.post("/", createNote);

module.exports = router;