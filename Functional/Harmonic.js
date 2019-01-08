const readline = require('readline-sync');
const util = require('../Utility/Utility');
var num = readline.questionInt("Enter the position number whose Harmonic value is needed:");
util.harmonic(num);