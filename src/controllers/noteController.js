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

const getAllNotes = (req, res) => {
    const notes = noteService.getAllNotes();

    res.json({
        message: "Notes fetched successfully",
        data: notes,
    });
};

module.exports = {
    createNote,
    getAllNotes,
};