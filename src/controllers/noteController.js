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

const getNoteById = (req, res) => {
    try {
        const note = noteService.getNoteById(req.params.id);

        res.json({
            message: "Note fetched successfully",
            data: note,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
};