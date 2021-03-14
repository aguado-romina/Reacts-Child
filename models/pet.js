const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema ({
  petInfo: [
    {
      puppyParent: {
        type: String,
      },
      puppyName: {
        type: String,
      },
      puppyImage: {
        type: String,
      },
      breed: {
        type: String,
      },
      age: {
        type: String,
      }

    }
  ]
});

const Puppy = mongoose.model("Puppy", petSchema);

module.exports = Puppy;