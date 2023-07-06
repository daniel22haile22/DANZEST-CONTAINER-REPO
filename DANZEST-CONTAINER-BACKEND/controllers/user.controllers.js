/** TODO -> Signup
 * check if 
     - The admin is already exist and should be one admin account. If the admin is exist throw an error - admin is already exist otherwise admin is successfully registered .
     - The regular user is exist. ifExist, throw an error message. Otherwise, user is successfully registered.
     NB: 
     - hashedPassword and upload profilePicture will be done on middleware and pass into routes
     - The admin should be unique and one account allowed to create.
     - The regular user should be unique and can be multiple user account created.
     
*/

const User = require("../models/user.models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const generateDzID = Math.floor(Math.random() * 9000) + 1000;
    const {
      firstname,
      middlename,
      lastname,
      email,
      password,
      // profilePicture,
      role,
    } = req.body;

    // Generate initials from first name and last name
    const firstNameInitial = firstname.charAt(0).toUpperCase();
    const lastNameInitial = lastname.charAt(0).toUpperCase();

    // Create the dzID by concatenating initials and the generated number
    const concatenated_DzID = `${firstNameInitial}${lastNameInitial}${generateDzID}`;

    // Check if an admin already exists
    const adminExists = await User.exists({ role: "admin" });

    if (role === "admin") {
      // If an admin already exists, return an error
      if (adminExists) {
        return res.status(400).json({ message: "Admin already exists" });
      }

      // Create a new admin user
      const adminUser = new User({
        firstname,
        middlename,
        lastname,
        email,
        password,
        role,
        dzID: concatenated_DzID,
        // profilePicture: req.file ? req.file.path : null,
      });
      await adminUser.save();

      return res.status(201).json({
        message: "Admin created successfully",
        data: {
          ...adminUser.toObject(),
          dzID: concatenated_DzID,
        },
      });
    } else {
      // Create a new regular user
      const user = new User({
        firstname,
        middlename,
        lastname,
        email,
        password,
        role,
        dzID: concatenated_DzID,
        // profilePicture: req.file ? req.file.path : null,
      });
      await user.save();

      return res.status(201).json({
        message: "User created successfully",
        data: {
          ...user.toObject(),
          dzID: concatenated_DzID,
        },
        // dzID: concatenated_DzID,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // Use findOne with email as a query object

    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        dzID: user.dzID,
        email: user.email,
        password: user.password,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION } 
    );

    console.log("token", token);

    return res.status(200).json({
      status: "success",
      message: "You're successfully signed in...",
      token: token,
    });
  } catch (err) {
    console.log("ERROR", err);
    return res.status(500).json({ status: "error", message: err.message });
  }
};
