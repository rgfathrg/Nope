var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + weatherAPIKey + "&q=Charlotte&format=JSON";
// var location = ""

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){
console.log(response);
console.log("It works, see... " + response.data.current_condition[0].observation_time);
});