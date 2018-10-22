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
      console.log(result);
      console.log(result.dataValues);
      console.log(result.dataValues.currency);
      var hbsObject = {
        country: result.dataValues.country,
        currency: result.dataValues.currency
      };
      res.render("destination", hbsObject);
    });
  });
};
