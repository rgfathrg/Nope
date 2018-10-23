var path = require("path");
var db = require("../models");
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../survey.html"));
  });
  app.get("/fact", function (req, res) {
    res.sendFile(path.join(__dirname, "../facts.html"));
  });
  app.get("/destination/:country", function (req, res) {
    db.Currencies.findOne({
      where: {
        country: req.params.country
      }
    }).then(function (result) {
      var results = result.dataValues;
      console.log(results);
      var hbsObject = {
        country: results.country,
        currency: results.currency,
        pair: results.pair,
        rate: results.rate
      }
      res.render("destination", hbsObject);

      const places = [
        {
          country: "Brazil",
          city: "Rio de Janeiro",
          // picSrc: [url1, url2, url3],
          alpha2: "BR"
        },
        {
          country: "France",
          city: "Paris",
          // picSrc: [url1, url2, url3],
          alpha2: "FR"
        },
        {
          country: "Peru",
          city: "Machu Picchu",
          // picSrc: [url1, url2, url3],
          alpha2: "BR"
        },
        {
          country: "Australia",
          city: "Sydney",
          // picSrc: [url1, url2, url3],
          alpha2: "AU"
        },
        {
          country: "Iceland",
          city: "Reykjavik",
          // picSrc: [url1, url2, url3],
          alpha2: "BR"
        }
      ];
    });
  });
};
