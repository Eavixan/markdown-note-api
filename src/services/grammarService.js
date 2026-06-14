const checkGrammar = (text) => {
    if (!text) {
        throw new Error("Text is required");
    }

    const issues = [];

    if (text.includes(" teh ")) {
        issues.push({
            word: "teh",
            message: "Possible typo",
            suggestion: "the",
        });
    }

    if (text.includes(" i ")) {
        issues.push({
            word: "i",
            message: "Use capital I when referring to yourself",
            suggestion: "I",
        });
    }

    if (text.includes("  ")) {
        issues.push({
            message: "Multiple spaces found",
            suggestion: "Use a single space",
        });
    }

    return {
        originalText: text,
        issueCount: issues.length,
        issues,
    };
};

module.exports = {
    checkGrammar,
};