const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema ({
    petInfo: [
       {
           name: {
               type: String,
           },
           breed: {
               type: String, 
           }
       }
    ]
});

const Puppy = mongoose.model("Puppy", petSchema);

module.exports = Puppy;