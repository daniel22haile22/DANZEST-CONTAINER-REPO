const express = require("express");
const landingPageControllers = require("../controllers/landingPage.controllers");

const router = express.Router();

// Contact Us route
router.post("/contact-us", landingPageControllers.createContactUsEntry);

// Terms and Conditions route
router.post(
  "/terms-and-conditions",
  landingPageControllers.createTermsAndConditions
);

// Home Page route
router.post("/home-page", landingPageControllers.createHomePage);

// // About Us route
router.post("/about-us", landingPageControllers.createAboutUsPage);

// Disclaimers route
router.post("/disclaimers", landingPageControllers.createDisclaimersPage);

module.exports = router;
