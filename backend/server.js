const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const bodyParser = require("body-parser");

dotenv.config();

const users = require("./routes/api/users");
const courses = require("./routes/api/courses")
const tags = require("./routes/api/tags")

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
//middleware
app.use(bodyParser.json());
console.log(process.env.MONGO_URL)
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
app.use("/api/courses", courses);
app.use("/api/tags", tags);

app.listen(8800, () => {
    console.log("Backend server is running!");
});