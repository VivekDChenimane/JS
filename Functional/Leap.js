const readline = require('readline-sync');
const util = require('../Utility/Utility');
var year = readline.questionInt('Enter the year');
util.leap(year);
