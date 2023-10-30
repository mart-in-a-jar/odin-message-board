var express = require("express");
var router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello world",
        user: "Charles",
        added: new Date(),
    },
];

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    const { message, name } = req.body;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect("/");
});

module.exports = router;
