const express = require("express");
const { signup } = require("../controllers/userSignup.controllers");
// const upload = require("../middleware/upload");
const { hashPassword } = require("../middleware/hashPassword");

const router = express.Router();

// router.post("/signup", upload, hashPassword, signup);
router.post("/signup", hashPassword, signup);

module.exports = router;
