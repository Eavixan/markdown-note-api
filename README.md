# Markdown Note API

A simple RESTful API for creating, uploading, listing, rendering, and grammar-checking Markdown notes.

This project is built to practice:

* REST API development
* File upload handling
* Markdown parsing and rendering
* Basic grammar checking
* Local file storage
* Git and GitHub workflow

---

## Features

* Create a note by sending Markdown text
* Upload `.md` files
* List all saved notes
* Get a single note by ID
* Render a Markdown note as HTML
* Check simple grammar issues in note text

---

## Tech Stack

* Node.js
* Express.js
* Multer
* Marked
* Nodemon

---

## Project Structure

```txt
markdown-note-api/
├─ src/
│  ├─ server.js
│  ├─ routes/
│  │  ├─ noteRoutes.js
│  │  └─ grammarRoutes.js
│  ├─ controllers/
│  │  ├─ noteController.js
│  │  └─ grammarController.js
│  └─ services/
│     ├─ noteService.js
│     └─ grammarService.js
├─ notes/
├─ uploads/
├─ package.json
├─ .gitignore
└─ README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/markdown-note-api.git
```

Go into the project folder:

```bash
cd markdown-note-api
```

Install dependencies:

```bash
npm install
```

---

## Run the Project

Start the development server:

```bash
npm run dev
```

The server will run at:

```txt
http://localhost:5000
```

---

## API Endpoints

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "Markdown Note API is running"
}
```

---

## Notes API

### Create a Note

```http
POST /api/notes
```

Request body:

```json
{
  "title": "My First Note",
  "content": "# Hello Markdown\nThis is my first note."
}
```

Response:

```json
{
  "message": "Note created successfully",
  "data": {
    "id": "example-note.md",
    "title": "My First Note",
    "fileName": "example-note.md"
  }
}
```

---

### List All Notes

```http
GET /api/notes
```

Response:

```json
{
  "message": "Notes fetched successfully",
  "data": [
    {
      "id": "example-note.md",
      "fileName": "example-note.md"
    }
  ]
}
```

---

### Get a Single Note

```http
GET /api/notes/:id
```

Example:

```http
GET /api/notes/example-note.md
```

Response:

```json
{
  "message": "Note fetched successfully",
  "data": {
    "id": "example-note.md",
    "content": "# Hello Markdown\nThis is my first note."
  }
}
```

---

### Render Note as HTML

```http
GET /api/notes/:id/html
```

Example:

```http
GET /api/notes/example-note.md/html
```

Response:

```html
<h1>Hello Markdown</h1>
<p>This is my first note.</p>
```

---

### Upload Markdown File

```http
POST /api/notes/upload
```

Form data:

```txt
file: your-note.md
```

Response:

```json
{
  "message": "Markdown file uploaded successfully",
  "data": {
    "id": "uploaded-note.md",
    "title": "uploaded-note",
    "fileName": "uploaded-note.md"
  }
}
```

---

## Grammar API

### Check Grammar

```http
POST /api/grammar/check
```

Request body:

```json
{
  "text": "hello, i wrote teh note  today"
}
```

Response:

```json
{
  "message": "Grammar checked successfully",
  "data": {
    "originalText": "hello, i wrote teh note  today",
    "issueCount": 3,
    "issues": [
      {
        "word": "teh",
        "message": "Possible typo",
        "suggestion": "the"
      },
      {
        "word": "i",
        "message": "Use capital I when referring to yourself",
        "suggestion": "I"
      },
      {
        "message": "Multiple spaces found",
        "suggestion": "Use a single space"
      }
    ]
  }
}
```

---

## Testing

You can test the API using:

* Thunder Client
* Postman
* Browser for `GET` endpoints
* `curl` for file upload

Example file upload using terminal:

```bash
curl.exe -X POST http://localhost:5000/api/notes/upload -F "file=@notes/example-note.md"
```

---

## GitHub Workflow

After each completed feature:

```bash
git add .
git commit -m "Your commit message"
git push
```

Example:

```bash
git add .
git commit -m "Add grammar check endpoint"
git push
```

---

## Current Project Status

Basic version completed.

Implemented:

* Express server setup
* Notes route
* Create note endpoint
* List notes endpoint
* Get note by ID endpoint
* Markdown to HTML endpoint
* Markdown file upload endpoint
* Grammar check endpoint
* README documentation

---

## Future Improvements

Possible future improvements:

* Add database storage instead of local file storage
* Add user authentication
* Add note update and delete endpoints
* Improve grammar checker with an external grammar API
* Add frontend note-taking interface
* Add validation middleware
* Add automated tests
* Add deployment

https://roadmap.sh/projects/markdown-note-taking-app
