const express = require("express");

const { signUp } = require("./contoller");

const router = express.Router();

router.post("/", signUp);

module.exports = router;