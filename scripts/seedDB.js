const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pet");

const petSeed = [
  {
    puppyParent: "Hello World",
    puppyName: "admin1",
    bio: "A little about me",
    breed: "A breed name",
    age: "A number that is counted",
  },
  {
    puppyParent: "Hi World",
    puppyName: "admin2",

    bio: "A lot about me",
    breed: "A breed name2",
    age: "A number that is counted+2",
  },
  {
    puppyParent: "Yello World",
    puppyName: "admin3",

    bio: "A smidge about me",
    breed: "A breed name3",
    age: "A number that is counted+3",
  },
];

db.Puppy.remove({})
  .then(() => db.Puppy.collection.insertMany(petSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
