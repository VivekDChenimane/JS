const readline = require('readline-sync');
const util = require('../Utility/AlgoUtil');
var range = readline.questionInt("Enter the range from 0 to get the prime numbers from that range");
util.prime(range);