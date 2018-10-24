var path = require("path");
var db = require("../models");
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
<<<<<<< HEAD
  app.get("/fact", function (req, res) {
    res.sendFile(path.join(__dirname, "../facts.html"));
  });
  app.get("/destination/:country", function (req, res) {

    const places = {
      BRAZIL: {
        country: "Brazil",
        city: "Rio de Janeiro",
        // picSrc: [url1, url2, url3],
        alpha2: "BR"
      },
      FRANCE: {
        country: "France",
        city: "Paris",
        // picSrc: [url1, url2, url3],
        alpha2: "FR"
      },
      PERU: {
        country: "Peru",
        city: "Machu Picchu",
        // picSrc: [url1, url2, url3],
        alpha2: "BR"
      },
      AUSTRAILIA: {
        country: "Australia",
        city: "Sydney",
        // picSrc: [url1, url2, url3],
        alpha2: "AU"
      },
      ICELAND: {
        country: "Iceland",
        city: "Reykjavik",
        // picSrc: [url1, url2, url3],
        alpha2: "BR"
      }
    };



=======
  app.get("/destination/:country", function(req, res) {
>>>>>>> d5a9e94a6e43557e09eefdecb4fa34c0f4e750cd
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


    });
  });
};
