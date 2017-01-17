var request = require('request');

function SynonymAPI(api){
    this.api = api;
    
}
SynonymAPI.prototype.getSynonyms = function(str, callback){
    var url = "http://words.bighugelabs.com/api/2/07896debec77e990d709a9ff4ccb0926/"+str+"/json";
    request(url, function(err, result){
        if (err){
            console.log("there was a problem. The error message is :");
        }
        else{
            var searchedItem = JSON.parse(result.body);
            
            callback(null, searchedItem);  //where should the error go?
        }
    })
}

module.exports =  SynonymAPI;