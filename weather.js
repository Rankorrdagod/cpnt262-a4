const https = require("https");
const {key} = require("./env.json");

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
console.log("The temperature in " + name + " is " + temp);
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