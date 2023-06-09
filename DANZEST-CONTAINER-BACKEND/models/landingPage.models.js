const mongoose = require("mongoose");

// Contact Us Schema
const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Terms And Conditions Schema
const termsAndConditionsSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Home Page Schema
const homePageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

// About Us Schema
const aboutUsSchema = new mongoose.Schema({
  // Define the fields for the About Us page
});

// Disclaimers Schema
const disclaimersSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const LandingPage = mongoose.model("LandingPage", {
  ContactUs: contactUsSchema,
  TermsAndConditions: termsAndConditionsSchema,
  HomePage: homePageSchema,
  AboutUs: aboutUsSchema,
  Disclaimers: disclaimersSchema,
});

module.exports = LandingPage;
