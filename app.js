//1st party packages
const geo = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");
//3rd party packages
const yargs   = require("yargs");
const request = require("request");



const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe: 'address to fetch weather for',
        string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geo.geocodeAddress(argv.a, (err, res)  => {
    if(err){
        console.log(err);
    }
    else{
         weather.getWeather(res.lat, res.lng, (err, weather_res) =>{
             if(err)
                console.log(err);
            else{
                console.log(`It is currently ${weather_res.temperature} in ${res.a}, but it feels like ${weather_res.apperentTemp}`);
            }
         })
    }
});

