// var currencyLayer = require("../api/curreny-layer");
var countries = ["RUSSIA", "BRAZIL", "KENYA", "AUSTRALIA", "CHILE", "BELIZE"];
var country = "";

$("#survey-btn").on("click", function(event) {
  event.preventDefault();
  var ranCountry = Math.floor(Math.random() * countries.length);
  country = countries[ranCountry];
  console.log(country);
  $.get("/api/Currencies/" + country, function(data) {
    console.log(data.country, data.currency, data.rate);
    rate(data);
  });
});

function rate(rateVal) {
  rateVal = parseFloat(rateVal.rate);
  console.log(rateVal);
  var amount = 100;
  console.log(amount * rateVal);
}
