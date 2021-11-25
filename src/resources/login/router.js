const express = require("express");

const { logIn } = require("./controller");

const router = express.Router();

router.post("/", logIn)

module.exports = router;