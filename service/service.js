var Client = require('node-rest-client').Client;

var client = new Client();

exports.getFortniteData = function() {
    var json = {};
    //Set Fortnite Header
    var args = {
        headers: { "TRN-Api-Key":  "f3ac61b5-aa77-44be-877f-f21b1c2914fc" }
    }
    // direct way
    client.get("https://api.fortnitetracker.com/v1/profile/pc/imstillyoung", args, function (data, response) {
        // parsed response body as js object
        json = data;

        return json;
    });
}