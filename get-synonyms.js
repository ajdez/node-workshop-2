//Get-Synonyms File

var synonymsFunction = require("./library/synonyms.js");
var prompt = require('prompt');

prompt.get('word', function(err, result){
    if(err){
        console.log("the error message is as follows : ", err)
    }
    else{
        var apiKey = new synonymsFunction("07896debec77e990d709a9ff4ccb0926");
        apiKey.getSynonyms(result.word, function(err, result){
            if(err){
                console.log("the error is : " + err);
            }
            console.log(result);
        })        
    }
})

