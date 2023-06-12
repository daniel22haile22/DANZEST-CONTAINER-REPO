const mongoose = require("mongoose");

// Contact Us Schema
const contactUsSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Terms And Conditions Schema
const termsAndConditionsSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Home Page Schema
const homePageSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

// About Us Schema
const aboutUsSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Disclaimers Schema
const disclaimersSchema = mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const contactUs = mongoose.model("ContactUs", contactUsSchema);
const termsAndConditions = mongoose.model(
  "TermsAndConditions",
  termsAndConditionsSchema
);
const homePage = mongoose.model("HomePage", homePageSchema);
const disclaimers = mongoose.model("Disclaimers", disclaimersSchema);
const aboutUs = mongoose.model("AboutUs", aboutUsSchema);

module.exports = {
  aboutUs,
  disclaimers,
  homePage,
  termsAndConditions,
  contactUs,
  aboutUs,
};
