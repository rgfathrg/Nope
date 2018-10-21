$("#survey-btn").on("click", function (event) {

    event.preventDefault();
    // var rec_country = "country.countryName";
    // var rec_city =  "country.cityName";
    const rec_country = "Brazil";
    const rec_city = "Rio de Janeiro";

    if (rec_city.includes(" ")) {

        rec_city = rec_city.split(" ").join("+");
    }

    var Destination = new Array(rec_city, rec_country);
    var newDest = Destination.join(" ");

    var weatherAPIKey = "f5f08ce79b534c1a907162145181310";
    var queryURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + weatherAPIKey + "&q=" + newDest + "&format=JSON";
    // var location = ""

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var currentInfo = response.data.current_condition[0];
        var highLow = response.data.weather[0];
        var currentDay =  {
            currentTemp: currentInfo.tempF,
            weatherDesc: currentInfo.weatherDesc[0].value,
            weatherIconUrl: day1.hourly[4].weatherIconUrl[0].value,
            low: highLow.mintempF,
            high: highLow.mintempF
        }

        console.log(response);
        // console.log("It works, see... " + response.data.current_condition[0]);

        console.log("Current Temperature: " + currentInfo.tempF); //current temperature...
        console.log("Current Weather Condition: " + currentInfo.weatherDesc[0].value); //current weather description...
        console.log("Weather Icon URL: " + currentInfo.weatherIconUrl[0].value); //weather icon image
        console.log("Today's Low: " + highLow.mintempF); //lowest temperature for the current day
        console.log("Today's High: " + highLow.maxtempF); //highest temperature for the current day
        console.log("/////////////////////");
        //5 Day Weather Forecast....

        var day1 = response.data.weather[1];
        var dayOne = {
            date: day1.data,
            minTemp: day1.mintempF,
            maxtemp: day1.maxtempF,
            weatherDesc: day1.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day1.hourly[4].weatherIconUrl[0].value
        }
        console.log(day1.date); //date to convert to day-of-the-week
        console.log("Day 1 Low: " + day1.mintempF); //lowest temperature for day 1
        console.log("Day 1 High: " + day1.maxtempF); //highest temperature for day1
        console.log("Day 1 Weather Condition: " + day1.hourly[4].weatherDesc[0].value); //weather description for day 1
        console.log("Day 1 Weather Icon Url: " + day1.hourly[4].weatherIconUrl[0].value); //weather icon image for day 1
        console.log("/////////////////////");


        var day2 = response.data.weather[2];
        var dayTwo = {
            date: day2.data,
            minTemp: day2.mintempF,
            maxtemp: day2.maxtempF,
            weatherDesc: day2.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day2.hourly[4].weatherIconUrl[0].value
        }
        console.log(day2.date) //date to convert to day-of-the-week
        console.log("Day 2 Low: " + day2.mintempF); //lowest temperature for day 2
        console.log("Day 2 High: " + day2.maxtempF); //highest temperature for day 2 
        console.log("Day 2 Weather Condition: " + day2.hourly[4].weatherDesc[0].value); //weather description for day 2
        console.log("Day 2 Weather Icon Url: " + day2.hourly[4].weatherIconUrl[0].value); //weather icon image for day 2
        console.log("/////////////////////");


        var day3 = response.data.weather[3];
        var dayThree = {
            date: day3.data,
            minTemp: day3.mintempF,
            maxtemp: day3.maxtempF,
            weatherDesc: day3.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day3.hourly[4].weatherIconUrl[0].value
        }
        console.log(day3.date) //date to convert to day-of-the-week
        console.log("Day 3 Low: " + day3.mintempF); //lowest temperature for day 3
        console.log("Day 3 High: " + day3.maxtempF); //highest temperature for day 3
        console.log("Day 3 Weather Condition: " + day3.hourly[4].weatherDesc[0].value); //weather description for day 3
        console.log("Day 3 Weather Icon Url: " + day3.hourly[4].weatherIconUrl[0].value); //weather icon image for day 3
        console.log("/////////////////////");


        var day4 = response.data.weather[4];
        var dayFour = {
            date: day4.data,
            minTemp: day4.mintempF,
            maxtemp: day4.maxtempF,
            weatherDesc: day4.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day4.hourly[4].weatherIconUrl[0].value
        }
        console.log(day4.date) //date to convert to day-of-the-week
        console.log("Day 4 Low: " + day4.mintempF); //lowest temperature for day 4
        console.log("Day 4 High: " + day4.maxtempF); //highest temperature for day 4
        console.log("Day 4 Weather Condition: " + day4.hourly[4].weatherDesc[0].value); //weather description for day 4
        console.log("Day 4 Weather Icon Url: " + day4.hourly[4].weatherIconUrl[0].value); //weather icon image for day 4
        console.log("/////////////////////");

        var day5 = response.data.weather[5];
        var dayFive = {
            date: day5.data,
            minTemp: day5.mintempF,
            maxtemp: day5.maxtempF,
            weatherDesc: day5.hourly[4].weatherDesc[0].value,
            weatherIconUrl: day5.hourly[4].weatherIconUrl[0].value
        }
        console.log(day5.date) //date to convert to day-of-the-week
        console.log("Day 5 Low: " + day5.mintempF); //lowest tempertaure for day 5
        console.log("Day 5 High: " + day5.maxtempF); //highest temperature for day 5
        console.log("Day 5 Weather Condition: " + day5.hourly[4].weatherDesc[0].value); //weather description for day 5
        console.log("Day 5 Weather Icon Url: " + day5.hourly[4].weatherIconUrl[0].value); //weather icon image for day 5

        


        //1. reference the destination object
        //2. slice the destination object/array so that only the county name and city are left and set equal to new_var_name
        //.....nameOfArray.prototype.slice(-1)  - use negative to slice off the end of the array
        //...check to see if city name includes space(s) i.e. more than one word, city.includes(" ");
        //.....if city name is > 1 word, will need to separate each word and rejoin them with (+);
        //3. need to join the new City name (if amended) and county using (,), arrayName.join(" ");
        //......either combine 2 & 3 on the same variable or create a new variable for step 3
        //4. make ajax call using the variable where the city and country have been joined (city,country)


        //Responses to include on page: 
        //1. city, country (not needed since it will at top of page (handled by dest.handlebars))
        //2. current temperature  = response.data.current_condition[0].tempF..see code below to add degree symbol
        //        <p>I will display &#8457;</p>  I will display ℉  - will need to add on handlebars page
        //        <p>I will display &#x2109;</p>  I will display ℉ - will need to add on handlebars page
        //3. weather desription = response.data.current_condition[0].weatherDesc[0].value
        //4. weather icon url = response.data.current_condition[0].weatherIconURL[0].value
        //              dq
        //5. mintemp = response.data.weather[0].mintempF
        //6  max temp = response.data.weather[0].maxtempF
        //7. Min/Max Temp  & weather descip, weather icon for next 5 days


    });

});