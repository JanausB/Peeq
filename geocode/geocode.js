const request = require("request");
const apiKey = 'AIzaSyCEWnd7JRGdb0-5m3aJ32rNhJLyosaVBvI';

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request ({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + apiKey,
    json: true
    }, function (error, response, body) {
        if(error){
            callback("Unable to connect to Google Servers.", undefined)
        } else if(body.status === "ZERO_RESULTS"){
            callback("Unable to find that address.", undefined);
        } else if(body.status === "OK"){
            callback(undefined, {
                a: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
            
    });
};

module.exports.geocodeAddress = geocodeAddress;