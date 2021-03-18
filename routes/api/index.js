const router = require("express").Router();
const petsRoute = require("./pets");

router.use("/profiles", petsRoute);

module.exports = router;