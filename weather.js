var requestJSON = require('./library/request-json');
var prompt = require('prompt');

prompt.get('city', function(err, result){
    if(err){
        console.log("Something went wrong with the 'prompt'");
    }
    else{
        var urlCity = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city;
        
        requestJSON(urlCity, function(err, cityInfo){
            if(err){
                console.log("This is the error", err);
            }
            else{
                var cityLat = cityInfo.results[0].geometry.location.lat;
                var cityLng = cityInfo.results[0].geometry.location.lng;
                
                var urlDarkSky = "https://api.darksky.net/forecast/2c409eb3da49a3706de9fe983f4b9781/" + cityLat + cityLng;
                
                requestJSON(urlDarkSKy, function(err, darkCityInfo){
                    if(err){
                        console.log("This is the error ", err);
                    }
                    else{
                        
                    }
                })
            }
        })
    }
})
