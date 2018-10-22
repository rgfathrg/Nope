// var currencyLayer = require("../api/curreny-layer");
//post to pull up-to-date currency rates
// $.post("/", function(req, res) {
//   res.status().json;
// });
var countries = ["BRAZIL", "MOROCCO", "AUSTRALIA", "ICELAND", "PERU"];
var country = "";
//Arrary to collect factbook data as objects

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

$("#currencyCalc").on("click", function(event) {
  event.preventDefault();
  var usd = $("#usdcurr")
    .val()
    .trim();
  var rate = $("#tarRate").text();
  var convert = usd * rate;
  $("#fcurr").val(convert.toFixed(2));
});
