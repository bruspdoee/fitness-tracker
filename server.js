const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// var MONGODB_URI = "mongodb://heroku_970bsg97:howyadoin1@ds011251.mlab.com:11251/heroku_970bsg97"; 

// mongoose.connect(MONGODB_URI, { 
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(process.env.PORT || 4000, () => {
  console.log(`App running on port ${PORT}!`);
});