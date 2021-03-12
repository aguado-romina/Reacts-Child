const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema ({
    petInfo: [
       {
           ownerName: {
               type: String,
               required: true,
           },
           puppyName: {
               type: String,
               required: true,
           },
           puppyImage: {
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
           }
           
       }
    ]
});

const Puppy = mongoose.model("Puppy", petSchema);

module.exports = Puppy;