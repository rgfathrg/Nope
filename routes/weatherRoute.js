
$.ajax({
    url: "http://api.worldweatheronline.com/premium/v1/weather.ashx" + weatherAPIKey + "q=Charlotte",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });




// var axios = require("axios");
//   module.exports = function (app, cb) {
  
//       var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
//       var queryURL =
//           "http://api.worldweatheronline.com/premium/v1/weather.ashx" + weatherAPIKey + "q=Charlotte";
//       axios
//           .get(queryURL)
//           .then(function (response) {
//               var weatherStats = response.data.location;
//               console.log(weatherStats);
//           })
//           .catch(function (err) {
//               console.log(err);
              
//           });

          
//   };

