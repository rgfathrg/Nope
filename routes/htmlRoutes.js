var path = require("path");
var db = require("../models");


module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../landing.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../survey.html"));
  });

  app.get("/destination/:country", function(req, res) {
    db.Currencies.findOne({
      where: {
        country: req.params.country
      }
    }).then(function(result) {
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
