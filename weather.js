const https = require("https");
const {key} = require("./env.json");
const chalk = require('chalk');
function fetchWeather(cityName) {
    const queryParams = {
        appid: key,
        city: cityName,
    
    };
console.log(queryParams)
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+queryParams.city+"&appid="+queryParams.appid;
    
    
    try {
        const request = https.get(url, (Response) => {
            if (Response.statusCode === 200) {
                let body = "";
                Response.on("data", (buffer) => {
                    body += buffer;
                });
                Response.on('end', () => {
const data = JSON.parse(body);
const name = data.name;
const temp = data.main.temp;
const lon = data.coord.lon;
const lat = data.coord.lat;
const log = console.log;
log(chalk.blue("The temperature in "+ chalk.yellow(name) + " is " + temp +chalk.green(" located at longitude:"+ lon) + chalk.red(" and latitude:"+lat)));
                });

            } else{
                    console.log("something went wrong" + Response.statusCode + "error");
                    return;
                }
        });
       
    } catch (error) {
        console.log(error);
    }
  
}

module.exports = fetchWeather;