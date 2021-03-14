// let mongoose = require("mongoose");
// let db = require("../models");

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pet"
);

const petSeed = [
    {
      puppy_parent: "fred",
      puppy_name: "admin",
      breed: "bulldog",
      image: "",
      bio:
        "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
      age: "10 months"
    },
    {
      puppy_parent: "Sandra",
      puppy_name: "admin",
      breed: "",
      image: "",
      bio:
        "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
      age: "10 months"
    },
    {
      puppy_parent: "Muna",
      puppy_name: "admin",
      breed: "",
      image: "",
      bio:
        "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
      age: "10 months"
    },
];

db.Puppy
  .remove({})
  .then(() => db.Puppy.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

