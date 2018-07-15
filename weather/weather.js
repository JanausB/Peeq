const request = require("request");

const darkSkyKey = 'd91d40173e7ad2c8e5d1f79244100565';

var getWeather = (lat, lng, callback) => {
    request ({
            url: 'https://api.darksky.net/forecast/' + darkSkyKey + '/' + lat + ',' + lng,
            json: true
            }, function (error, response, body) {
                if(!error && response.statusCode===200){
                    callback(undefined, {
                        temperature: body.currently.temperature,
                        apperentTemp: body.currently.apparentTemperature
                    });
                }
                else
                    callback("Unable to fetch weather");
        });
};

module.exports.getWeather = getWeather;