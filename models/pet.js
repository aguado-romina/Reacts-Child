const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  currentUser: {
    type: String, 
    required: true,
  },
  puppyParent: {
    type: String,
    required: true,
  },
  puppyName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const Puppy = mongoose.model("Puppy", petSchema);

module.exports = Puppy;
