const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Puppy.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  find: function (req, res) {
    db.Puppy.find({ currentUser: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Puppy.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("Got a request!", req.params.id, req.body);
    db.Puppy.findOneAndUpdate({ currentUser: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log("Bad request my friends", err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    db.Puppy .findById({ _id: ObjectId(req.params.id) })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
