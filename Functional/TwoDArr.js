const readline = require('readline-sync');
const util = require('../Utility/Utility');
console.log("Enter the array length of m rows n columns");
var m = readline.questionInt("Enter the value of m");
var n = readline.questionInt("Enter the value of n");
var arr = util.twoDArray(m,n);
util.print(arr);