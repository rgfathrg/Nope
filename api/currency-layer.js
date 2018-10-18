var db = require("../models");
var axios = require("axios");
module.exports = function(app, cb) {
  var queryURL =
    "http://apilayer.net/api/live?access_key=9e06f9362889d9c728800da11ece176c";
  axios
    .get(queryURL)
    .then(function(response) {
      var quotes = response.data.quotes;
      for (var key in quotes) {
        if (quotes.hasOwnProperty(key)) {
          console.log(key);
          db.Currencies.update(
            {
              rate: quotes[key]
            },
            {
              where: {
                pair: key
              }
            }
          );
        }
      }
      cb(200);
    })
    .catch(function(err) {
      console.log(err);
      cb(500);
    });
};
