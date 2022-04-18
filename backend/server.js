const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8800;

dotenv.config();

const users = require("./routes/api/users");
const courses = require("./routes/api/courses")
const tags = require("./routes/api/tags")
const lectures = require("./routes/api/lectures")
const path = require('path');

app.use(cors({
    origin: '*'
}));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(cors({
    origin: '*'
}));

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
const publicPath = path.join(__dirname, '../frontend/build');
app.use(express.static(publicPath));
app.use('*', express.static(publicPath));


app.use("/api/users", users);
app.use("/api/courses", courses);
app.use("/api/lectures", lectures);
app.use("/api/tags", tags);

app.listen(PORT, () => {
    console.log("Backend server is running!");
});