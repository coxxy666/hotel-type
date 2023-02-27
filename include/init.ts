const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/hotelBook", {
  useNewUrlParser: true,
});

if (err) {
  console.log("Successfully connected to database");
} else {
  console.error("Error connecting to MongoDB database");
}

module.exports = mongoose;
