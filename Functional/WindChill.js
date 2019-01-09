const readline = require('readline-sync');
const util = require('../Utility/Utility');
console.log("Enter temperature t (in Fahrenheit) greater than 50 and the wind speed v (in miles per hour) in the range 3 to 120 to get WindChill");
var t = readline.questionFloat("Enter the value of temperature");
var v = readline.questionFloat("Enter the value of speed of wind");
var value=util.chillWind(t,v);
console.log(value);