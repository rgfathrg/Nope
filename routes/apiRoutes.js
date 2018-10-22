var db = require("../models");





module.exports = function (app) {

 



  // Get all...
  app.get("/example", function (req, res) {


    // var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
    // var queryUrl = "http://api.worldweatheronline.com/premium/v1/weather.ashx" + weatherAPIKey + "q=Charlotte";
  
  
    // $.ajax({
    //   url: queryUrl,
    //   method: "GET"
    // }).then(function (response) {
    //   console.log(response);
    // });

    db.Example.findAll({}).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.post("/api/example", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/example/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
