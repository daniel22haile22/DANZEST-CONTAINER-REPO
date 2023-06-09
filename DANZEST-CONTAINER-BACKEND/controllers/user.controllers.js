/** TODO -> Signup
 * check if 
     - The admin is already exist and should be one admin account. If the admin is exist throw an error - admin is already exist otherwise admin is successfully registered .
     - The regular user is exist. ifExist, throw an error message. Otherwise, user is successfully registered.
     NB: 
     - hashedPassword and upload profilePicture will be done on middleware and pass into routes
     - The admin should be unique and one account allowed to create.
     - The regular user should be unique and can be multiple user account created.
     
*/

const User = require("../models/user.models"); ;

exports.signup = async (req, res) => {
  const {firstname, middlename, lastname, email, username, password, profilePicture, role} = req.body;
  
  try {
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
        username,
        password,
        role,
        // profilePicture: req.file ? req.file.path : null,
      });
      await adminUser.save();

      return res.status(201).json({ message: "Admin created successfully" });
    } else {
      // Create a new regular user
      const user = new User({
        firstname,
        middlename,
        lastname,
        email,
        username,
        password,
        role,
        // profilePicture: req.file ? req.file.path : null,
      });
      await user.save();

      return res.status(201).json({ 
        message: "User created successfully",
        user: user
       });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * TODO - Login
 * 
 */
exports.login = async (req, res) => {

}
