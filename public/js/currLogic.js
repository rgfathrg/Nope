// var currencyLayer = require("../api/curreny-layer");
//post to pull up-to-date currency rates
// $.post("/", function(req, res) {
//   res.status().json;
// });
var countries = ["BRAZIL", "FRANCE", "AUSTRALIA", "ICELAND", "PERU"];
var country = "";
//Arrary to collect factbook data as objects

$("#survey").on("click", function (event) {
  event.preventDefault();
  window.location.href = "/survey";
});

$("#survey-btn").on("click", function (event) {
  event.preventDefault();
  console.log("btn clicked");


  var name = $("#name").val().trim();
  var tempPref = $("#survey-weatherPref").val().trim();
  var enviroPref = $("#survey-enviroPref").val().trim();
  var tempoPref = $("#survey-tempoPref").val().trim();
  var alchoPref = $("#survey-alchoPref").val().trim();
  var userCurrency = $("#currency").val().trim();

  if (tempPref === "Cold") {
    window.location.href = "/destination/ICELAND";
  } else {
    if (enviroPref === "City") {
      if (alchoPref === "Wine") {
        window.location.href = "/destination/FRANCE";
      } else {
        window.location.href = "/destination/BRAZIL";
      };
    } else {
      if (tempoPref === "Relaxing") {
        window.location.href = "/destination/PERU";
      } else {
        window.location.href = "/destination/AUSTRALIA";
      };
    };
  };

  console.log(tempPref + name + enviroPref + tempoPref + alchoPref + userCurrency);
 
});

$("#random-btn").on("click", function (event) {
  event.preventDefault();
  var ranCountry = Math.floor(Math.random() * countries.length);
  country = countries[ranCountry];
  localStorage.setItem("selected_country", country);
  console.log(country);
  window.location.href = "/destination/" + country;
});

$("#currencyCalc").on("click", function (event) {
  event.preventDefault();
  var usd = $("#usdcurr")
    .val()
    .trim();
  var rate = $("#tarRate").text();
  var convert = usd * rate;
  $("#fcurr").val(convert.toFixed(2));
});
