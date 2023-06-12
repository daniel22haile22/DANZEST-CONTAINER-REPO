// Import the LandingPage model
const LandingPage = require('../models/landingPage.models');

// Controller for creating a contact us entry
exports.createContactUsEntry = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactUsEntry = new LandingPage.contactUs({ name, email, message });
    await contactUsEntry.save();

    res.status(201).json({ 
      message: "Contact us entry created successfully",
      content: contactUsEntry
     });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for creating terms and conditions
exports.createTermsAndConditions = async (req, res) => {
  try {
    const { content } = req.body;

    const termsAndConditions = new LandingPage.termsAndConditions({ content });
    await termsAndConditions.save();

    res
      .status(201)
      .json({ message: "Terms and conditions created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for creating a home page
// exports.createHomePage = async (req, res) => {
//   try {
//     const { title, content, imageUrl } = req.body;

//     const homePage = new LandingPage.HomePage({ title, content, imageUrl });
//     await homePage.save();

//     res.status(201).json({ message: "Home page created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// Controller for creating an about us page
exports.createAboutUsPage = async (req, res) => {
  try {
     const { content } = req.body;

     const disclaimersPage = new LandingPage.aboutUs({ content });
     await disclaimersPage.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for creating a disclaimers page
exports.createDisclaimersPage = async (req, res) => {
  try {
    const { content } = req.body;

    const disclaimersPage = LandingPage.disclaimers({ content });
    await disclaimersPage.save();

    res.status(201).json({ message: "Disclaimers page created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
