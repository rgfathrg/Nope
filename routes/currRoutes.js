var currencyLayer = require("../api/currency-layer");

module.exports = function(app) {
  app.post("/api/Currencies", function(req, res) {
    currencyLayer(app, function(code) {
      if (code === 200) {
        console.log("success");
      } else {
        console.log("failed to load");
      }
      res.status().json;
    });
  });
};
