// Include Server Dependencies
let express = require("express");
require('dotenv').config()
let bodyParser = require("body-parser");
let logger = require("morgan");
let path = require("path");
let PORT = process.env.PORT;
let formRouter = require('./routes/formRoutes');


// Create Instance of Express
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// express needs to handle static files 
app.use(express.static("./client/public"));

app.use('/submitForm',formRouter);

// express needs to get all routes to be able to handle react router
let file = path.resolve("./client/public/index.html");
app.get('*', function (req, res, next) {
    res.sendFile(file);
    console.log(file);
});

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log(process.env.PORT, 'THIS IS PROCESS PORT');
});