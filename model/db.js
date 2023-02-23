const mongoose = require("mongoose");
require("dotenv").config();
// console.log(process.env.mongoUrl)

const connection = mongoose.connect(process.env.mongoUrl);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

const flightSchema = mongoose.Schema({
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number,
});

const FlightModel = mongoose.model("flight", flightSchema);

const bookingSchema = mongoose.Schema({
  user: { type: String, ref: "User" },
  flight: { type: String, ref: "Flight" },
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
  connection,
  UserModel,
  FlightModel,
  BookingModel,
};
