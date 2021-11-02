const weather = require('./weather');
const chalk = require('chalk');
const log = console.log;
const cityName = process.argv.slice(2).join(" ");

weather(cityName);
console.log(cityName)