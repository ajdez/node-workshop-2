var requestJSON = require('./library/request-json');
var prompt = require('prompt');

prompt.get('city', function(err, result) {
    if (err) {
        console.log("Something went wrong with the 'prompt'");
    }
    else {
        var urlCity = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city;

        requestJSON(urlCity, function(err, cityInfo) {
            if (err) {
                console.log("This is the error", err);
            }
            else {
                var cityLat = cityInfo.results[0].geometry.location.lat;
                var cityLng = cityInfo.results[0].geometry.location.lng;

                var urlDarkSky = "https://api.darksky.net/forecast/2c409eb3da49a3706de9fe983f4b9781/" + cityLat + "," + cityLng;

                requestJSON(urlDarkSky, function(err, darkCityInfo) {
                    if (err) {
                        console.log("This is the error ", err);
                    }
                    else {
                        var currentWeather = darkCityInfo.currently.temperature;
                        // var tomorrowWeatherMax = darkCityInfo.daily.data[1].temperatureMax;
                        // var tomorrowWeatherMin = darkCityInfo.daily.data[1].temperatureMin;
                        // console.log("The current weather in " + result.city + " is", currentWeather, "°F");
                        // console.log("Tomorrow's weather in " + result.city + " will be a high of " + tomorrowWeatherMax + " °F and low of " + tomorrowWeatherMin + "°F");

                        for (var i = 1; i < 6; i++) {
                            switch (i) {
                                case 1:
                                    console.log("Weather Tomorrow in " + result.city + " will be a high of " + darkCityInfo.daily.data[1].temperatureMax + "°F with a low of " + darkCityInfo.daily.data[1].temperatureMin + "°F");
                                    break;
                                case 2:
                                    console.log("Weather for the day after Tomorrow in " + result.city + " will be a high of " + darkCityInfo.daily.data[2].temperatureMax + "°F with a low of "+ darkCityInfo.daily.data[2].temperatureMin +"°F");
                                    break;
                                case 3:
                                    console.log("Weather 3 days from now in " + result.city + " will be a high of " + darkCityInfo.daily.data[3].temperatureMax + "°F with a low of "+ darkCityInfo.daily.data[3].temperatureMin +"°F");
                                    break;
                                case 4:
                                    console.log("Weather 4 days from now in " + result.city + " will be a high of " + darkCityInfo.daily.data[4].temperatureMax + "°F with a low of "+ darkCityInfo.daily.data[4].temperatureMin +"°F");
                                    break;
                                case 5:
                                    console.log("Weather 5 days in " + result.city + " will be a high of " + darkCityInfo.daily.data[5].temperatureMax + "°F with a low of "+ darkCityInfo.daily.data[5].temperatureMin +"°F");
                                
                            }

                        }
                    }
                })
            }
        })
    }
})
