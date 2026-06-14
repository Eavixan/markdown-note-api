const noteService = require("../services/noteService");

const createNote = (req, res) => {
  try {
    const note = noteService.createNote(req.body);

    res.status(201).json({
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNote,
};