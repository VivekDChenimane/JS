const Utility = require('../Utility/Utility');
const readline = require('readline-sync');
var times = readline.question("Enter the number of times to flip a coin");
Utility.flipCoin(times);