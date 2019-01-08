const readline = require('readline-sync');
const util = require('../Utility/Utility');
console.log("Get to know the distance from the origin by Entering X and Y values:");
var X = readline.questionInt("Enter the value of X");
var Y = readline.questionInt("Enter the value of Y");
var distance = util.euclidean(X,Y);
console.log("The distance between the point to the origin is "+distance);