$("#survey-btn").on("click", function (event) {

    event.preventDefault();
    // var rec_country = "country.countryName";
    // var rec_city =  "country.cityName";
    var rec_country = "Brazil";
    var rec_city = "Rio de Janeiro";

    if (rec_city.includes(" ")) {

        rec_city = rec_city.split(" ").join("+");
        console.log(rec_city);
    }

    var Destination = new Array(rec_city, rec_country);
    var newDest = Destination.join(",");
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

        //getting day of the week from date response....
        var weekday = new Date(dayOne.date);

        var daysofWeek = new Array(7);
        daysofWeek[0] = "Sunday";
        daysofWeek[1] = "Monday";
        daysofWeek[2] = "Tuesday";
        daysofWeek[3] = "Wednesday";
        daysofWeek[4] = "Thursdady";
        daysofWeek[5] = "Friday";
        daysofWeek[6] = "Saturday";

        var new_weekday = daysofWeek[weekday.getDay()];

        //Sunday - Saturday : 0-6
        console.log(new_weekday);
        // console.log(response);
        // console.log("It works, see... " + response.data.current_condition[0]);

        console.log("Current Temperature: " + currentDay.currentTemp); //current temperature...
        console.log("Current Weather Condition: " + currentDay.weatherDesc); //current weather description...
        console.log("Weather Icon URL: " + currentDay.weatherIconUrl); //weather icon image
        console.log("Today's Low: " + currentDay.low); //lowest temperature for the current day
        console.log("Today's High: " + currentDay.high); //highest temperature for the current day
        console.log("/////////////////////");

        document.getElementById("icon").setAttribute("src", currentDay.weatherIconUrl);


        //5 Day Weather Forecast....

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
        //              
        //5. mintemp = response.data.weather[0].mintempF
        //6  max temp = response.data.weather[0].maxtempF
        //7. Min/Max Temp  & weather descip, weather icon for next 5 days


    });

});