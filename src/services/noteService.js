const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const notesDir = path.join(__dirname, "../../notes");

// Create notes folder if it does not exist
if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir);
}

const createNote = ({ title, content }) => {
    if (!title || !content) {
        throw new Error("Title and content are required");
    }

    const safeTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const fileName = `${Date.now()}-${safeTitle}.md`;
    const filePath = path.join(notesDir, fileName);

    fs.writeFileSync(filePath, content, "utf-8");

    return {
        id: fileName,
        title,
        fileName,
    };
};

const getAllNotes = () => {
    const files = fs.readdirSync(notesDir);

    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
            id: file,
            fileName: file,
        }));
};

const getNoteById = (id) => {
    const filePath = path.join(notesDir, id);

    if (!fs.existsSync(filePath)) {
        throw new Error("Note not found");
    }

    const content = fs.readFileSync(filePath, "utf-8");

    return {
        id,
        content,
    };
};

const getNoteAsHtml = (id) => {
    const note = getNoteById(id);

    const html = marked(note.content);

    return {
        id,
        html,
    };
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    getNoteAsHtml,
};