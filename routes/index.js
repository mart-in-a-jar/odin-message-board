var express = require("express");
const Message = require("../models/Message");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
    const messages = await readFromDb();
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    pushToDb(req.body);
    res.redirect("/");
});

const readFromDb = async () => {
    try {
        return await Message.find();
    } catch (error) {
        console.error(error.message);
    }
};

const pushToDb = async (data) => {
    const { message, name } = data;
    try {
        const res = await Message.create({
            text: message,
            user: name,
        });
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = router;
