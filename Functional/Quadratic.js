const readline = require('readline-sync');
const util = require('../Utility/Utility');
console.log("Quadratic equation is of the form aX2 + bX + c =0");
var a = readline.questionInt('Enter the value of A');
var b = readline.questionInt('Enter the value of B');
var c = readline.questionInt('Enter the value of C');
var root = util.quadratic(a,b,c);
console.log("The values of x are "+root[0]+" and "+root[1]);