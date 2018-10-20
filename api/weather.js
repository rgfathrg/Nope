var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + weatherAPIKey + "&q=Houston&format=JSON";
// var location = ""

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response){
console.log(response);
console.log("It works, see... " + response.data.current_condition[0]);

//To perform Weather API search....

// var city = "New York";

// if (city.includes(" ")) {

//     var newCity = city.split(" ").join("+");
//     console.log(newCity);
// }else {
//
//
//     }

//CODE GOES HERE....



//1. reference the destination object
//2. slice the destination object/array so that only the county name and city are left and set equal to new_var_name
//.....nameOfArray.prototype.slice(-1)  - use negative to slice off the end of the array
//...check to see if city name includes space(s) i.e. more than one word, city.includes(" ");
//.....if city name is > 1 word, will need to separate each word and rejoin them with (+);
//3. need to join the new City name (if amended) and county using (,), arrayName.join(" ");
//......either combine 2 & 3 on the same variable or create a new variable for step 3
//4. make ajax call using the variable where the city and country have been joined (city,country)


//Responses to include on page: 
//1. city, country
//2. current temperature  = response.data.current_condition[0].tempF..see code below to add degree symbol
//        <p>I will display &#8457;</p>  I will display ℉  - will need to add on handlebars page
//        <p>I will display &#x2109;</p>  I will display ℉ - will need to add on handlebars page
//3. weather desription = response.data.current_condition[0].weatherDesc[0].value
//4. weather icon url = response.data.current_condition[0].weatherIconURL[0].value
//              document.getElementById("img_id").setAttribute("src", IconUrl);
//5. mintemp = response.data.weather[0].mintempF
//6  max temp = response.dtat.weather[0].maxtempF
//7. Min/Max Temp  & weather descip, weather icon for next 5 days


});