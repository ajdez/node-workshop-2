var request = require('request');

module.exports = function requestJson(url, callback) {
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

