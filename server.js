const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

// const cloudinary = require("cloudinary");
// const formData = require("express-form-data");
// const cors = require("cors");
// const { CLIENT_ORIGIN } = require("./config");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// cloudinary.config({
//   cloudName: process.env.CLOUD_NAME,
//   apiKey: process.env.API_KEY,
//   apiSecret: process.env.API_SECRET,
// });

// app.use(
//   cors({
//     origin: CLIENT_ORIGIN,
//   })
// );

// app.use(formData.parse());

// app.get("/wake-up", (req, res) => res.send("👌"));

// app.post("/image-upload", (req, res) => {
//   const values = Object.values(req.files);
//   const promises = values.map((image) =>
//     // eslint-disable-next-line implicit-arrow-linebreak
//     cloudinary.uploader.upload(image.path)
//   );

//   Promise.all(promises)
//     .then((results) => res.json(results))
//     .catch((err) => res.status(400).json(err));
// });
