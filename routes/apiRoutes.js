var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

let destRes = "";
const places = {
  brazil : {
    country: "Brazil",
    city: "Rio de Janeiro",
    // picSrc: [url1, url2, url3],
    alpha2: "BR"
  },
  france : {
    country: "France",
    city: "Paris",
    // picSrc: [url1, url2, url3],
    alpha2: "FR"
  },
  peru : {
    country: "Peru",
    city: "Machu Picchu",
    // picSrc: [url1, url2, url3],
    alpha2: "BR"
  },
  australia : {
    country: "Australia",
    city: "Sydney",
    // picSrc: [url1, url2, url3],
    alpha2: "AU"
  },
  iceland : {
    country: "Iceland",
    city: "Reykjavik",
    // picSrc: [url1, url2, url3],
    alpha2: "BR"
  }
}
