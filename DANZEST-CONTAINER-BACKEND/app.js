const express = require('express');
const cors = require('cors');
const signupRoutes = require("./routes/userSignup.routes");
const initiateMyMongoServer = require("./config/database");
require("dotenv").config();

const app = express();

//db connection
initiateMyMongoServer();

const PORT = 8080;
app.use(express.json())
app.use(cors());


// Use the middleware for file upload
// app.use(uploadMiddleware);

// Register your routes
app.use('/api', signupRoutes);

// Other route handlers and middleware

app.listen(PORT, ()=> console.log('listening on port - ', PORT))

