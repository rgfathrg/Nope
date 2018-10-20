// var currencyLayer = require("../api/curreny-layer");
var countries = ["RUSSIA", "BRAZIL", "KENYA", "AUSTRALIA", "CHILE", "BELIZE"];
var country = "";

$("#survey").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/survey";
});

$("#survey-btn").on("click", function(event) {
  event.preventDefault();
  var ranCountry = Math.floor(Math.random() * countries.length);
  country = countries[ranCountry];
  console.log(country);
  window.location.href = "/destination/" + country;
});

// $.post("/", function(req, res) {
//   res.status().json;
// });

$("#currencyCalc").on("click", function(event) {
  event.preventDefault();
  var usd = $("#usdcurr")
    .val()
    .trim();
  var rate = $("#tarRate").text();
  var convert = usd * rate;
  $("#fcurr").val(convert.toFixed(2));
});
