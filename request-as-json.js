//Created the "request-as-json.js" file

var request = require('request');
var prompt = require('prompt');

//var url = "https://maps.googleapis.com/maps/api/geocode/json?address=montreal";
var url = "https://maps.gogeais.com/aps/ai/geocode/json?address=montreal";



function requestJson(url, callback) {
    request(url, function(err, result) {
        if (err) {
            callback(err);
        }
        else {
            try {
                callback(
                    null, 
                    JSON.parse(result.body)
                );
            }
            catch (err) {
                console.log("something went wrong in JSON request");
                callback(err);
            }
        }
    })
}

requestJson(url, function(err, result){
    if (err){
        console.log("THIS IS THE ERROR " ,err);
    }
    else{
        console.log("this is the result " , result);
    }
})
