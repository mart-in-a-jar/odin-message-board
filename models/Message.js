const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    added: {
        type: Date,
        default: new Date(),
        required: true,
        immutable: true,
    },
});

module.exports = mongoose.model("messages", MessageSchema);
