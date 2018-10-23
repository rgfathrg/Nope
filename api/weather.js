var currLogic = require("../public/js/currLogic");

$("#survey-btn").on("click", function (event) {

    event.preventDefault();

    var rec_country = country;
    var rec_city = "";
    // var rec_city =  "country.cityName"; - will select from places object
    // var rec_country = "country.countryName"; - will select from places object
    switch (rec_country) {

        case "BRAZIL":
            rec_city = "Rio de Janeir0";
            console.log(rec_city);
            break;

        case "PERU":
            rec_city = "Machu Picchu";
            console.log(rec_city);
            break;

        case "FRANCE":
            rec_city = "Paris";
            console.log(rec_city);
            break;

        case "AUSTRAILA":
            rec_city = "Sydney";
            console.log(rec_city);
            break;

        case "ICELAND":
            rec_city = "Reykjavik";
            console.log(rec_city);
            break;
    }

    // var rec_city = "Rio de Janeiro"; //recommended city - testing to make sure the rest of the code works properly


    // "Brazil"; //recommended country - testing to make sure the rest of the code works properly


    if (rec_city.includes(" ")) {

        rec_city = rec_city.split(" ").join("+");
        console.log(rec_city);
        //adjusting name of the city so it will have the correct format for the ajax call in the event the city name contains more than one word
    }

    var Destination = new Array(rec_city, rec_country);
    var newDest = Destination.join(",");
    //joining the city name and country with "," so the ajax call can be performed with the correct syntax
    console.log(newDest);

    var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
    var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + weatherAPIKey + "&q=" + newDest + "&format=JSON";
    // var location = ""

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var currentInfo = response.data.current_condition[0];
        var highLow = response.data.weather[0];
        var currentDay = {
            currentTemp: currentInfo.temp_F,
            weatherDesc: currentInfo.weatherDesc[0].value,
            weatherIconUrl: currentInfo.weatherIconUrl[0].value,
            low: highLow.mintempF,
            high: highLow.mintempF
        }


        // console.log(response);
        // console.log("It works... " + response.data.current_condition[0]);

        console.log("Current Temperature: " + currentDay.currentTemp); //current temperature...
        console.log("Current Weather Condition: " + currentDay.weatherDesc); //current weather description...
        console.log("Weather Icon URL: " + currentDay.weatherIconUrl); //current weather icon image
        console.log("Today's Low: " + currentDay.low); //lowest temperature for the current day
        console.log("Today's High: " + currentDay.high); //highest temperature for the current day
        console.log("/////////////////////");

        //display weather image on webpage..
        document.getElementById("icon").setAttribute("src", currentDay.weatherIconUrl);


        //                   ********** 5 Day Weather Forecast *********** 

        //DAY ONE response data...
        var day1 = response.data.weather[1];
        var dayOne = {
            date: day1.date,
            minTemp: day1.mintempF,
            maxTemp: day1.maxtempF,
            weatherDesc: day1.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day1.hourly[4].weatherIconUrl[0].value
        }
        console.log(dayOne.date); //date to convert to day-of-the-week
        console.log("Day 1 Low: " + dayOne.minTemp); //lowest temperature for day 1
        console.log("Day 1 High: " + dayOne.maxTemp); //highest temperature for day1
        console.log("Day 1 Weather Condition: " + dayOne.weatherDesc); //weather description for day 1
        console.log("Day 1 Weather Icon Url: " + dayOne.weatherIconUrl); //weather icon image for day 1
        console.log("/////////////////////");

        //calculating day of the week from date response....
        var weekday = new Date(dayOne.date);

        var daysofWeek = new Array(7); //Sunday - Saturday : 0-6
        daysofWeek[0] = "Sunday";
        daysofWeek[1] = "Monday";
        daysofWeek[2] = "Tuesday";
        daysofWeek[3] = "Wednesday";
        daysofWeek[4] = "Thursdady";
        daysofWeek[5] = "Friday";
        daysofWeek[6] = "Saturday";

        var new_weekday = daysofWeek[weekday.getDay()];
        console.log(new_weekday);


        //DAY TWO response data...
        var day2 = response.data.weather[2];
        var dayTwo = {
            date: day2.date,
            minTemp: day2.mintempF,
            maxTemp: day2.maxtempF,
            weatherDesc: day2.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day2.hourly[4].weatherIconUrl[0].value
        }
        console.log(dayTwo.date) //date to convert to day-of-the-week
        console.log("Day 2 Low: " + dayTwo.minTemp); //lowest temperature for day 2
        console.log("Day 2 High: " + dayTwo.maxTemp); //highest temperature for day 2 
        console.log("Day 2 Weather Condition: " + dayTwo.weatherDesc); //weather description for day 2
        console.log("Day 2 Weather Icon Url: " + dayTwo.weatherIconUrl); //weather icon image for day 2
        console.log("/////////////////////");

        //DAY THREE response data...
        var day3 = response.data.weather[3];
        var dayThree = {
            date: day3.date,
            minTemp: day3.mintempF,
            maxTemp: day3.maxtempF,
            weatherDesc: day3.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day3.hourly[4].weatherIconUrl[0].value
        }
        console.log(dayThree.date) //date to convert to day-of-the-week
        console.log("Day 3 Low: " + dayThree.minTemp); //lowest temperature for day 3
        console.log("Day 3 High: " + dayThree.maxTemp); //highest temperature for day 3
        console.log("Day 3 Weather Condition: " + dayThree.weatherDesc); //weather description for day 3
        console.log("Day 3 Weather Icon Url: " + dayThree.weatherIconUrl); //weather icon image for day 3
        console.log("/////////////////////");

        //DAY FOUR response data...
        var day4 = response.data.weather[4];
        var dayFour = {
            date: day4.date,
            minTemp: day4.mintempF,
            maxTemp: day4.maxtempF,
            weatherDesc: day4.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day4.hourly[4].weatherIconUrl[0].value
        }
        console.log(dayFour.date) //date to convert to day-of-the-week
        console.log("Day 4 Low: " + dayFour.minTemp); //lowest temperature for day 4
        console.log("Day 4 High: " + dayFour.maxTemp); //highest temperature for day 4
        console.log("Day 4 Weather Condition: " + dayFour.weatherDesc); //weather description for day 4
        console.log("Day 4 Weather Icon Url: " + dayFour.weatherIconUrl); //weather icon image for day 4
        console.log("/////////////////////");

        //DAY FIVE response data...
        var day5 = response.data.weather[5];
        var dayFive = {
            date: day5.date,
            minTemp: day5.mintempF,
            maxTemp: day5.maxtempF,
            weatherDesc: day5.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day5.hourly[4].weatherIconUrl[0].value
        }
        console.log(dayFive.date) //date to convert to day-of-the-week
        console.log("Day 5 Low: " + dayFive.minTemp); //lowest tempertaure for day 5
        console.log("Day 5 High: " + dayFive.maxTemp); //highest temperature for day 5
        console.log("Day 5 Weather Condition: " + dayFive.weatherDesc); //weather description for day 5
        console.log("Day 5 Weather Icon Url: " + dayFive.weatherIconUrl); //weather icon image for day 5




        //                       ********** STEP FOR MAKING WEATHER API CALL **********

        //1. Reference the destination object
        //2. Slice the destination object/array so that only the county name and city are left and set equal to new_var_name
        //.....nameOfArray.prototype.slice(-1)  - use negative to slice off the end of the array
        //...Check to see if city name includes space(s) i.e. more than one word, city.includes(" ");
        //.....if city name is > 1 word, will need to separate each word and rejoin them with (+);
        //3. need to join the new City name (if amended) and county using (,), arrayName.join(" ");
        //......either combine 2 & 3 on the same variable or create a new variable for step 3
        //4. Make ajax call using the variable where the city and country have been joined (city,country)


        //Responses to include on page: 
        //1. City, Country (not needed since it will be at the top of page (handled by dest.handlebars)
        //2. current temperature  = response.data.current_condition[0].tempF..see code below to add degree symbol
        //        <p>I will display &#8457;</p>  I will display ℉  - will need to add on handlebars page
        //        <p>I will display &#x2109;</p>  I will display ℉ - will need to add on handlebars page
        //3. weather desription = response.data.current_condition[0].weatherDesc[0].value
        //4. weather icon url = response.data.current_condition[0].weatherIconURL[0].value
        //              document.getElementById("icon").setAttribute("src", currentDay.weatherIconUrl);
        //5. mintemp = response.data.weather[0].mintempF
        //6  max temp = response.data.weather[0].maxtempF
        //7. Min/Max Temp  & weather descip, weather icon for next 5 days


    });

});


module.exports = currLogic;