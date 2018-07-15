//3rd party packages
const yargs   = require("yargs");
const axios   = require("axios");

const googleKey = 'AIzaSyCEWnd7JRGdb0-5m3aJ32rNhJLyosaVBvI';
const darkSkyKey = 'd91d40173e7ad2c8e5d1f79244100565';

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '&key=' + googleKey;

axios.get(geocodeURL).then((res)=>{
    if(res.data.status === 'ZERO_RESULTS')
        throw new Error('unable to find that address');
    var weatherURL = 'https://api.darksky.net/forecast/' + darkSkyKey + '/' + res.data.results[0].geometry.location.lat + ',' + res.data.results[0].geometry.location.lng
   console.log(res.data.results[0].formatted_address);
   return axios.get(weatherURL);
}).then((res)=>{
    var temp = res.data.currently.temperature;
    var atemp = res.data.currently.apparentTemperature;
    console.log(`It is currently ${temp}, but it feels like ${atemp}`)
})
.catch((e) => {
    if(e.code === 'ENOTFOUND')
        console.log("Unable to connect to API servers");
    else
        console.log(e);

})