const router = require("express").Router();
const petsRoute = require("./pets");

router.use("/", petsRoute);

module.exports = router;