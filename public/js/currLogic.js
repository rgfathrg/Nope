// var currencyLayer = require("../api/curreny-layer");
var countries = ["RUSSIA", "BRAZIL", "KENYA", "AUSTRALIA", "CHILE", "BELIZE"];
var country = "";

$("#survey").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/survey";
})

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
  console.log("clicked");
  var usd = $("#usdcurr")
    .val()
    .trim();
  console.log(usd);
  var rate = $("#tarRate").text();
  console.log(rate);
  var convert = usd * rate;
  console.log(convert.toFixed(2));
  $("#fcurr").text(convert);
});

// rateVal = parseFloat(rateVal.rate);
//   console.log(rateVal);
//   var amount = 100;
//   console.log(amount * rateVal);