const weather = require('./weather');

const cityName = process.argv.slice(2).join(" ");

weather(cityName);
console.log(cityName)