var db = require("../models");
var axios = require("axios");
module.exports = function (app, cb) {

    var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
    var queryURL =
        "http://api.worldweatheronline.com/premium/v1/weather.ashx" + weatherAPIKey + "q=Charlotte";
    axios
        .get(queryURL)
        .then(function (response) {
            var weatherStats = response.data.location;

        })
        .catch(function (err) {
            console.log(err);
            cb(500);
        });
};