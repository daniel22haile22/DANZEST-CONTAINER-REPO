const bcrypt = require("bcrypt");

// Hashing middleware
const hashPassword = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Password hashing failed" });
    }
    req.body.password = hashedPassword;
    next();
  });
};

module.exports = { hashPassword };
