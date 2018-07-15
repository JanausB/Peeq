const express = require("express");
const hbs       = require("hbs");

const geo = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");

const googleKey = 'AIzaSyCEWnd7JRGdb0-5m3aJ32rNhJLyosaVBvI';
const darkSkyKey = 'd91d40173e7ad2c8e5d1f79244100565';

hbs.registerPartials('./views/partials');

var app = express();
app.use(express.static("public"));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index.hbs');
});



app.get('/:lat,:lng', function(req, res_top){
    console.log(req.params);
    var temp;
    geo.geocodeAddress(`${req.params.lat},${req.params.lng}`, (err, res)  => {
        if(err){
            console.log(err);
        }
        else{
             weather.getWeather(res.lat, res.lng, (err, weather_res) =>{
                 if(err){
                    console.log(err);
                    res_top.send(err);
                 }
                else{
                    console.log(`It is currently ${weather_res.temperature} in ${res.a}, but it feels like ${weather_res.apperentTemp}`);
                    temp =`It is currently ${weather_res.temperature} in ${res.a}, but it feels like ${weather_res.apperentTemp}`;
                    res_top.render('report.hbs', {
                        loc: res.a,
                        temp: weather_res.temperature,
                        aptemp: weather_res.apperentTemp,
                        icon: weather_res.icon
                    });
                }
             })
        }
    });
});


app.get('/search/:val', function(req, res_top) {
    console.log(req.params.val);
    var temp;
    geo.geocodeAddress(req.params.val, (err, res)  => {
        if(err){
            console.log(err);
        }
        else{
             weather.getWeather(res.lat, res.lng, (err, weather_res) =>{
                 if(err){
                    console.log(err);
                    res_top.send(err);
                 }
                else{
                    console.log(`It is currently ${weather_res.temperature} in ${res.a}, but it feels like ${weather_res.apperentTemp}`);
                    temp =`It is currently ${weather_res.temperature} in ${res.a}, but it feels like ${weather_res.apperentTemp}`;
                    res_top.render('report.hbs', {
                        loc: res.a,
                        temp: weather_res.temperature,
                        aptemp: weather_res.apperentTemp,
                        icon: weather_res.icon
                    });
                }
             })
        }
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Weather app listner Service spinning, up. We're in the pipe, 5 by 5!");
});