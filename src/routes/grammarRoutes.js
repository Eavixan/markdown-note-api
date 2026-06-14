const express = require("express");
const { checkGrammar } = require("../controllers/grammarController");

const router = express.Router();

router.post("/check", checkGrammar);

module.exports = router;