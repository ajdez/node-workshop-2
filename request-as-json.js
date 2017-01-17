//Created the "request-as-json.js" file
var requestJSON = require('./library/request-json');
var prompt = require('prompt');

var url = "https://maps.googleapis.com/maps/api/geocode/json?address=montreal";

requestJSON(url, function(err, result){
    if (err){
        console.log("THIS IS THE ERROR " ,err);
    }
    else{
        console.log("this is the result " , result);
    }
})
