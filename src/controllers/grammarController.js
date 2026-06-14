const grammarService = require("../services/grammarService");

const checkGrammar = (req, res) => {
    try {
        const result = grammarService.checkGrammar(req.body.text);

        res.json({
            message: "Grammar checked successfully",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    checkGrammar,
};