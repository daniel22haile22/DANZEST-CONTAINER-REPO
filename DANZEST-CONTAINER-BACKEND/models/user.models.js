const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
  firstname: {
    type: String,
    requiered: true,
  },
  middlename: {
    type: String,
    requiered: false,
  },
  lastname: {
    type: String,
    requiered: true,
  },
  email: {
    type: String,
    requiered: true,
  },
 
  password: {
    type: String,
    requiered: true,
  },
  profilePicture: {
    type: String
  },
  role: {
    type: String,
    requiered: true,
    enum: ['admin', 'user']
  },
  dzID: {
    type: String,
    requiered: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const SignUpModel = mongoose.model('SignUp', signUpSchema);
module.exports = SignUpModel;


