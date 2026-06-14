const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");
const grammarRoutes = require("./routes/grammarRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/grammar", grammarRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Markdown Note API is running",
  });
});

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});