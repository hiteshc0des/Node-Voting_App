const mongoose = require("mongoose");
require("dotenv").config();

// define the mongoose connection url

const mongoURL = process.env.MONGODB_URL_LOCAL;

// set up mongodb connection
mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// get the default connection
// mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

// define events listeners for database connection
db.on("connected", () => {
  console.log("connected to mongodb server");
});

// for errors
db.on("error", (err) => {
  console.log(" Mongodb connection error: ", err);
});

// for disconnection
db.on("disconnected", () => {
  console.log("  mongodb disconnected");
});

module.exports = db;
