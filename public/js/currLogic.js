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

  if (tempPref === "Cold") {
    window.location.href = "/destination/ICELAND";
    country = "ICELAND";
    localStorage.setItem("selected_country", country);
  } else {
    if (enviroPref === "City") {
      if (alchoPref === "Wine") {
        window.location.href = "/destination/FRANCE";
        country = "FRANCE";
        localStorage.setItem("selected_country", country);

      } else {
        window.location.href = "/destination/BRAZIL";
        country = "BRAZIL";
        localStorage.setItem("selected_country", country);

      };
    } else {
      if (tempoPref === "Relaxing") {
        window.location.href = "/destination/PERU";
        country = "PERU";
        localStorage.setItem("selected_country", country);

      } else {
        window.location.href = "/destination/AUSTRALIA";
        country = "AUSTRALIA";
        localStorage.setItem("selected_country", country);
        
      };
    };
  };

  console.log(tempPref + name + enviroPref + tempoPref + alchoPref);
 
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
$("#frCurrCalc").on("click", function(event) {
  event.preventDefault();
  var fc = $("#fcurr")
    .val()
    .trim();
  var rate = $("#tarRate").text();
  var convert = fc / rate;
  $("#usdcurr").val(convert.toFixed(2));
});

