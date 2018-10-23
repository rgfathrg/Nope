var currencyLayer = require("../api/currency-layer");
var db = require("../models");

module.exports = function(app) {
  app.post("/", function(req, res) {
    currencyLayer.apiGet(app, function(code) {
      if (code === 200) {
        console.log("success");
      } else {
        console.log("failed to load");
      }
      res.status().json;
    });
  });

  app.get("/api/Currencies/:country?", function(req, res) {
    if (req.params.country) {
      db.Currencies.findOne({
        where: {
          country: req.params.country
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      db.Currencies.findAll().then(function(result) {
        return res.json(result);
      });
    }
    // currencyLayer.findRate(app, function(code, data) {
    //   if (code === 200) {
    //     console.log("success");
    //   } else {
    //     console.log("failed to load");
    //   }
    //   res.json(data);
    //   res.status().json;
    // });
  });
};
