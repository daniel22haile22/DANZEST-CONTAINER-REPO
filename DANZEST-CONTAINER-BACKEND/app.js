const express = require('express');
const cors = require('cors');
const signupRoutes = require("./routes/user.routes");
const initiateMyMongoServer = require("./config/database");
const landingPageRoutes = require('./routes/landingPages.routes');

require("dotenv").config();

const app = express();

//db connection
initiateMyMongoServer();

//Port number is 8080
const PORT = 8080;
app.use(express.json())
app.use(cors());


// Use the middleware for file upload
// app.use(uploadMiddleware);

// Register your routes
app.use('/api', signupRoutes);
// Landing Page routes
app.use('/api', landingPageRoutes);

// Other route handlers and middleware

app.listen(PORT, ()=> console.log('listening on port - ', PORT))

