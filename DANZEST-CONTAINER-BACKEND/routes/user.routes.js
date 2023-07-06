const express = require("express");
const { signup } = require("../controllers/user.controllers");
const { login } = require("../controllers/user.controllers");
// const upload = require("../middleware/upload");
const { hashPassword } = require("../middleware/hashPassword");

const router = express.Router();

// router.post("/signup", upload, hashPassword, signup);

//POST
http://localhost:8080/user/signup

router.post("/signup", hashPassword, signup);

//POST
http://localhost:8080/user/login
router.post("/login", login);

module.exports = router;
