const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");

dotenv.config();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
//middleware
app.use(bodyParser.json());
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.listen(8800, () => {
    console.log("Backend server is running!");
});