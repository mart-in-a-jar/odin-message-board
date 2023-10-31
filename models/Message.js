const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    added: {
        type: Date,
        default: Date.now,
        required: true,
        immutable: true,
    },
});

module.exports = mongoose.model("messages", MessageSchema);
